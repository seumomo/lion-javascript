import { getNode } from '../dom/getNode.js';
import { xhrPromise } from '../utils/xhr.js';
import { insertLast } from './../dom/insert.js';

// function delay(callback, timeout = 1000) {
//   setTimeout(callback, timeout);
// }

// const first = getNode('.first');
// const second = getNode('.second');

// delay(() => {
//   console.log(1);
//   first.style.top = '-100px';
//   second.style.top = '100px';

//   delay(() => {
//     console.log(2);
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';

//     delay(() => {
//       console.log(3);
//       first.style.top = '0';
//       second.style.top = '0';
//     });

//     console.log('b');
//   });
// });

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

export function delayP(options) {
  let config = { ...defaultOptions };

  if (typeof options === 'number') {
    config.timeout = options;
  }

  if (typeof options === 'object') {
    config = { ...defaultOptions, ...options };
  }

  const { shouldReject, timeout, data, errorMessage } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP({ shouldReject: false })
  .then((res) => {
    // console.log(res);
  })
  .catch(({ message }) => {
    console.log(message);
  })
  .finally(() => {
    // console.log('어쨌든 실행됩니다.');
  });

// delayP().then((result) => {
//   console.log(result);
// });

// delayP()
//   .then(({ name, age }) => {
//     console.log(name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async - 함수가 promise 객체를 반환 하도록
//       - await 사용

// await - 코드의 실행 흐름 제어 (멈춰)
//       - result값 가져오기

async function 라면끓이기() {
  delayP({ data: '물넣기' }).then((res) => {
    console.log(res);
  });

  const 스프 = await delayP({ data: '스프넣기' });
  console.log(스프);

  const 면 = await delayP({ data: '면넣기' });
  console.log(면);

  const 계란 = await delayP({ data: '계란넣기' });
  console.log(계란);

  const 접시 = await delayP({ data: '접시' });
  console.log(접시);
}

// 라면끓이기()

async function getUserData() {
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/5');

  // data.then((res)=>{
  //   console.log( res );
  // })

  const pokemon = await data;

  console.log(pokemon.sprites['front_default']);

  insertLast(
    document.body,
    `<img src="${pokemon.sprites['front_default']}" alt="" />`
  );
}

// function getUserData() {
//   const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon');
//   data.then((res) => {
//     console.log(res);
//   });
// }

// getUserData();
