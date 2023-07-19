/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */
const container = getNode('.container');

function handleDelegation(e) {
  let target = e.target;
  let li = target.closest('li');
  if (!li) return;

  let className = attr(li, 'class');
  let dataName = attr(li, 'data-name');

  console.log(className);
}

container.addEventListener('click', handleDelegation);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
