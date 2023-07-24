import { getNode } from './getNode.js';

/* -------------------------------------------------------------------------- */
/*                                     과제                                   */
/* -------------------------------------------------------------------------- */
// disableElement(node)
export function disableElement(node) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  node.disabled = true;
}
// enableElement(node)
export function enableElement(node) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  node.disabled = false;
}

export function visibleElement(node) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  node.hidden = false;
}

export function invisibleElement(node) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  node.hidden = true;
}

// function isDisableElement() {

// }
// function isinvisibleElement() {

// }
