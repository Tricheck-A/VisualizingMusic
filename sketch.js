let soundFile;










function preload() {
  soundFormats('ogg', 'mp3');
  soundFile = loadSound('sound/TwoFeet.mp3');
};










function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);
  
  // Create Play Button
  let playButton = createButton('PLAY');
  playButton.parent('buttonContainer');
  playButton.mouseClicked(playSong);

  // Create Pause Button
  let pauseButton = createButton('PAUSE');
  pauseButton.parent('buttonContainer');
  pauseButton.mouseClicked(pauseSong);

  // Create Restart Button
  let restartButton = createButton('RESTART');
  restartButton.parent('buttonContainer');
  restartButton.mouseClicked(restartSong);
};










function draw() {
  let soundTime = soundFile.currentTime();

///// VARIABLEN FÜR DIE ZEIT CONDITIONS DER MUSIKKOMPONENTEN /////

  let frauenstimmeMelodie =
    ((soundTime > 0.8 && soundTime < 3.2) || 
    (soundTime > 4 && soundTime < 6.4) ||
    (soundTime > 7.2 && soundTime < 9.6) ||
    (soundTime > 13.6 && soundTime < 16) ||
    (soundTime > 16.8 && soundTime < 19.2) || 
    (soundTime > 20 && soundTime < 22.4) ||
    (soundTime > 26.4 && soundTime < 28.8) ||
    (soundTime > 29.6 && soundTime < 32) ||
    (soundTime > 32.8 && soundTime < 35.2) ||
    (soundTime > 39.2 && soundTime < 41.6) ||
    (soundTime > 42.4 && soundTime < 44.8) ||
    (soundTime > 45.6 && soundTime < 48) || 
  // zweifte Hälfte
    (soundTime > 80.8 && soundTime < 83.2) ||
    (soundTime > 84 && soundTime < 86.4) ||
    (soundTime > 90.4 && soundTime < 92.8) ||
    (soundTime > 93.6 && soundTime < 96) ||
    (soundTime > 96.8 && soundTime < 99.2));



  let frauenstimmeKurz =
    ((soundTime > 10 && soundTime < 12) ||
    (soundTime > 22.8 && soundTime < 24.8) ||
    (soundTime > 35.6 && soundTime < 37.6) ||
    (soundTime > 48.4 && soundTime < 50.4) ||
  // zweite Hälfte
    (soundTime > 86.8 && soundTime < 88.8) || 
    (soundTime > 99.6 && soundTime < 101.6));



  let erststimme =
    ((soundTime > 26.4 && soundTime < 28.8) ||
    (soundTime > 29.6 && soundTime < 32) ||
    (soundTime > 32.8 && soundTime < 35.2) ||
    (soundTime > 35.6 && soundTime < 37.6) ||
    (soundTime > 39.2 && soundTime < 41.6) ||
    (soundTime > 42.4 && soundTime < 44.8) ||
    (soundTime > 45.6 && soundTime < 48) ||
    (soundTime > 48.4 && soundTime < 50.4) ||
  // zweite Hälfte
    (soundTime > 77.6 && soundTime < 80) || 
    (soundTime > 80.8 && soundTime < 83.2) ||
    (soundTime > 84 && soundTime < 86.4) ||
    (soundTime > 86.8 && soundTime < 88.8) ||
    (soundTime > 90.4 && soundTime < 92.8) ||
    (soundTime > 93.6 && soundTime < 96) ||
    (soundTime > 96.8 && soundTime < 99.2) ||
    (soundTime > 99.6 && soundTime < 101.6));



  let zweitstimme =
    ((soundTime > 39.2 && soundTime < 41.6) ||
    (soundTime > 42.4 && soundTime < 44.8) ||
    (soundTime > 45.6 && soundTime < 48) ||
    (soundTime > 48.4 && soundTime < 50.4) ||
  // zweite Hälfte
    (soundTime > 90.4 && soundTime < 92.8) ||
    (soundTime > 93.6 && soundTime < 96) ||
    (soundTime > 96.8 && soundTime < 99.2) ||
    (soundTime > 99.6 && soundTime < 101.6));



  let frauenstimmeAkzente =
    ((soundTime > 50.4 && soundTime < 51) || 
    (soundTime > 63.2 && soundTime < 63.6) ||
    (soundTime > 75.9 && soundTime < 76.5) ||
  // zweite Hälfte
    (soundTime > 101.6 && soundTime < 102.2) ||
    (soundTime > 114.3 && soundTime < 114.9) || 
    (soundTime > 127.1 && soundTime < 127.7));



  let bass =
    ((soundTime > 51 && soundTime < 51.8) || 
    (soundTime > 52.8 && soundTime < 53.6) ||
    (soundTime > 54.4 && soundTime < 55.2) ||
    (soundTime > 56 && soundTime < 56.8) ||
    (soundTime > 57.6 && soundTime < 58.4) || 
    (soundTime > 59.2 && soundTime < 60) ||
    (soundTime > 60.8 && soundTime < 61.6) ||
    (soundTime > 62.4 && soundTime < 63.2) ||
    (soundTime > 64 && soundTime < 64.8) ||
    (soundTime > 65.6 && soundTime < 66.4) ||
    (soundTime > 67.2 && soundTime < 68) ||
    (soundTime > 68.8 && soundTime < 69.6) ||
    (soundTime > 70.4 && soundTime < 71.2) ||
    (soundTime > 72 && soundTime < 72.8) ||
    (soundTime > 73.6 && soundTime < 74.4) ||
    (soundTime > 75.2 && soundTime < 76) ||
  // zweite Hälfte
    (soundTime > 102.3 && soundTime < 103.1) ||
    (soundTime > 103.9 && soundTime < 104.7) ||
    (soundTime > 105.5 && soundTime < 106.3) ||
    (soundTime > 107.1 && soundTime < 107.9) ||
    (soundTime > 108.7 && soundTime < 109.5) ||
    (soundTime > 110.3 && soundTime < 111.1) ||
    (soundTime > 111.9 && soundTime < 112.7) ||
    (soundTime > 113.5 && soundTime < 114.3) ||
    (soundTime > 115.1 && soundTime < 115.9) ||
    (soundTime > 116.7 && soundTime < 117.5) ||
    (soundTime > 118.3 && soundTime < 119.1) ||
    (soundTime > 119.9 && soundTime < 120.7) ||
    (soundTime > 121.5 && soundTime < 122.3) ||
    (soundTime > 123.1 && soundTime < 123.9) ||
    (soundTime > 124.7 && soundTime < 125.5) ||
    (soundTime > 126.3 && soundTime < 127.1));



  let bassdrum =
    ((soundTime > 80 && soundTime < 80.8) || 
    (soundTime > 81.6 && soundTime < 82.4) ||
    (soundTime > 83.2 && soundTime < 84) ||
    (soundTime > 84.8 && soundTime < 85.6) ||
    (soundTime > 86.4 && soundTime < 87.2) ||
    (soundTime > 88 && soundTime < 88.8) ||
    (soundTime > 91.2 && soundTime < 92) ||
    (soundTime > 92.8 && soundTime < 93.6) ||
    (soundTime > 94.4 && soundTime < 95.2) ||
    (soundTime > 96 && soundTime < 96.8) ||
    (soundTime > 97.6 && soundTime < 98.4));



  let clap =
    ((soundTime > 50.4 && soundTime < 51) || 
    (soundTime > 51.8 && soundTime < 52.8) || 
    (soundTime > 53.6 && soundTime < 54.4) ||
    (soundTime > 55.2 && soundTime < 56) ||
    (soundTime > 56.8 && soundTime < 57.6) ||
    (soundTime > 58.4 && soundTime < 59.2) || 
    (soundTime > 60 && soundTime < 60.8) ||
    (soundTime > 61.6 && soundTime < 62.4) ||
    (soundTime > 63.2 && soundTime < 64) ||
    (soundTime > 64.8 && soundTime < 65.6) ||
    (soundTime > 66.4 && soundTime < 67.2) ||
    (soundTime > 68 && soundTime < 68.8) ||
    (soundTime > 69.6 && soundTime < 70.4) ||
    (soundTime > 71.2 && soundTime < 72) ||
    (soundTime > 72.8 && soundTime < 73.6) ||
    (soundTime > 74.4 && soundTime < 75.2) ||
    (soundTime > 76 && soundTime < 76.8) ||
    (soundTime > 79.2 && soundTime < 80) ||
    (soundTime > 80.8 && soundTime < 81.6) || 
    (soundTime > 82.4 && soundTime < 83.2) ||
    (soundTime > 84 && soundTime < 84.8) ||
    (soundTime > 85.6 && soundTime < 86.4) ||
    (soundTime > 87.2 && soundTime < 88) ||
    (soundTime > 88.8 && soundTime < 89.6) ||
    (soundTime > 90.4 && soundTime < 91.2) ||
    (soundTime > 92 && soundTime < 92.8) ||
    (soundTime > 93.6 && soundTime < 94.4) ||
    (soundTime > 95.2 && soundTime < 96) ||
    (soundTime > 96.8 && soundTime < 97.6) ||
    (soundTime > 98.4 && soundTime < 99.2) ||
    (soundTime > 101.5 && soundTime < 102.3) ||
    (soundTime > 103.1 && soundTime < 103.9) ||
    (soundTime > 104.7 && soundTime < 105.5) ||
    (soundTime > 106.3 && soundTime < 107.1) ||
    (soundTime > 107.9 && soundTime < 108.7) ||
    (soundTime > 109.5 && soundTime < 110.3) ||
    (soundTime > 111.1 && soundTime < 111.9) ||
    (soundTime > 112.7 && soundTime < 113.5) ||
    (soundTime > 114.3 && soundTime < 115.1) ||
    (soundTime > 115.9 && soundTime < 116.7) ||
    (soundTime > 117.5 && soundTime < 118.3) ||
    (soundTime > 119.1 && soundTime < 119.9) ||
    (soundTime > 120.7 && soundTime < 121.5) ||
    (soundTime > 122.3 && soundTime < 123.1) ||
    (soundTime > 123.9 && soundTime < 124.7) ||
    (soundTime > 125.5 && soundTime < 126.3) ||
    (soundTime > 127.1 && soundTime < 127.9));



  let gitarre =
    ((soundTime > 51.8 && soundTime < 52.8) || 
    (soundTime > 53.2 && soundTime < 54.4) ||
    (soundTime > 55 && soundTime < 56) ||
    (soundTime > 56.4 && soundTime < 57.6) ||
    (soundTime > 58.2 && soundTime < 59.2) ||
    (soundTime > 59.6 && soundTime < 60.6) ||
    (soundTime > 61.4 && soundTime < 62.4) ||
    (soundTime > 62.8 && soundTime < 63.8) ||
    (soundTime > 64.6 && soundTime < 65.6) ||
    (soundTime > 66 && soundTime < 67) ||
    (soundTime > 67.8 && soundTime < 68.8) ||
    (soundTime > 69.2 && soundTime < 70.2) ||
    (soundTime > 71 && soundTime < 72) ||
    (soundTime > 72.4 && soundTime < 73.4) ||
    (soundTime > 74.2 && soundTime < 75.2) ||
    (soundTime > 75.6 && soundTime < 77.1) ||
  // zweite Hälfte
    (soundTime > 103.1 && soundTime < 103.9) || 
    (soundTime > 104.3 && soundTime < 105.5) ||
    (soundTime > 106.1 && soundTime < 107.1) ||
    (soundTime > 107.5 && soundTime < 108.7) ||
    (soundTime > 109.5 && soundTime < 110.5) ||
    (soundTime > 110.9 && soundTime < 111.9) ||
    (soundTime > 112.7 && soundTime < 113.7) ||
    (soundTime > 114.1 && soundTime < 115.1) ||
    (soundTime > 115.9 && soundTime < 116.9) ||
    (soundTime > 117.3 && soundTime < 118.3) ||
    (soundTime > 119.1 && soundTime < 119.9) ||
    (soundTime > 120.3 && soundTime < 121.3) ||
    (soundTime > 122.1 && soundTime < 123.1) ||
    (soundTime > 123.5 && soundTime < 124.5) ||
    (soundTime > 125.3 && soundTime < 126.3) ||
    (soundTime > 126.7 && soundTime < 128.2));




  let hihat1 =
    ((soundTime > 63.9 && soundTime < 64.3) ||
     (soundTime > 65.5 && soundTime < 65.9) ||
     (soundTime > 67.1 && soundTime < 67.5) ||
     (soundTime > 68.7 && soundTime < 69.1) ||
     (soundTime > 70.3 && soundTime < 70.7) || 
     (soundTime > 71.9 && soundTime < 72.3) ||
     (soundTime > 73.5 && soundTime < 73.9) ||
     (soundTime > 75.1 && soundTime < 75.5) ||
  // zweites Mal
     (soundTime > 90.4 && soundTime < 90.8) ||
     (soundTime > 92 && soundTime < 92.4) ||
     (soundTime > 93.6 && soundTime < 94) ||
     (soundTime > 95.2 && soundTime < 95.6) ||
     (soundTime > 96.8 && soundTime < 97.2) ||
     (soundTime > 98.4 && soundTime < 98.8) ||
  // drittes Mal
     (soundTime > 115.1 && soundTime < 115.5) ||
     (soundTime > 116.7 && soundTime < 117.1) ||
     (soundTime > 118.3 && soundTime < 118.7) ||
     (soundTime > 119.9 && soundTime < 120.3) ||
     (soundTime > 121.5 && soundTime < 121.9) ||
     (soundTime > 123.1 && soundTime < 123.5) ||
     (soundTime > 124.7 && soundTime < 125.1) ||
     (soundTime > 126.3 && soundTime < 126.7));




  let hihat2 =
     ((soundTime > 64.3 && soundTime < 64.7) ||
      (soundTime > 65.9 && soundTime < 66.3) ||
      (soundTime > 67.5 && soundTime < 67.9) ||
      (soundTime > 69.1 && soundTime < 69.5) ||
      (soundTime > 70.7 && soundTime < 71.1) ||
      (soundTime > 72.3 && soundTime < 72.7) ||
      (soundTime > 73.9 && soundTime < 74.3) ||
      (soundTime > 75.5 && soundTime < 75.9) ||
  // zweites Mal
      (soundTime > 90.8 && soundTime < 91.2) ||
      (soundTime > 92.4 && soundTime < 92.8) ||
      (soundTime > 94 && soundTime < 94.4) ||
      (soundTime > 95.6 && soundTime < 96) ||
      (soundTime > 97.2 && soundTime < 97.6) ||
      (soundTime > 98.8 && soundTime < 99.2) ||
  // drittes Mal
      (soundTime > 115.5 && soundTime < 115.9) ||
      (soundTime > 117.1 && soundTime < 117.5) ||
      (soundTime > 118.7 && soundTime < 119.1) ||
      (soundTime > 120.3 && soundTime < 120.7) ||
      (soundTime > 121.9 && soundTime < 122.3) ||
      (soundTime > 123.5 && soundTime < 123.9) ||
      (soundTime > 125.1 && soundTime < 125.5) ||
      (soundTime > 126.7 && soundTime < 127.1));



  let hihat3 =
      ((soundTime > 64.7 && soundTime < 65.1) ||
       (soundTime > 66.3 && soundTime < 66.7) ||
       (soundTime > 67.9 && soundTime < 68.3) ||
       (soundTime > 69.5 && soundTime < 69.9) ||
       (soundTime > 71.1 && soundTime < 71.5) ||
       (soundTime > 72.7 && soundTime < 73.1) ||
       (soundTime > 74.3 && soundTime < 74.7) ||
       (soundTime > 75.9 && soundTime < 76.3) ||
  // zweites Mal
      (soundTime > 91.2 && soundTime < 91.6) ||
      (soundTime > 92.8 && soundTime < 93.2) ||
      (soundTime > 94.4 && soundTime < 94.8) ||
      (soundTime > 96 && soundTime < 96.4) ||
      (soundTime > 97.6 && soundTime < 98) ||
      (soundTime > 99.2 && soundTime < 99.6) ||
  // drittes Mal
      (soundTime > 115.9 && soundTime < 116.3) ||
      (soundTime > 117.5 && soundTime < 117.9) ||
      (soundTime > 119.1 && soundTime < 119.5) ||
      (soundTime > 120.7 && soundTime < 121.1) ||
      (soundTime > 122.3 && soundTime < 122.7) ||
      (soundTime > 123.9 && soundTime < 124.3) ||
      (soundTime > 125.5 && soundTime < 125.9) ||
      (soundTime > 127.1 && soundTime < 127.5));



  let hihat4 =
      ((soundTime > 65.1 && soundTime < 65.5) ||
      (soundTime > 66.7 && soundTime < 67.1) ||
      (soundTime > 68.3 && soundTime < 68.7) ||
      (soundTime > 69.9 && soundTime < 70.3) ||
      (soundTime > 71.5 && soundTime < 71.9) ||
      (soundTime > 73.1 && soundTime < 73.5) ||
      (soundTime > 74.7 && soundTime < 75.1) ||
  // zweites Mal
      (soundTime > 91.6 && soundTime < 92) ||
      (soundTime > 93.2 && soundTime < 93.6) ||
      (soundTime > 94.8 && soundTime < 95.2) ||
      (soundTime > 96.8 && soundTime < 96.8) ||
      (soundTime > 98 && soundTime < 98.4) ||
      (soundTime > 99.6 && soundTime < 100) ||
// drittes Mal
      (soundTime > 116.3 && soundTime < 116.7) ||
      (soundTime > 117.9 && soundTime < 118.3) ||
      (soundTime > 119.5 && soundTime < 119.9) ||
      (soundTime > 121.1 && soundTime < 121.5) ||
      (soundTime > 122.7 && soundTime < 123.1) ||
      (soundTime > 124.3 && soundTime < 124.7) ||
      (soundTime > 125.9 && soundTime < 126.3) ||
      (soundTime > 127.5 && soundTime < 127.9));



  ///// AB HIER DRAW FUNKTIONEN /////

  background(0);
  orbitControl(3,3,0.2);

  // Animation Frauenstimme (Melodie)
  if (frauenstimmeMelodie){
    animateBox();
  }


  // Animation Erststimme
  if (erststimme){
    animateBox2();
  } 


  // Animation Zweitstimme
  if (zweitstimme){
    animateBox3();
  }


  // Animation Stimme (kurz)
  if (frauenstimmeKurz){
    animateCone();
  }


  // Animation Frauenstimme (Akzente)
  if (frauenstimmeAkzente){
    animateSphere3();
  }


  // Animation Bass
  if (bass){
    orbit3d();
  }


  // Animation Clap
  if (clap){
    animateSphere2();
  }


  // Animation Bassdrum
  if (bassdrum){
    animateSphere();
  }



  // Animation Gitarre
  if (gitarre){
      animateSphere4();
  }

  

 // Animation Hihats
 push()

 rotateX(millis() / 1000);
 rotateY(millis() / 1200);

  if (hihat1){
    animateTorus1();
  }

  if (hihat2){
    animateTorus2();
  }


  if (hihat3){
    animateTorus3();
  }


  if (hihat4){
    animateTorus4();
  }
  pop();

};










