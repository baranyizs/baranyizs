const content = document.querySelectorAll('main');

let contentIndex = 0;

content.forEach(x => {
  x.addEventListener('click', e => {
    content[contentIndex].classList.remove('show-content');
    if (contentIndex < content.length - 1) {
      contentIndex++;
    } else {
      contentIndex = 0;
    }
    content[contentIndex].classList.add('show-content');
  });
});

content[contentIndex].classList.add('show-content');