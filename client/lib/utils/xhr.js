/* 

[readystate]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/

/* -------------------------------------------------------------------------- */
/*                                  callback                                  */
/* -------------------------------------------------------------------------- */

export function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application.json',
    'Access-Control-Allow-Origin': '*',
  },
}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });
  xhr.send(JSON.stringify(body));
}

// xhr({
//   method: 'GET',
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess: () => {},
//   onFail: () => {},
//   body: { name: 'tiger' },
//   headers: {
//     'Content-Type': 'application.json',
//     'Access-Control-Allow-Origin': '*',
//   },
// });

/**
 *
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공 시 실행될 콜백 함수
 * @param {function} onFail 서버와 통신 실패 시 실행될 콜백 함수
 * @return server data
 */
xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.delete = (ulr, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    onSuccess,
    onFail,
  });
};
