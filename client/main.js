import { jujeobData } from "./data/data.js";
import { addClass, clearContents, copy, getNode, getRandom, insertLast, removeClass, shake, showAlert } from './lib/index.js';
import { isNumericString } from './lib/utils/typeOf.js';

const submitButton = getNode('#submit')
const nameField = getNode('#nameField')
const resultArea = getNode('.result')

function handlesubmit(e) {
  e.preventDefault()

  let name = nameField.value
  const list = jujeobData(name)
  const pick = list[getRandom(list.length)]

  if (!name || name.replace(/\s*/g, '') === '') {
    showAlert('.alert-error', '이름을 반드시 입력해 주어야 합니다.', 2000)

    shake.restart()
    
    return
  }

  if(!isNumericString(name)) {
    clearContents(nameField)
    showAlert('.alert-error', '이름은 숫자가 될 수 없습니다.', 2000)

    shake.restart()

    return
  }

  clearContents(resultArea)
  insertLast(resultArea, pick)
  clearContents(nameField)
}

function haddleCopy() {
  const text = resultArea.textContent
  copy(text).then(()=> {
    showAlert('.alert-success', '클립보드 복사 완료!')
  })
}

submitButton.addEventListener('click', handlesubmit)
resultArea.addEventListener('click', haddleCopy)