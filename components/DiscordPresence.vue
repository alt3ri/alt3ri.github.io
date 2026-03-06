<template>
  <div v-if="data">
    <div class="flex items-center gap-2 mb-3">
      <span class="status-dot" :style="{ backgroundColor: statusColor }"></span>
      <span class="text-xs uppercase tracking-widest" style="color: var(--text-muted);">
        {{ data.data.discord_status === 'online' ? 'online' : data.data.discord_status === 'idle' ? 'idle' : data.data.discord_status === 'dnd' ? 'do not disturb' : 'offline' }}
      </span>
    </div>

    <div v-if="data.data.activities.length > 0">
      <div v-for="activity in data.data.activities" :key="activity.id">
        <div
          v-if="activity.type === 0"
          class="flex flex-row gap-3 items-start"
        >
          <div class="shrink-0">
            <img
              :src="activityImages[activity.id] || 'https://lanyard-profile-readme.vercel.app/assets/unknown.png'"
              alt="Activity"
              class="w-16 h-16 profile-img"
            />
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold truncate" style="color: var(--text-heading);">
              {{ activity.name }}
            </p>
            <p v-if="activity.details" class="text-xs truncate mt-1" style="color: var(--text-body);">
              {{ activity.details }}
            </p>
            <p v-if="activity.state" class="text-xs truncate" style="color: var(--text-muted);">
              {{ activity.state }}
            </p>
            <p v-if="activity.timestamps?.start" class="text-xs mt-1" style="color: var(--text-muted);">
              {{ getElapsedTime(activity.timestamps.start) }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else style="color: var(--text-muted);" class="text-xs">
      no current activity
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { Buffer } from 'buffer';

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

const statusColor = computed(() => {
    if (!data.value) return '#666'
    switch (data.value.data.discord_status) {
        case 'online': return '#43b581'
        case 'idle': return '#faa61a'
        case 'dnd': return '#f04747'
        default: return '#666'
    }
})

const encodeBase64 = async (url: string): Promise<string> => {
    let response = "";

    try {
        response = await fetch(url, {
            cache: "no-store",
        })
            .then((res) => res.blob())
            .then(async (blob) => {
                const buffer = Buffer.from(await blob.arrayBuffer());
                return buffer.toString("base64");
            });
    } catch (e) {
        console.log(e);
    }

    return response;
};

const getAssetUrl = async (applicationId: string, assetUrl: string): Promise<string> => {
     if (assetUrl.startsWith('mp:external/')) {
         return `https://${assetUrl.split('/https/')[1]}`
     }
     return `https://cdn.discordapp.com/app-assets/${applicationId}/${assetUrl}.webp` || `https://media.discordapp.net/external/${assetUrl.replace("mp:external/", "")}`
}

const activityImages = ref<Record<string, string>>({})

const fetchDiscordStatus = async () => {
    try {
        const response = await fetch('https://api.lanyard.rest/v1/users/902534396752588861')
        const json = await response.json()
        data.value = json

        const newImages: Record<string, string> = {}
        for (const activity of json.data.activities) {
            if (activity.type === 0 && activity.application_id && activity.assets?.large_image) {
                try {
                    const imageUrl = await getAssetUrl(activity.application_id, activity.assets.large_image)
                    const base64 = await encodeBase64(imageUrl)
                    newImages[activity.id] = `data:image/png;base64,${base64}`
                } catch (e) {
                    newImages[activity.id] = 'https://lanyard-profile-readme.vercel.app/assets/unknown.png'
                }
            }
        }
        activityImages.value = newImages
    } catch (error) {
        console.error('Error fetching Discord status:', error)
    }
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