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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    // Smaller and higher platforms make the level more challenging.
createPlatform(100, 600, 250, 25, "lime");
createPlatform(300, 540, 250, 25, "blue");
createPlatform(500, 480, 250, 25, "orange");
createPlatform(700, 420, 250, 25, "pink");
createPlatform(900, 360, 250, 25, "red");
createPlatform(1100, 300, 250, 25, "purple");


    // TODO 3 - Create Collectables
    // Collectables are placed on different platforms.
    createCollectable("diamond", 150, 450);
    createCollectable("steve", 700, 250);
    createCollectable("max", 1350, 300);


    // TODO 4 - Create Cannons
    // Faster firing makes the level more challenging.
    createCannon("left", 300, 1800);
    createCannon("right", 500, 1800);
    createCannon("top", 700, 2200);


    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});