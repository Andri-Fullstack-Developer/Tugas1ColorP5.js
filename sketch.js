var Judul = document.getElementById("judul");

// {
//   Judul.innerHTML = "Soal 1";
//   function setup() {
//     createCanvas(350, 350);
//   }

//   function draw() {
//     colorMode(RGB, 350);
//     for (let i = 0; i < 350; i++) {
//       for (let j = 0; j < 350; j++) {
//         stroke(i, j, 0);
//         point(i, j);
//       }
//     }
//   }
// }

// Judul.innerHTML = 'Soal 2'
// console.log('halu')
// function setup(){
//   createCanvas(360, 360)
//   noLoop()
// }

// function draw(){
//   colorMode(HSB, 360)
//   for(let i = 0; i < 360; i++){
//       for(let j = 0; j < 360; j++){
//           stroke(i, i, 360)
//           point(i, j)
//       }
//   }
// }

{
  Judul.innerHTML = 'Soal 3'
  function setup(){
    createCanvas(360, 360)
    background(0)
    noStroke()

    colorMode(RGB, 255, 255, 255, 100)
    noLoop
  }

  function draw(){
    /* Segi Sebagai Bacground */
    fill(255, 255, 0)
    rect(0, 0, 180, 360)

    /* Membuat 5 Segi */
    /* Opacity Menurun 20% */
    for(let i = 0; i < 6; i++){
      fill(255, 0, 0, (100-i*20))
      rect(0, i*72, 360, 60)
    }
  }
}


// {
//   Judul.innerHTML = 'Soal 4'
//   function setup(){
//     createCanvas(500, 500)
//     background(0)
//     noStroke()
//     noLoop()
//   }

//   function draw(){
//      /* Segi Merah */
//     fill('#F22A2A')
//     rect(0, 0, 100, 500)
//      /* Segi Kunuing */
//     fill('#f2CA2A')
//     rect(100, 0, 100, 500)
//      /* Segi hijau */
//     fill('#72F22A')
//     rect(200, 0, 100, 500)
//      /* Segi Biru */
//     fill('#2AA3F2')
//     rect(300, 0, 100, 500)
//     /* Segi Ungu */
//     fill('#D02AF2')
//     rect(400, 0, 100, 500)
//   }
// }

// {
//   Judul.innerHTML = 'Soal 5'
//   function setup(){
//     createCanvas(500, 500)
//     background(255)
//     noStroke()
//     noLoop()
//   }
//   function draw(){
//     let lawnGreen = color(124, 252, 0)
//     let abuabu = color('#777')

//     fill( lerpColor(lawnGreen, abuabu, 0.2))
//     rect(0, 0, 500, 100)

//     fill( lerpColor(lawnGreen, abuabu, 0.4))
//     rect(0, 100, 500, 100)
    
//     fill( lerpColor(lawnGreen, abuabu, 0.6))
//     rect(0, 200, 500, 100)
    
//     fill( lerpColor(lawnGreen, abuabu, 0.8))
//     rect(0, 300, 500, 100)
    
//     fill( lerpColor(lawnGreen, abuabu, 1))
//     rect(0, 400, 500, 100)
//   }
// }