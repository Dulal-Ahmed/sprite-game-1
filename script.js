// sprite rows 46 
// sprite columns 13 

const hero = document.getElementById('hero');
const sprite = document.getElementById('sprite');
//sprite 
 let rowIndex = 37;
 let columnIndex =6;
 let columnCount =0;
 let loop =0;
// hero
let heroLeftMove = false;
let heroRightMove = false;
let heroBottom = 0;
let heroLeft =0;

//gameloop 
function gameloop(){
    requestAnimationFrame(gameloop);
    loop++;
  // console.log(loop);
  //hero 
  if(heroRightMove){
    heroLeft +=2;
  }
  if(heroLeftMove){
    heroLeft -=2;
  }
  hero.style.left = heroLeft + "px";
  hero.style.bottom = heroBottom + 'px';
  //sprite
  if(loop % 5 ==0){
  columnCount++;
  if(columnCount > columnIndex) columnCount =0;
     sprite.style.left = '-'+ 64 * columnCount + 'px';
     sprite.style.top = '-'+ 64 * rowIndex + 'px';
  }


}
gameloop();

document.addEventListener('keydown',(e)=>{
  if(e.code == 'ArrowUp'){}

  if(e.code == 'ArrowLeft'){
    rowIndex = 35;
    columnIndex =7;
    heroLeftMove = true;
  }
  if(e.code == 'ArrowRight'){
    rowIndex = 37;
    columnIndex =7;
    heroRightMove = true;
  }
});

document.addEventListener('keyup',(e)=>{
    if(e.code == 'ArrowUp'){ }

    if(e.code == 'ArrowLeft'){
      rowIndex = 23;
      columnIndex =1;
      heroLeftMove = false;
    }
    if(e.code == 'ArrowRight'){
      rowIndex = 25;
      columnIndex =1;
      heroRightMove =false;
    }
});