import { getNode } from './getNode.js';

export function endScroll(node) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  node.scrollTop = node.scrollHeight;
}
