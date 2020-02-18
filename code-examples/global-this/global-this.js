
export function globalThisExample() {
    workerGlobalThisExample();
    browserGlobalThis()
}

function workerGlobalThisExample (){
    new Worker('./global-this/web-worker.js');
}

function browserGlobalThis() {
    console.log('Browser:', globalThis, window);
}

