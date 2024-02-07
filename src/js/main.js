import '../scss/style.scss';

import '../components/select';

import '../components/generalSlider';
import '../components/secondSlider';
import '../components/acceptSlider';
import '../components/otherSlider';
import '../components/pickup';
import '../components/faq';
import '../components/book';
import '../index.pug';

import '../sections/header/index';
import '../sections/footer/index';

import '../sections/descriptionFirst';
import '../sections/cardsSection';
import '../sections/teamSection';
import '../sections/faqSection';
import '../sections/documentsSection';

import '../pages/health.pug';
import '../pages/about.pug';

import './validate-form-footer';
import 'swiper/css/bundle';

import '../pages/camp-berezka.pug';
import "../pages/camp-vishnevaya-polyana.pug"

// console.log(validate({ creditCardNumbertt: '4' }, constraints));

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
