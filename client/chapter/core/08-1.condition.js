/* ---------------- */
/* Condition        */
/* ---------------- */

// if ('') {
//   console.log('이 조건은 항상 실행됩니다.');
// } else {
//   console.log('조건에 부합하지 않습니다.');
// }

// let isNameCorrent = prompt(
//   '자바스크립트의 "공식" 이름은 무엇일까요?'
// ).toLowerCase();

// if (isNameCorrent === 'ecmascript') {
//   alert('정답입니다!');
// } else {
//   alert('모르셨나요? 정답은 ECMAScript입니다!');
// }

// let number = prompt('숫자 하나를 입력해보세요.');

// if (number > 0) {
//   console.log(1);
// } else if (number < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

// let a = Number(prompt('첫 번째 숫자를 입력하세요.'));
// let b = Number(prompt('두 번째 숫자를 입력하세요.'));
// let result = a + b < 4 ? '미만' : '이상';

// console.log(result);

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?');

// 영화 볼거니?
// let goingToWatchMovie = confirm('너 영화 볼 거니?');

if (!didWatchMovie) {
  if (goingToWatchMovie) {
    let who = prompt('누구랑 볼 거니?');

    console.log(`${who}랑 보는구나`);
  } else {
    console.log('응 그래');
  }
} else {
  let alone = confirm('너 혼자 봤니?');

  if (alone) {
    let didCry = confirm('너 울었니?');

    if (didCry) {
      console.log('너 찌질했네');
    } else {
      console.log('너 T야?');
    }
  }
}

// if 문(statement)
// if (didWatchMovie === 'yes') {
//   console.log('무슨 영화 봤어?');
// } else if (goingToWatchMovie === 'yes') {
//   console.log('나랑 영화 보러 갈래?');
// } else {
//   console.log('그래...');
// }

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
