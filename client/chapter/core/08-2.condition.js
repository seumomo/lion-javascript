/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;

console.log(AorB);

// 부정 연산자
let reverseValue = !value;

console.log(reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

console.log([whichFalsy]);
// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsFalsy: true };

console.log(whichTruthy);
