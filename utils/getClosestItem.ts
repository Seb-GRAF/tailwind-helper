type Findable = {
    spacing?: number;
    rem?: number
    px?: number
    weight?: number

    class: string
    [key: string]: any;
};

export const getClosestItem = (
    tailwindClassesArray: Findable[],
    value: number,
    key?: string,
): Findable => {
    return tailwindClassesArray.reduce(
        (prev: Findable, curr: Findable): Findable => {
            return Math.abs(curr[key] - value) < Math.abs(prev[key] - value)
                ? curr
                : prev
        }
    )
}