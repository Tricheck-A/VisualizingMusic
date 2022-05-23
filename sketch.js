
//move slider to see changes!
//sliders control the first 6 parameters of camera()
let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20;
let soundFile;

let pauseButton = document.getElementById('pauseButton');

function preload() {
  soundFormats('ogg', 'mp3');
  soundFile = loadSound('sound/TwoFeet.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //create sliders
  for (var i = 0; i < 6; i++) {
    if (i === 2) {
      sliderGroup[i] = createSlider(10, 400, 200);
    } else {
      sliderGroup[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 6, 5, 85);
    sliderGroup[i].position(10, height + h);
    sliderGroup[i].style('width', '80px');
  }
  // Create Play Button
  let playButton = createButton('PLAY');
  playButton.parent('buttonContainer');
  playButton.mouseClicked(playSong);

  // Create Pause Button
  let pauseButton = createButton('PAUSE');
  pauseButton.parent('buttonContainer');
  pauseButton.mouseClicked(pauseSong);

    // Create Pause Button
    let restartButton = createButton('RESTART');
    restartButton.parent('buttonContainer');
    restartButton.mouseClicked(restartSong);
}

function draw() {
  background(0);
  // assigning sliders' value to each parameters
  X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value();
  centerX = sliderGroup[3].value();
  centerY = sliderGroup[4].value();
  centerZ = sliderGroup[5].value();
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
  stroke(255);
  fill(255, 102, 94);
  box(85);
}


// AUDIO FUNCTIONS

function playSong(){
  soundFile.loop();
}
function pauseSong(){
  soundFile.pause();
}
function restartSong(){
  if(soundFile.isPlaying() == true){
    soundFile.jump();
  } else {
    soundFile.play();
    soundFile.jump();
  }
}


// CANVAS SIZE FUNCTION

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
