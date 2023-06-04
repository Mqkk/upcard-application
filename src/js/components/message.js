const message = document.querySelector('.message');
const messageBtnClose = document.querySelector('.message__btn');

messageBtnClose?.addEventListener('click', (e) => {
  message.classList.toggle('message-active')
})
