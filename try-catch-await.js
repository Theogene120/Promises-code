async function f() {
    let response = await fetch('http://no-ulr-available')
}
f().catch(() => console.log('Data not fund'))