///// FUNKTIONEN FÜR ANIMATIONEN /////

function orbit3d() {
  push()
  let radius = width / 3;

  rotateX(millis() / 10000);
  rotateY(millis() / 12000);
  
  for (let i = 0; i <= 14; i++) {
    for (let j = 0; j <= 14; j++) {
      push();
      
      // Anzahl der Objekte
      let a = (j / 14) * PI;
      let b = (i / 14) * PI;
      translate(
        // Anzahl der Ringe
        sin(4 * a) * radius * sin(b),
        (cos(b) * radius) / 1,
        cos(4 * a) * radius * sin(b)
      );

      stroke(255)
      strokeWeight(10);
      point();
    pop();
    }
  }
  pop()
};





function animateBox() {
  push();
  translate(300,0,0)
  rotateX(millis() / 2000);
  rotateY(millis() / 1000);
  noFill();
  stroke(255);
  box(10,75);
  pop();
}





function animateBox2() {
  push();
  translate(0,-300,0)
  rotateX(millis() / 2000);
  rotateY(millis() / 1000);
  noFill();
  stroke(255);
  box(75,10);
  pop();
}





function animateBox3() {
  push();
  translate(0,300,0)
  rotateX(millis() / 2000);
  rotateY(millis() / 1000);
  noFill();
  stroke(255);
  box(50,50);
  pop();
}





