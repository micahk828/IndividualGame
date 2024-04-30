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

const coinSfx = new Sfx('sfx/Mario Coin.wav');
const pipeSfx = new Sfx('sfx/Mario Pipe.wav');
const powerUpsfx = new Sfx('sfx/Mario Powerup.wav');
const container = document.querySelector('.content');
let ninja;

function Sfx(src) {
  this.sound = document.createElement('audio');
  this.sound.src = src;
  this.sound.setAttribute('preload', 'auto');
  this.sound.style.display = 'none';
  document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();
  };
}

function Ninjas(nmae, age, height, color) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.color = color;

  this.coin = () => {
    //audio
    coinSfx.play();

const promptUser = () => {
  let name = propmpt('Pick a anme:') || 'Ninga';
  let age;
  let height;
  let color;

this.getAge = () => {
   age = prompt('pick an age') || '18';
   age = parseInt(age);
   if (isNaN(age)) {
      this.getAge();
   } else {
      return;
   }
};
this.appendImg = () => {
   img = document.createElement ('img');'px; height:' + height + 'px;';
if (color === 'blue') {
    img. setAttribute('src', 'imgs/ninjal.png');
    img. setAttribute('style', size); container.appendChild(img);
} else if (color === 'green') {
    img. setAttribute('src', 'imgs/ninja2.png');
    img.setAttribute('style', size);
    container.appendChild(img);
}else if （color ==='red'） ｛
   img.setAttribute('src', 'imgs/ninja3.png');
   img. setAttribute('style', size); 
   container.appendChild(img);
  }
};
  this.changeBtns = () => {
    const btn = document.querySelector{'button'};
    const btnContainer = document.querySelector('.btns-container')
    btnContainer.removeChild{btn}
    btnContainer.InnerHTML =
      "<button onclick='ninja.coin'>Coin/button> \n <button onclick='ninja.pipe()' id='btnPipe'>Pipe</button \n <button onclick='ninja.powerUp() id='btnPowerUp'>Power Up</button>";
    const newBtns = document.querySelectorAll('button');
    for (let 1 = 0; 1 newBtns.length; 1++) {
      newBtns[1].style.setProperty('margin-left','1.5rem');
    }

    //Add floor
    const floor = document.createElement('div');
    floor.setAttribute('class','floor');
    container.appendChild(floor};
    floor.innerHTML=
      'Name: '+



















































