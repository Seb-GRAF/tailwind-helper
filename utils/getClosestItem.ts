export type TailwindObjectKey = 'rem' | 'px' | 'percent' | 'weight' | 'spacing'

type Findable = {
  spacing?: number
  rem?: number
  px?: number
  weight?: number
  percent?: number

  class: string
}

export const getClosestItem = (
  tailwindClassesArray: Findable[],
  value: number,
  key?: TailwindObjectKey
): Findable => {
  return tailwindClassesArray.reduce(
    (prev: Findable, curr: Findable): Findable => {
      return Math.abs(curr[key] - value) < Math.abs(prev[key] - value)
        ? curr
        : prev
    }
  )
}
