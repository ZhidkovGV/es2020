export async function dynamicImport (helperFileName){
    const loadedModule = await import(`./${helperFileName}`)
    return loadedModule.default();
}