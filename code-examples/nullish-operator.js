export function nullishExample(value) {
    const nullishBoy = value ?? 'no value!'
    const orBoy = value || 'no value?'
    return `Check for null with Nullish: ${nullishBoy} & with OR ${orBoy}`
}