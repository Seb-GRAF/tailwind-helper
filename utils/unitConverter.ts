export type UnitKey = 'rem' | 'px'

export const unitConverter = (value: number, unit: UnitKey): number => {
    switch (unit) {
        case 'rem':
            return parseFloat((value * 16).toFixed())
        case 'px':
            return parseFloat((Math.round((value / 16) * 8) / 8).toFixed(3))
        default:
            return value
    }
}