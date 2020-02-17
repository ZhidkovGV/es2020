export function nullishExample(value) {
    const nullishBoy = value ?? {}
    const orBoy = value || {}
    return `Check for null with Nullish: ${nullishBoy} & with OR ${orBoy}`
}