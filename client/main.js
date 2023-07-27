/* global gsap */

import {
  attr,
  changeColor,
  clearContents,
  getNode as $,
  renderEmptySvg,
  renderSpinner,
  renderUserCard,
  tiger,
} from './lib/index.js';

// https://jsonplaceholder.typicode.com/users

const userCardInner = $('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    // await delayP({ timeout: 2000 });

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });

    // $('.loadingSpinner').remove();

    const response = await tiger.get('http://localhost:3000/users');
    const userData = response.data;

    userData.forEach((item) => renderUserCard(userCardInner, item));

    changeColor('.user-card');

    gsap.to('.user-card', { x: 0, opacity: 1, stagger: 0.2 });
  } catch (err) {
    renderEmptySvg(userCardInner);
  }
}

function handleDelete(e) {
  const deleteButton = e.target.closest('button');
  const article = e.target.closest('article');
  if (!deleteButton || !article) return;
  const id = attr(article, 'data-index').slice(5);

  tiger.delete(`http://localhost:3000/users/${id}`).then(() => {
    clearContents(userCardInner);

    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDelete);

renderUserList();
