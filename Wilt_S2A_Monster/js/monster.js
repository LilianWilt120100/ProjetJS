
let name;
let life;
let money;
let awake;

let jeu = window.setInterval(hasard,12000);
let estMort;





function init(n, l, m){
  name=n;
  life=l;
  money=m;
  awake=true;
  estMort=false;
}


function showme(){
  log(name+' '+life+' '+money+' '+awake);
}





let courir = document.getElementById('b2');
let combattre = document.getElementById('b3');
let travailler = document.getElementById('b7');
let dormir = document.getElementById('b4');
let manger = document.getElementById('b5');
let show = document.getElementById('b6');


let action = document.getElementById('actionbox');
let status = document.getElementById('status');
let nom = document.getElementById('monster');

let nouvellevie=document.getElementById('b1');
let tuer = document.getElementById('k');

function go(){
  init('Zeus',10,10);
  nom.textContent=name;
  displayStatus(10,10,awake);
}

function log(message){
  let m = document.createElement('p');

  m.appendChild(document.createTextNode(message));
  action.insertBefore(m,action.firstChild);
}

function displayStatus(life, money, awake){

  let lis = status.querySelectorAll('li');
  lis[0].textContent="Life :"+life;
  lis[1].textContent="Money :"+money;
  lis[2].textContent=awake;
  if(life<5){
    nom.style.backgroundColor='red';

  }
  if(5<=life && life<10){
    nom.style.backgroundColor='orange';
  }
  if(10<=life && life<15){
    nom.style.backgroundColor='blue';
  }
  if(15<=life){
    nom.style.backgroundColor='green';
  }

}
window.addEventListener("load", ()=>{
    go();
    show.addEventListener('click',showme);
    /**courir.addEventListener('click', run);
    dormir.addEventListener('click', sleep)
    combattre.addEventListener('click', fight);
    travailler.addEventListener('click', work);
    manger.addEventListener('click', eat);**/
    jeu;
    nouvellevie.addEventListener('click', newlife);
    tuer.addEventListener('click', kill);
  });

function sleep(){
  if(estMort===false){
  log('Le monstre se met à dormir');
  awake=false;
  displayStatus(life,money,awake);
  setTimeout(selever, 7000);
  }else{
  log('Le monstre est mort');
  }
}

function selever(){
  log('Le monstre se réveille');
  awake =true;
  life+=1;
  displayStatus(life,money,awake);


}
function run(){
  if(life>0 && awake===true && estMort===false){
    life-=1;
    displayStatus(life,money,awake);

    log('Le monstre court et perd 1 point de vie')
  }else if(life<=0){

    log('Le monstre ne peut pas courir car il ne possède pas assez de vie');
  } else if(awake===false){
    log('Le monstre dort il ne peut pas courir')
  }else if(estMort===true){
    log('Le monstre est mort')
  }
}

function fight(){
  if(life>0 && awake===true && estMort===false){
    life-=3;
    displayStatus(life,money,awake);

    log('Le monstre se bat et perd 3 points de vie')
      if(life<=0){
        pv=0;
        life=0;

        let lis = status.querySelectorAll('li');
        lis[0].textContent="Life :"+pv;
      }
    }else if(life<=0){
      log('Le monstre ne peut plus se battre car il ne possède pas assez de vie');
    }else if(awake===false){
      log('Le monstre dort il ne peut pas se battre');
    }else if(estMort===true){
      log('Le monstre est mort')
    }
}

function work(){
  if(life>0 && awake === true && estMort===false){
    life-=1;
    money+=2;
    displayStatus(life,money,awake);

    log('Le monstre travaille, il perd 1 point de vie mais gagne 2 en monnaie')

    if(life<=0){
      pv=0;
      displayStatus(life,money,awake);

    }
  }else if(life<=0 ){
    log('Le monstre ne peut pas travailler car il ne possède pas assez de vie');
  }else if(awake===false){
    log('Le monstre dort il ne peut pas travailler');
  }else if(estMort===true){
    log('Le monstre est mort')
  }
}

function eat(){
  if(life>0 && money>=3 && awake===true && estMort===false){
    money-=3;
    life+=2;
    displayStatus(life,money,awake);

    log('Le monstre mange, il perd 3 de monnaie mais gagne 2 points de vie');
    if(money<=0){
      argent=0;
      displayStatus(life,money,awake);

    }
  }else if(life<=0){
    log('Le monstre ne peut pas manger car il ne possède pas assez de vie');
  }else if(awake===false){
    log('Le monstre dort il ne peut pas manger');
  }else if(money<=3){
    log('Le monstre ne dispose plus assez de monnaie pour manger');
  }else if(estMort===true){
    log('Le monstre est mort')
  }
}

function hasard(){
  let tableau=[run,fight,work,sleep,eat];
  let indice=Math.round(Math.random()*4);
  tableau[indice]();
}

function kill(){
  life=0;
  money=0;
  awake=false;
  displayStatus(life,money,awake);
  estMort=true;
}

function newlife(){
  if(estMort===true){
    go();
    displayStatus(life,money,awake);
    estMort=false;
  }
}
