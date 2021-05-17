const burger = document.querySelector('.main-nav__toggle');
const header = document.querySelector('.page-header');
const user = document.querySelector('.user');

header.classList.remove('page-header--nojs');
user.classList.add('user--title');

burger.addEventListener("click", function(e) {
  header.classList.toggle('page-header--active');
  user.classList.toggle('user--title');
});
