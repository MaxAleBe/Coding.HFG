//Rules y -Number -> Up; +Number -> Down
//Rules x -Left -> Up; +Number -> Right

let x=0;
let y=0;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220+x);
    fill (100,100,100);
    rect(175+x,150+y,50,200);
    fill (0,0,100)
    quad (175+x, 150+y,200+x,110+y,225+x,149+y);
    quad (175+x, 300+y, 150+x,370+y,175+x,370+y,);
    quad (225+x, 300+y, 250+x,370+y,225+x,370+y,);
    quad(190+x, 340+y, 210+x, 340+y,200+x,260+y,);
    circle(200+x, 220+y, 40);
  
    fill (225,0,0);
    quad(180+x, 350+y , 175+x, 390, 200+x, 350+y, 214+x, 350+y);
    quad(219+x, 350+y , 225+x, 390, 199+x, 350+y,185+x , 350+y);
}

//function setup() {
  //createCanvas(400, 400);

//}

//function draw() {
  //background(220+x);
    //fill (100,100,100)
  //rect(175+x,150+y,50,200);
    //fill (0,0,100)
    //quad (174+x, 150+y,200+x,110+y,225+x,149+y , );

  //quad (numX+x, 300+y, 150+x,numY+y,numX+x,numY+y, );
  //quad (225+x, 300+y, 250+x,370+y,225+x,370+y, )
  //quad(190+x, 340+y, 210+x, 340+y,200+x,260+y,);
  //circle(200+x, 220+y, 40);
  
  //fill (225,0,0)
  //quad(180+x, 350+y , 175+x, 390, 200+x, 350+y, 214+x, 350+y);
  //quad(219+x, 350+y , 225+x, 390, 199+x, 350+y,185+x , 350+y);
//}

//function setup() {
//  createCanvas(1000,1000);
  //grid(10,30,20);
//}

//let x = 0;
//let y = 0;
//function grid (numX, numY, size) {
  //for(let m= 0; m < numX; m++) {
    //  for(let l=0; l < numY; l++){
      //rect(x,y,size);
      //y = y + size;
     
      //}
      //x += size;
      //y = 0;
//}

