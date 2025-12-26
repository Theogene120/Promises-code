let promise = () => {
  return new Promise((resolve, reject) => {
    let second = 0;
    let interval = setInterval(() => {
      second++
      console.log('Tring to resolve...')
      if(second === 6) {
        resolve('Done')
        clearInterval(interval)
      }
    }, 1000);
  })
  
  
}

promise().then(value => console.log(`Resoved with: ${value} value`))