export function optionalChainExample(object) {
    return object?.a?.b
}

export function opionalChainWithNullish(object) {
    return object?.a?.b ?? 'Whoops, no value!'
}