export function matchAllExample() {
    return [...'hello1 hello2'.matchAll(/hello(\d)/g)];
}

export function allMethodExample() {
    return 'hello1 hello2'.match(/hello(\d)/    );
}