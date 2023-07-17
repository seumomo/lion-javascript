/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';

function normalIsArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

function normalIsNull(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
  );
}

const arr = [10, 100, 1000, 10000];

const people = [
  {
    id: 0,
    name: '김다연',
    profession: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'MAksd23',
  },
  {
    id: 1,
    name: '이현주',
    profession: '수영선수',
    age: 40,
    imageSrc: 'afdfakA',
  },
  {
    id: 2,
    name: '김희소',
    profession: '물음표살인마',
    age: 30,
    imageSrc: 'fAKqi321',
  },
  {
    id: 3,
    name: '김규민',
    profession: '래퍼',
    age: 52,
    imageSrc: 'AFGq3d23',
  },
  {
    id: 4,
    name: '전진승',
    profession: '드라마평론가',
    age: 18,
    imageSrc: 'fQa15f3',
  },
];

/* 요소 순환 ---------------------------- */

// forEach : 값을 반환하지 않는다.
arr.forEach((item, index) => {
  // console.log(item, index);
});

people.forEach((item) => {
  // console.log(item.name);
});

const span = document.querySelectorAll('span');

span.forEach((item, index) => {
  item.addEventListener('click', function () {
    console.log(this, index);
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// reverse
// arr.reverse();
// console.log(arr);

// splice
arr.splice(1, 0, 5, 13);
// console.log(arr);

// sort
arr.sort((a, b) => {
  return a - b;
});
console.log(arr);

/* 새로운 배열 반환 ------------------------ */
const user = ['선범', '효윤', '준석'];

// concat
const newArray = arr.concat(user);
console.log(newArray);

// slice
const slice = arr.slice(2, 5);
console.log(slice);

// toSorted
// toReversed
// toSpliced
// map
const job = people.map((item, index) => {
  return `<div>${item.profession}</div>`;
});
job.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

console.log(job);

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '봉석 융진 예나 시연 진만 정아';

// split
const stringToArray = str.split(' ');
console.log(stringToArray);

// join
