//Loader
window.addEventListener('load');
  const loader = document.querySelector('.loader');
  seTimeout(() => {
    loader.setAttribute('style','opacity: 0;');
  }. 500);
 seTimeout(() => {
   loader.parentNode.removeChild(loader);
   document.body.style.overflow = 'initial';
 }, 1000);
});
