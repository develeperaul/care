import '../scss/style.scss';
import '../index.pug';

import '../sections/header/index';
import '../sections/footer/index';

const btns = document.querySelectorAll('[data-action]');
[...btns].forEach((btn) => {
  btn.onclick = clickBtn;
});
function clickBtn(e) {
  const target = this.getAttribute('data-target');
  const action = this.getAttribute('data-action');
  if (target) {
    const el = document.querySelector(`#${target}`);
    if (el) {
      if (action === 'open') el.classList.add('active');
      if (action === 'close') el.classList.remove('active');
    }
  }
  console.log(e);
  console.log(this);
}
