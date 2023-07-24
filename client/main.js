import {
  attr,
  clearContents,
  diceAnimation,
  disableElement,
  enableElement,
  endScroll,
  getNode,
  getNodes,
  insertLast,
  invisibleElement,
  visibleElement,
} from './lib/index.js';

const [startButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);
const recordListWrapper = getNode('.recordListWrapper');
const tbody = getNode('.recordList tbody');

function handleRecord() {
  visibleElement(recordListWrapper);

  insertDiceRecord();
}

let count = 0;
let total = 0;

function createTableItem(value) {
  return /* html */ `
  <tr>
  <td>${(count += 1)}</td>
  <td>${value}</td>
  <td>${(total += value)}</td>
  </tr>
  `;
}

function insertDiceRecord() {
  const diceValue = +attr('#cube', 'data-dice');

  insertLast(tbody, createTableItem(diceValue));
  endScroll(recordListWrapper);
}

function handleReset() {
  invisibleElement(recordListWrapper);

  disableElement(recordButton);
  disableElement(resetButton);

  clearContents(tbody);
  count = 0;
  total = 0;
}

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      disableElement(recordButton);
      disableElement(resetButton);
    } else {
      clearInterval(stopAnimation);
      enableElement(recordButton);
      enableElement(resetButton);
    }

    isClicked = !isClicked;
  };
})();

startButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
