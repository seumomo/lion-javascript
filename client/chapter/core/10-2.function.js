/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식

let calculateTotal = function () {
  // console.log(arguments);
  let total = 0;

  /* -------------------------------------------------------------------------- */
  /*                                  1. for 문                                 */
  /* -------------------------------------------------------------------------- */
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  // return total;

  /* -------------------------------------------------------------------------- */
  /*                                 2. for-of 문                               */
  /* -------------------------------------------------------------------------- */
  // for (let price of arguments) {
  //   total += price;
  // }

  // return total;

  /* -------------------------------------------------------------------------- */
  /*                               3. forEach 빌려쓰기                          */
  /* -------------------------------------------------------------------------- */
  // Array.prototype.forEach.call(arguments, function (item) {
  //   total += item;
  // });

  // return total;

  /* -------------------------------------------------------------------------- */
  /*                           4. slice를 빌려써서 배열로 만들기                */
  /* -------------------------------------------------------------------------- */
  // let realArray = Array.prototype.slice.call(arguments);

  // realArray.forEach(function (item) {
  //   total += item;
  // });

  // return total;

  /* -------------------------------------------------------------------------- */
  /*                               5. Array.from()                              */
  /* -------------------------------------------------------------------------- */
  // let realArray = Array.from(arguments);

  // realArray.forEach(function (item) {
  //   total += item;
  // });

  // return total;

  /* -------------------------------------------------------------------------- */
  /*                              6. spread syntax                              */
  /* -------------------------------------------------------------------------- */
  // let realArray = [...arguments];

  // realArray.forEach(function (item) {
  //   total += item;
  // });

  // realArray.forEach((item) => {
  //   total += item;
  // });

  // return total;

  /* -------------------------------------------------------------------------- */
  /*                               7. Array.reduce                              */
  /* -------------------------------------------------------------------------- */
  // let realArray = [...arguments];

  // return realArray.reduce((acc, item) => {
  //   return acc + item;
  // }, 0);
};

const result = calculateTotal(1000, 500, 200, 6500);
// console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};
// console.dir(anonymousFunctionExpression);
// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (callback) {
  callback();
};

callbackFunctionExpression(function () {
  // console.log('콜백 함수 실행!');
});
// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

const MASTER = (function () {
  var x = 10;
  console.log('즉시 함수!');

  return '퉤';
})();

console.log(MASTER);
