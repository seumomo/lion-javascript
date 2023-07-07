/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기
let j = 0;

for (; j <= 10; ) {
  j++;
  if (j % 2 === 0 && j !== 0) {
    // console.log(j);
  }
}

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

// for (let i = 0; i < l; i++) {
//   let value = frontEndDev[i];

//   if (value === 'SVG' || value === 'jQuery') {
//     continue;
//   }

//   console.log(value);

//   if (value === 'JavaScript') {
//     break;
//   }
// }

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

for (let i = l - 1; i >= 0; i--) {
  let value = frontEndDev[i];

  console.log(value);
}
