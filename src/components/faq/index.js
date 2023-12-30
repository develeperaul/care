import './index.scss';

const faqList = document.querySelectorAll('.faq .item ');
if (faqList) {
  [...faqList].forEach((item) => {
    const head = item.querySelector('.item__head');
    head.onclick = openItem;
  });
}

function openItem(e) {
  [...faqList].forEach((item) => {
    if (item.classList.contains('active') && this.parentNode !== item)
      item.classList.remove('active');
  });
  console.log(this.parentNode);
  if (this.parentNode.classList.contains('active'))
    this.parentNode.classList.remove('active');
  else this.parentNode.classList.add('active');
}
