<template>
    <div v-if="data" class="bg-[#1e1f22] rounded-lg text-white w-full max-w-md">
      <div v-if="data.data.activities.length > 0">
        <div v-for="activity in data.data.activities" :key="activity.id">
          <div
            v-if="activity.type === 0"
            class="flex flex-row h-[120px] ml-[15px] text-[0.75rem] pt-[18px] bg-[#1e1f22] rounded-lg"
          >
            <div class="relative mr-[15px]">
              <img
                v-if="activity.assets?.large_image"
                :src="getAssetUrl(activity.assets.large_image)"
                :alt="activity.assets.large_text"
                class="w-[80px] h-[80px] border-[0.5px] border-[#222] rounded-[10px]"
              />
              <img
                v-if="activity.assets?.small_image"
                :src="getAssetUrl(activity.assets.small_image)"
                :alt="activity.assets.small_text"
                class="w-[24px] h-[24px] rounded-full absolute bottom-3 left-16"
              />
            </div>
            <div class="text-[#999] w-[279px]">
              <p class="text-white text-sm font-semibold">
                {{ activity.name }}
              </p>
              <p v-if="activity.details" class="text-gray-300 text-xs truncate">
                {{ activity.details }}
              </p>
              <p v-if="activity.state" class="text-gray-300 text-xs truncate">
                {{ activity.state }}
              </p>
              <p v-if="activity.timestamps?.start" class="text-gray-300 text-xs">
                {{ getElapsedTime(activity.timestamps.start) }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-gray-400">
        No current activity
      </div>
    </div>
  </template>
  

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface DiscordUser {
    id: string
    username: string
    avatar: string
    discriminator: string
    global_name: string
    display_name: string
    public_flags: number
    bot: boolean
    avatar_decoration_data?: {
        sku_id: string
        asset: string
        expires_at: null | string
    }
}

interface Activity {
    id: string
    name: string
    type: number
    state?: string
    details?: string
    created_at: number
    flags?: number
    application_id?: string
    session_id?: string
    emoji?: {
        id: string
        name: string
        animated: boolean
    }
    assets?: {
        large_image?: string
        large_text?: string
        small_image?: string
        small_text?: string
    }
    timestamps?: {
        start: number
        end?: number
    }
}

interface LanyardResponse {
    data: {
        kv: Record<string, unknown>
        discord_user: DiscordUser
        activities: Activity[]
        discord_status: string
        active_on_discord_web: boolean
        active_on_discord_desktop: boolean
        active_on_discord_mobile: boolean
        listening_to_spotify: boolean
        spotify: null | unknown
    }
    success: boolean
}

const data = ref<LanyardResponse | null>(null)

const fetchDiscordStatus = async () => {
    try {
        const response = await fetch('https://api.lanyard.rest/v1/users/902534396752588861')
        const json = await response.json()
        data.value = json
    } catch (error) {
        console.error('Error fetching Discord status:', error)
    }
}

const getAssetUrl = (assetUrl: string): string => {
    if (assetUrl.startsWith('mp:external/')) {
        return `https://${assetUrl.split('/https/')[1]}`
    }
    return `https://cdn.discordapp.com/app-assets/${assetUrl}`
}

const getElapsedTime = (timestamp: number): string => {
    const elapsed = Math.floor((Date.now() - timestamp) / 1000)
    const hours = Math.floor(elapsed / 3600)
    const minutes = Math.floor((elapsed % 3600) / 60)
    return `${hours}h ${minutes}m elapsed`
}

onMounted(() => {
    fetchDiscordStatus()
    setInterval(fetchDiscordStatus, 30000)
})
</script>