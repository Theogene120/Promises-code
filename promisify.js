const loadScriptPromise = (src) => {
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => {
            if(err) reject(err)
            else resolve(script)
        })
    })
}

function loadScript(src, callback){
    script = document.createElement('script')
    script.src = src

    script.onload = callback(null, script)
    script.onerror = callback(new Error("Script fail to load"))

    document.head.append(script)
}