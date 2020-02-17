export function promiseAllExample() {
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((_, reject) => setTimeout(reject, 100, 'something went wrong'));
    return Promise.allSettled( [promise1, promise2])
}

export function promiseAllExample() {
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((_, reject) => setTimeout(reject, 100, 'something went wrong'));
    return Promise.all( [promise1, promise2])
}