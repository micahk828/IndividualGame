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

    $(´#coin-imgs´).animate ({top: ´60´, opacity: 1}, 250);
    $(´#coin-imgs´).animate ({top: ´70´, opacity: 1}, 250, ()=> {
      $(´#coin-img´).remove();
      button.style.setProperty(´background-color´, ´transparent´);
      button.style.setProperty(´border-color´, ´var(--accent-color)´);
      button.style.setProperty(´color´, ´var(--accent-color´);
    });
  };
  this.pipe = () => {
    pipeSfx.play();
  };
  this.powerUp = () => {
    powerUpSfx.play ();
  };
}
const prompyUser= () => {
  let name =prompt (´pick a name:´) || ´Ninja´;
  let age;
  let height;
  let color;

  this.getAge= () => {
    age= prompt (´pick a name:´) || ´18´;
    age= parseInt(age);
    if(isNaN(age)) {
      this.getAge();
    }else{
      return;
    }
  };
  this.getHeight=() => {
    height= prompt (´Pick height: 1,2,3,4´) || 4;
    height= parseInt(height);
    if (height===1 || height === 2 || height === 3 ||height === 4) {
      height=height * 64;
      return;
    }else{
      this.getHeight();
  }
  };
  this.getColor = ()=> {
    color=prompt (´Choose color: Red Blue Green´) ||´red´;
    color = color.toLowerCase();
      }
};
this.appendImg = () => {
  left size = ´width:´ + height + ´px;height:´ + height +´px;´;
  if (color == ´blue´) {
    img.setAttribute(´src´, ´imgs/ninja1.png´);
     img.setAttribute(´style´, size);
    container.appendChild(img);
  }else if (color==´green´){
     img.setAttribute(´src´, ´imgs/ninja2.png´);
     img.setAttribute(´style´, size);
    container.appendChild(img);
     }else if (color==´red´){
     img.setAttribute(´src´, ´imgs/ninja3.png´);
     img.setAttribute(´style´, size);
    container.appendChild(img);
  }
};
this.changeBtns= () => {
  const btn =document.quertSelector(´button´);
  const btnContainer= document.querySelector(´.btns-container´);
  btnContainer.removeChild(btn);
  btncontainer.innerHTML=
    ¨button onClick=´ninja.coin()´ id=´btnCoin´>coin<button>\n <button onClick=´ninja.pipe()´ id=´btnPipe´>Pipe<\button>\n<button onclick=´ninja.powerUp()´id=´btnPowerIp´>power Up</button>¨;
  const newBtns= document.querySelectorAll(´button´);
  for(let i=0;i<newb\Btns.lenght; i++){
    newBtns[i].style.setproperty(´margin-left´, ´1.5erm´);
  }
  const floor =document.createElement('div');
  floor.setAttribute('class','floor');
  container.appendChild(floor);
  floor.innerHTML=
    'Name: ' +
    ninja.name +
    '\xa0\xa0\xa0Age:'+
    ninja.age+
      '\xa0\xa0\xa0Height:'+
    ninja.height+
    'px'+
    '\xa0\xa0\xa0color:'+
    ninja.color;
  this.getAge();
    this.getHeight();
    this.getColor();

  ninja=new Ninjas(name,age,color);

  this.appendImg();
  this.changeBtns();
};



                              

    


