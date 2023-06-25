function setup() {
    createCanvas(1000,1000);
    grid(10,30,20);
}

let x = 0;
let y = 0;
function grid (numX, numY, size) {
    for(let m= 0; m < numX; m++) {
        for(let l=0; l < numY; l++){
        rect(x,y,size);
        y = y + size;
       
        }
        x += size;
        y = 0;
}
  


}