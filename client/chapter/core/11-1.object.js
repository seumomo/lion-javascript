/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  uid: 'user-id-xo0207',
  name: 'taeil',
  email: 'xo0207@naver.com',
  isSignIn: true,
  permission: 'paid', // free | paid
};

// console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser['uid']);

// 계산된 프로퍼티 (computed property)

/* -------------------------------------------------------------------------- */
/*                                class로 객체 만들기                         */
/* -------------------------------------------------------------------------- */
// class user {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const user2 = new User('태일');

/* -------------------------------------------------------------------------- */
/*                                 함수로 객체 만들기                         */
/* -------------------------------------------------------------------------- */
let calculateProperty = 'phone'; // phone | tel

function creatUser(
  name,
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
) {
  return {
    // name: name,
    // email: email,
    [computedProp]: number,

    /* -------------------------------------------------------------------------- */
    /*                        shorthand property (단축 프로퍼티)                  */
    /* -------------------------------------------------------------------------- */
    name,
    email,
  };
}

const user1 = creatUser('태일', 'xo0207@naver.com', 'tel', '010-4130-5179');

// 프로퍼티 포함 여부 확인
// for (let key in user1) {
//   if (Object.prototype.hasOwnProperty.call(user1, key)) {
//     console.log(key);
//   }
// }

// 프로퍼티 나열
let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);

function getProp(object) {
  if (typeof object !== 'object') {
    throw new Error('getProp 함수의 매개변수는 객체 타입이어야 합니다.');
  }
  return Object.keys(object);
}

function getP(object) {
  let result = [];

  for (let key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }

  return result;
}

// 프로퍼티 제거 or 삭제
// authUser.name = null; // 제거
// delete authUser.uid; // 삭제

// console.log(authUser);

/* -------------------------------------------------------------------------- */
/*                                     제거                                   */
/* -------------------------------------------------------------------------- */
// function removeProperty(object, key) {
//   if (typeof object !== 'object') {
//     throw new Error('에러메세지');
//   }

//   if (key === 'all') {
//     for (let key of Object.keys(object)) {
//       object[key] = null;
//     }

//     return object;
//   }

//   object[key] = null;

//   return object;
// }

// console.log(removeProperty(authUser, 'all'));

/* -------------------------------------------------------------------------- */
/*                                     삭제                                   */
/* -------------------------------------------------------------------------- */
// function deleteProperty(object, key) {
//   delete object[key];

//   return object;
// }

// deleteProperty(authUser, 'name');
// console.log(authUser);

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

// console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  // return !Object.keys(object).length;

  return Object.keys(object).length === 0 ? true : false;
}

// console.log(isEmptyObject(authUser));

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
// let color = ['#ff0000', '#2b00ff', '#00ff2f'];

// let [, , green] = color;

// let red = color[0];
// let blue = color[1];
// let green = color[2];

// console.log(color);

// for (let [key, value] of Object.entries(authUser)) {
//   console.log(key);
// }

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
const salaries = {
  권혜미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700,
};

const { 권혜미, 이수연, 강예나, 김태일 } = salaries;

console.log(권혜미);

function setElementCss(options) {
  const { width, overflow, height, color } = options;

  console.log(overflow);
}

const defaults = {
  width: 100,
  height: 200,
  overflow: 'hidden',
  color: 'green',
};

setElementCss(defaults);
