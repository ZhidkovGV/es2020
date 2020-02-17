export const worker = new Worker('./global-this/web-worker.js')
export function browserGlobalThis() {
    console.log('Browser:', globalThis, window);
}
