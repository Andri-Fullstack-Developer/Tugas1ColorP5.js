function setup(){
  createCanvas (350, 350)
}

function draw(){
  colorMode(RGB,350)
  for(let i = 0; i < 350; i++){
    for(let j = 0; j < 350; j++){
      stroke(i, j, 0)
      point(i, j)
    }
  }
}