// Simple GET using fetch + then
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // parse JSON body
  .then(data => console.log('Got data:', data))
  .catch(err => console.error('Fetch error:', err));

