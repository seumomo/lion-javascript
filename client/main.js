import { deleteStorage, getNode, getStorage, setStorage } from './lib/index.js';

const textField = getNode('#textField');
const button = getNode('button');

function handleTextField() {
  const value = this.value;

  setStorage('text', value);
}

function init() {
  getStorage('text').then((res) => {
    textField.value = res;
  });
}

function handleClear() {
  deleteStorage();
  textField.value = '';
}

textField.addEventListener('input', handleTextField);
window.addEventListener('DOMContentLoaded', init);
button.addEventListener('click', handleClear);
