declare module '@bedard/gradient' {
  export default class Gradient {
    constructor(
      canvas: HTMLCanvasElement,
      options?: {
        colors?: string[]
        seed?: number
      }
    )
  }
}