function animateSphere() {
  push();
  rotateX(millis() / 2000);
  rotateY(millis() / 1000);
  noFill();
  stroke(255);
  sphere(55,3,24);
  pop();
}





function animateSphere2() {
  push();
  rotateX(millis() / 2000);
  rotateY(millis() / 1000);
  noFill();
  stroke(255);
  sphere(50,6,24);
  pop();
}





function animateSphere3() {
  push();
  rotateX(millis() / -1000);
  rotateY(millis() / -500);
  fill(255,60,60);
  stroke(255);
  sphere(25);
  pop();
}




function animateSphere4() {
  let radius = width / 6; 
  let menge = 24;
  push()
    rotateX(millis() / 2000);
    rotateY(millis() / 3000);
    
    for (let i = 0; i <= menge; i++) {
      for (let j = 0; j <= menge; j++) {
        push();
        
        // Anzahl der Objekte
        let a = (j / menge) * PI;
        let b = (i / menge) * PI;
        translate(
          // Anzahl der Ringe
          sin(4 * a) * radius * sin(b),
          (cos(b) * radius) / 1,
          cos(4 * a) * radius * sin(b)
        );
  
        stroke(255)
        strokeWeight(5);
        point();
      pop();
      }
    }
  pop()
}





function animateCone() {
  push();
  translate(-300,0,0)
  rotateX(millis() / 2000);
  rotateY(millis() / 1000);
  noFill();
  stroke(255);
  cone(45,75);
  pop();
}




