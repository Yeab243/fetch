const api_endpoint = 'http://dog-api.kinduff.com/api/facts?number=5'

const response = await fetch(api_endpoint);

const data = await response.json();

console.log(data);
