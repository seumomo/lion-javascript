/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

// function handler() {
//   console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
// }

// first.onclick = handler;

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleCilck(e) {
  let x = e.offsetX;
  let y = e.offsetY;

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px,${
    y - ball.offsetHeight / 2
  }px)`;
}
// click, mousemove, mouseover, mouseout, mousedown, mouseup

// first.addEventListener('click', handleCilck);
// const remove = bindEvent('.first', 'click', handler);

// setTimeout(() => {
//   remove();
// }, 3000);

ground.addEventListener('click', handleCilck);
