$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    //burrow!
    createPlatform(0, 200, 15, 550);
    createPlatform(105, 200, 30, 550);
    createPlatform(14, 625, 18, 7);
    createPlatform(90, 525, 18, 7);
    createPlatform(14, 425, 18, 7);
    createPlatform(90, 325, 18, 7);

    //cliff
    /*
    createPlatform(135, 200, 200, 15);
    createPlatform(135, 215, 190, 15);
    createPlatform(135, 230, 180, 15);
    createPlatform(135, 245, 170, 15);
    createPlatform(135, 260, 170, 15);
    createPlatform(135, 275, 160, 15);
    createPlatform(135, 290, 150, 15);
    createPlatform(135, 305, 140, 15);
    createPlatform(135, 320, 140, 15);
    createPlatform(135, 335, 140, 15);
    createPlatform(135, 350, 130, 15);
    createPlatform(135, 365, 125, 15);
    createPlatform(135, 370, 120, 15);
    createPlatform(135, 385, 115, 15);
    createPlatform(135, 400, 115, 15);
    createPlatform(135, 415, 115, 15);
    createPlatform(135, 430, 110, 15);
    createPlatform(135, 445, 110, 15);
    createPlatform(135, 460, 105, 15);
    createPlatform(135, 475, 100, 15);
    createPlatform(135, 490, 100, 15);
    createPlatform(135, 505, 95, 15);
    createPlatform(135, 520, 95, 15);
    createPlatform(135, 535, 90, 15);
    createPlatform(135, 550, 80, 15);
    createPlatform(135, 565, 75, 15);
    createPlatform(135, 570, 70, 15);
    createPlatform(135, 585, 70, 15);
    createPlatform(135, 600, 65, 15);
    createPlatform(135, 615, 50, 15);
    createPlatform(135, 630, 45, 15);
    createPlatform(135, 645, 40, 15);
    createPlatform(135, 660, 35, 15);
    createPlatform(135, 675, 30, 15);
    createPlatform(135, 690, 30, 15);
    createPlatform(135, 705, 25, 15);
    createPlatform(135, 720, 20, 15);
    createPlatform(135, 735, 10, 15);
    */
   for (var i = 0; i < 38; i++ ){
    createPlatform(135, 200 + (15 * i), 200 - (5 * i), 15);
   }
   //barrier
   createPlatform(400, 10, 5, 400);

   //trees!!
  //  createPlatform(500, 565, 10, 650);
  //  createPlatform(470, 600, 70, 10);
  //  createPlatform(450, 650, 110, 10);
  //  createPlatform(430, 700, 150, 10);
  for (var i = 0; i < 4; i++){
    createPlatform(500 + (350 * i), 565 - (35 * i), 10, 650 + (70 * i));
    createPlatform(470 + (350 * i), 600 - (35 * i), 70, 10);
    createPlatform(460 + (350 * i), 625 - (35 * i), 90, 10);
    createPlatform(450 + (350 * i), 650 - (35 * i), 110, 10);
    createPlatform(440 + (350 * i), 675 - (35 * i), 130, 10);
    createPlatform(430 + (350 * i), 700 - (35 * i), 150, 10);
  }
  // for (var i = 0; i<4; i++){
  //   createPlatform(470, 600, 70, 10);
  //   createPlatform(450, 650, 110, 10);
  //   createPlatform(430, 700, 150, 10);
  // }
   

  //  createPlatform(800, 600, 10, 600);
  //  createPlatform(750, 650, 110, 10);
  //  createPlatform(730, 700, 150, 10);
   
   
    //dimensions: 1400 x 750

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("max", 90, 300, 0, .5)


    
    
    
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)
    createCannon("top", 100, 2000)






    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
