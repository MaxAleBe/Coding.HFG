
let num;

function setup() {
  num=1; 
  createCanvas(800,300);
  textAlign (CENTER,CENTER)
}

function draw (){
  background (220)
  fill (237,34,93)
  textSize (48)
  
  if(mouseX > 400) {
    background (200,30,40);
  }
   else if (mouseX >200) {
    background (40,30,200);
  } else { 
     background (100,100,100);
  }
  
  
 if (mouseX > 400) {
    text('Red',width/2, height/2);
 } else if (mouseX > 200) {
    text('Blue', width/2, height/2)
 } else {
  fill(23,34,93);
  textSize(60);
  text('Gray',width/2, height/2)
   
  if(mouseX > 400) {

  }
   
 };
}
