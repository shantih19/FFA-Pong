var bar
function setup(){
  createCanvas(windowWidth, windowHeight);
  bar = createSprite((windowWidth / 2) - 40, windowHeight - 40, 100, 15);
  document.addEventListener('contextmenu', event => event.preventDefault());
  document.body.style.overflow=false?"":"hidden";
  p5.disableFriendlyErrors = true;
}

function draw(){
  background(255,255,255);
  bar.limitSpeed(17)
  if(keyIsDown(37)){
    bar.addSpeed(0.7,180);
  }
  else if(keyIsDown(39)){
    bar.addSpeed(0.7,0);
}
  drawSprites();
}

function keyPressed(){
  if(keyCode == 37){
    bar.addSpeed(1,180);
  }
  else if(keyCode == 39){
    bar.addSpeed(1,0);
  }
}

function keyReleased(){
  bar.setSpeed(0,0)
}