function animateTorus1() {
  push();
  translate(0,-150,200)
  rotateX(millis() / 2000);
  rotateY(millis() / 3000);
  noFill();
  stroke(255);
  torus(20,5);
  pop();
  
}




function animateTorus2() {
  push();
  translate(-150,-150,-50)
  rotateX(millis() / 4000);
  rotateY(millis() / 2000);
  noFill();
  stroke(255);
  torus(20,5);
  pop();
}




function animateTorus3() {
  push();
  translate(0,-100,-200)
  rotateX(millis() / 4000);
  rotateY(millis() / 2000);
  noFill();
  stroke(255);
  torus(20,5);
  pop();
}




function animateTorus4() {
  push();
  translate(150,-150,-50)
  rotateX(millis() / 4000);
  rotateY(millis() / 2000);
  noFill();
  stroke(255);
  torus(20,5);
  pop();
}










///// CANVAS SIZE FUNKTION FÜR FULLSCREEN /////

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
};










///// AUDIO FUNKTIONEN /////

function playSong(){
  soundFile.jump(112);
  // soundFile.loop();
};
function pauseSong(){
  soundFile.pause();
};
function restartSong(){
  if(soundFile.isPlaying() == true){
    soundFile.jump();
  } else {
    soundFile.play();
    soundFile.jump();
  }
};