//Loader
window.addEventListener('load',()=> {
  const loader = document.querySelector('.loader');
  setTimeout(()=> {
    loader.setAttribute('style', 'opacity: 0;');
  }, 500);
  setTimeout(() => {
    loader.parentNode.removeChild(loader);
    document.body.style.overflow ='initial';
  }, 1000);
});
const coinSfx= new Sfx('sfx/Mario Coin.wav');
const pipeSfx= new Sfx('sfx/Mario Pipe.wav');
const powerUpSfx= new Sfx('sfx/Mario powerUp.wav');
const container= document.querySelector('.content');
let ninja;

function Sfx(src){
  this.sound= document.craeteElement('audio');
  this.sound.src= src;
  this.sound.setAttribute('preload','auto);
  this.sound.setAttribute('controls','none');
  this.sound.style.display='none';
  document.body.appendChild(this.sound);
  this.play=function(){
    this.sound.play();
  };
}

function Ninjas(name,age,height,color){
  this.name=name;
  this.age=age;
  this.heigth=height;
  this.color=color;
  
  this.coin=() => {
    //audio
    coinSfx.play();

    const button= doucument.querySelector('#btnCoin);

    button.style.setProperty('background-color','#2ecc71');
    button.style.setProperty('border-color','#2ecc71');
    button.style.setProperty('color','var(--bg-color)');

    //coin effect
    const coinImg = document.createElement('img');
    coinImg.setAttribute('src','imgs/coin.png');
    coinImg.setAttribute('id','coin-img');
    coinImg.style.transform = 'tanslate(-50%,calc (-100%-'+ninja.height + 'px)';
    container.appendChild(coinImg);
