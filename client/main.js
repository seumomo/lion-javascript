import { tiger, xhr, xhrPromise } from './lib/index.js';

// xhr.get('https://jsonplaceholder.typicode.com/users', (res) => {
// console.log(res);
// });

// console.log(xhrPromise);

const data = tiger.get('https://jsonplaceholder.typicode.com/users');
console.log(await data);
