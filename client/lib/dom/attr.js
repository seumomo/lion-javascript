function getAttr(node, proprety) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  return node.getAttribute(proprety);
}

function setAttr(node, property, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof property !== 'string') {
    throw new TypeError('setAttr의 두 번째 인자는 문자형이어야 합니다.');
  }

  if (!node[property] && property !== 'class') {
    node.dataset[property] = value;
    return;
  }

  node.setAttribute(property, value);
}

// 작은 함수를 만들고 합쳐서 큰 함수로

const arrowAttr = (node, property, value) =>
  !value ? getAttr(node, property) : setAttr(node, property, value);

function attr(node, property, value) {
  if (!value) {
    return getAttr(node, property);
  } else {
    setAttr(node, property, value);
  }
}
