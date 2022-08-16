/* ZU HINZUFÜGEN/ ÄNDERN

- CLAP ANIMATION

*/



let soundFile;
let audioSlider;
let audioSliderValue;
let sliderSpan;
let sliderText;




let x, y;
let c;
let down;
let stars = [];
let sky = 0;


let planetColor;
let planetStrokeColor;
let strokesColor;


let numFrames = 200;
let m = 750;
let delay_factor = 1;
const simplex = new SimplexNoise();
let motion_radius = 2;


function preload() {
  soundFormats('ogg', 'mp3');
  soundFile = loadSound('sound/TwoFeet.mp3');

  document.documentElement.className = 'DARK';
}










function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);

  //Kameraeinstellungen
  camera(0, 0, (height/1) / tan(PI/6), 0, 0, 0, 0, 1, 0)

  // Loop zum Erstellen der Sterne
  c = 255;
  for (let i = 0; i < 1000; i++) {
    stars[i] = new Star(random(-width*2,width*2), random(-height*2,height*2), random(-width*2,width*2), random(255), random(0.1, 3), random(1));
  }

  
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

  // Create Hide Button
  let infoButton = createButton('INFO');
  infoButton.parent('buttonContainer');
  infoButton.mouseClicked(toggleInfo);

  // Create Hide Button
  let themeButton = createButton('DARK');
  themeButton.parent('buttonContainer');
  themeButton.addClass('theme-name')
  themeButton.mouseClicked(setTheme);

  // Create Color Picker Button
  planetColor = createColorPicker('rgb(0,215,255)');
  planetColor.parent('buttonContainer');
  planetColor.addClass('colorPicker');
  
  strokesColor = createColorPicker('rgb(255,255,255)');
  strokesColor.parent('buttonContainer');
  strokesColor.addClass('colorPicker'); 

  // Create Audio Slider
  audioSlider = createSlider(0,soundFile.duration(),soundFile.currentTime(),0.1)
  audioSlider.mousePressed(sliderDragSong);
  audioSlider.mouseReleased(sliderJumpSong);
  audioSlider.addClass('slider');

  // Create Audio Slider
  sliderSpan = createSpan();
  sliderSpan.addClass('sliderSpan');
};




function draw() {
  let soundTime = soundFile.currentTime();





  // Audio Slider Einstellungen
  // Erzeugt den Inhalt der Span als Zeitangabe mm:ss
  let minutes = Math.floor(audioSlider.value() / 60);
  let seconds = Math.round(audioSlider.value() % 60);
  let time = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  sliderSpan.html(time);

  // audioSlider.value(soundTime); // Updates the AudioSlider Playhead according to the soundTime
  if (soundFile.isPlaying() == true){
    audioSlider.value(soundTime);
  } else if (soundFile.isPlaying() != true){
    soundTime = audioSlider.value();
  }




  //Variablen für die Farbeinstellungen
  planetStrokeColor = planetColor.color();
  planetStrokeColor.setAlpha(210);




  // Zeitvariable für die Noise-Fäden zur Geschwindigkeitseinstellung
  let t = 0.5*(frameCount - 1)/numFrames;





///// VARIABLEN FÜR DIE ZEIT CONDITIONS DER MUSIKKOMPONENTEN /////

  let frauenstimmeMelodie1 =
    ((soundTime > 0.8 && soundTime < 1.2) || 
    (soundTime > 4 && soundTime < 4.4) ||
    (soundTime > 7.2 && soundTime < 7.6) ||
    (soundTime > 13.6 && soundTime < 14) ||
    (soundTime > 16.8 && soundTime < 17.2) || 
    (soundTime > 20 && soundTime < 20.4) ||
    (soundTime > 26.4 && soundTime < 26.8) ||
    (soundTime > 29.6 && soundTime < 30) ||
    (soundTime > 32.8 && soundTime < 33.2) ||
    (soundTime > 39.2 && soundTime < 39.6) ||
    (soundTime > 42.4 && soundTime < 42.8) ||
    (soundTime > 45.6 && soundTime < 46) || 
  // zweifte Hälfte
    (soundTime > 80.8 && soundTime < 81.2) ||
    (soundTime > 84 && soundTime < 84.4) ||
    (soundTime > 90.4 && soundTime < 90.8) ||
    (soundTime > 93.6 && soundTime < 94) ||
    (soundTime > 96.8 && soundTime < 97.2));

  let frauenstimmeMelodie2 =
    ((soundTime > 1.2 && soundTime < 1.6) || 
    (soundTime > 4.4 && soundTime < 4.8) ||
    (soundTime > 7.6 && soundTime < 8) ||
    (soundTime > 14 && soundTime < 14.4) ||
    (soundTime > 17.2 && soundTime < 17.6) || 
    (soundTime > 20.4 && soundTime < 20.8) ||
    (soundTime > 26.8 && soundTime < 27.2) ||
    (soundTime > 30 && soundTime < 30.4) ||
    (soundTime > 33.2 && soundTime < 33.6) ||
    (soundTime > 39.6 && soundTime < 40) ||
    (soundTime > 42.8 && soundTime < 43.2) ||
    (soundTime > 46 && soundTime < 46.4) || 
  // zweifte Hälfte
    (soundTime > 81.2 && soundTime < 81.6) ||
    (soundTime > 84.4 && soundTime < 84.8) ||
    (soundTime > 90.8 && soundTime < 91.2) ||
    (soundTime > 94 && soundTime < 94.4) ||
    (soundTime > 97.2 && soundTime < 97.6));

  let frauenstimmeMelodie3 =
    ((soundTime > 1.6 && soundTime < 2) || 
    (soundTime > 4.8 && soundTime < 5.2) ||
    (soundTime > 8 && soundTime < 8.4) ||
    (soundTime > 14.4 && soundTime < 14.8) ||
    (soundTime > 17.6 && soundTime < 18) || 
    (soundTime > 20.8 && soundTime < 21.2) ||
    (soundTime > 27.2 && soundTime < 27.6) ||
    (soundTime > 30.4 && soundTime < 30.8) ||
    (soundTime > 33.6 && soundTime < 34) ||
    (soundTime > 40 && soundTime < 40.4) ||
    (soundTime > 43.2 && soundTime < 43.6) ||
    (soundTime > 46.4 && soundTime < 46.8) || 
  // zweifte Hälfte
    (soundTime > 81.6 && soundTime < 82) ||
    (soundTime > 84.8 && soundTime < 85.2) ||
    (soundTime > 91.2 && soundTime < 91.6) ||
    (soundTime > 94.4 && soundTime < 94.8) ||
    (soundTime > 97.6 && soundTime < 98));

  let frauenstimmeMelodie4 =
    ((soundTime > 2 && soundTime < 2.4) || 
    (soundTime > 5.2 && soundTime < 5.6) ||
    (soundTime > 8.4 && soundTime < 8.8) ||
    (soundTime > 10 && soundTime < 10.4) ||
    (soundTime > 10.8 && soundTime < 11.2) ||
    (soundTime > 14.8 && soundTime < 15.2) ||
    (soundTime > 18 && soundTime < 18.4) || 
    (soundTime > 21.2 && soundTime < 21.6) ||
    (soundTime > 22.8 && soundTime < 23.2) ||
    (soundTime > 23.6 && soundTime < 24) ||
    (soundTime > 27.6 && soundTime < 28) ||
    (soundTime > 30.8 && soundTime < 31.2) ||
    (soundTime > 34 && soundTime < 34.4) ||
    (soundTime > 35.6 && soundTime < 36) ||
    (soundTime > 36.4 && soundTime < 36.8) ||
    (soundTime > 40.4 && soundTime < 40.8) ||
    (soundTime > 43.6 && soundTime < 44) ||
    (soundTime > 46.8 && soundTime < 47.2) ||
    (soundTime > 48.4 && soundTime < 48.8) ||
    (soundTime > 49.2 && soundTime < 49.6) || 
  // zweifte Hälfte
    (soundTime > 82 && soundTime < 82.4) ||
    (soundTime > 85.2 && soundTime < 85.6) ||
    (soundTime > 86.8 && soundTime < 87.2) || 
    (soundTime > 87.6 && soundTime < 88) || 
    (soundTime > 91.6 && soundTime < 92) ||
    (soundTime > 94.8 && soundTime < 95.2) ||
    (soundTime > 98 && soundTime < 98.4) ||
    (soundTime > 99.6 && soundTime < 100) ||
    (soundTime > 100.4 && soundTime < 100.8));

  let frauenstimmeMelodie5 =
    ((soundTime > 2.4 && soundTime < 3.2) || 
    (soundTime > 5.6 && soundTime < 6.4) ||
    (soundTime > 8.8 && soundTime < 9.6) ||
    (soundTime > 10.4 && soundTime < 10.8) ||
    (soundTime > 11.2 && soundTime < 12) ||
    (soundTime > 15.2 && soundTime < 16) ||
    (soundTime > 18.4 && soundTime < 19.2) || 
    (soundTime > 21.6 && soundTime < 22.4) ||
    (soundTime > 23.2 && soundTime < 23.6) ||
    (soundTime > 24 && soundTime < 24.8) ||
    (soundTime > 28 && soundTime < 28.8) ||
    (soundTime > 31.2 && soundTime < 32) ||
    (soundTime > 34.4 && soundTime < 35.2) ||
    (soundTime > 36 && soundTime < 36.4) ||
    (soundTime > 36.8 && soundTime < 37.6) ||
    (soundTime > 40.8 && soundTime < 41.6) ||
    (soundTime > 44 && soundTime < 44.8) ||
    (soundTime > 47.2 && soundTime < 48) ||
    (soundTime > 48.8 && soundTime < 49.2) ||
    (soundTime > 49.6 && soundTime < 50.4) || 
  // zweifte Hälfte
    (soundTime > 82.4 && soundTime < 83.2) ||
    (soundTime > 85.6 && soundTime < 86.4) ||
    (soundTime > 87.2 && soundTime < 87.6) || 
    (soundTime > 88 && soundTime < 88.8) || 
    (soundTime > 92 && soundTime < 92.8) ||
    (soundTime > 95.2 && soundTime < 96) ||
    (soundTime > 98.4 && soundTime < 99.2) ||
    (soundTime > 100 && soundTime < 100.4) || 
    (soundTime > 100.8 && soundTime < 101.6));





  let erststimme1 =
    ((soundTime > 26.4 && soundTime < 26.8) ||
    (soundTime > 29.6 && soundTime < 30) ||
    (soundTime > 32.8 && soundTime < 33.2) ||
    (soundTime > 39.2 && soundTime < 39.6) ||
    (soundTime > 42.4 && soundTime < 42.8) ||
    (soundTime > 45.6 && soundTime < 46) || 
  // zweifte Hälfte
    (soundTime > 77.6 && soundTime < 78) ||
    (soundTime > 80.8 && soundTime < 81.2) ||
    (soundTime > 84 && soundTime < 84.4) ||
    (soundTime > 90.4 && soundTime < 90.8) ||
    (soundTime > 93.6 && soundTime < 94) ||
    (soundTime > 96.8 && soundTime < 97.2));


  let erststimme2 =
    ((soundTime > 26.8 && soundTime < 27.2) ||
    (soundTime > 30 && soundTime < 30.4) ||
    (soundTime > 33.2 && soundTime < 33.6) ||
    (soundTime > 39.6 && soundTime < 40) ||
    (soundTime > 42.8 && soundTime < 43.2) ||
    (soundTime > 46 && soundTime < 46.4) || 
  // zweifte Hälfte
    (soundTime > 78 && soundTime < 78.4) ||
    (soundTime > 81.2 && soundTime < 81.6) ||
    (soundTime > 84.4 && soundTime < 84.8) ||
    (soundTime > 90.8 && soundTime < 91.2) ||
    (soundTime > 94 && soundTime < 94.4) ||
    (soundTime > 97.2 && soundTime < 97.6));


  let erststimme3 =
    ((soundTime > 27.2 && soundTime < 27.6) ||
    (soundTime > 30.4 && soundTime < 30.8) ||
    (soundTime > 33.6 && soundTime < 34) ||
    (soundTime > 40 && soundTime < 40.4) ||
    (soundTime > 43.2 && soundTime < 43.6) ||
    (soundTime > 46.4 && soundTime < 46.8) || 
  // zweifte Hälfte
    (soundTime > 78.4 && soundTime < 78.8) ||
    (soundTime > 81.6 && soundTime < 82) ||
    (soundTime > 84.8 && soundTime < 85.2) ||
    (soundTime > 91.2 && soundTime < 91.6) ||
    (soundTime > 94.4 && soundTime < 94.8) ||
    (soundTime > 97.6 && soundTime < 98));


  let erststimme4 =
    ((soundTime > 27.6 && soundTime < 28) ||
    (soundTime > 30.8 && soundTime < 31.2) ||
    (soundTime > 34 && soundTime < 34.4) ||
    (soundTime > 35.6 && soundTime < 36) ||
    (soundTime > 36.4 && soundTime < 36.8) ||
    (soundTime > 40.4 && soundTime < 40.8) ||
    (soundTime > 43.6 && soundTime < 44) ||
    (soundTime > 46.8 && soundTime < 47.2) ||
    (soundTime > 48.4 && soundTime < 48.8) ||
    (soundTime > 49.2 && soundTime < 49.6) || 
  // zweifte Hälfte
    (soundTime > 78.8 && soundTime < 79.2) ||
    (soundTime > 82 && soundTime < 82.4) ||
    (soundTime > 85.2 && soundTime < 85.6) ||
    (soundTime > 86.8 && soundTime < 87.2) || 
    (soundTime > 87.6 && soundTime < 88) || 
    (soundTime > 91.6 && soundTime < 92) ||
    (soundTime > 94.8 && soundTime < 95.2) ||
    (soundTime > 98 && soundTime < 98.4) ||
    (soundTime > 99.6 && soundTime < 100) ||
    (soundTime > 100.4 && soundTime < 100.8));


  let erststimme5 =
    ((soundTime > 28 && soundTime < 28.8) ||
    (soundTime > 31.2 && soundTime < 32) ||
    (soundTime > 34.4 && soundTime < 35.2) ||
    (soundTime > 36 && soundTime < 36.4) ||
    (soundTime > 36.8 && soundTime < 37.6) ||
    (soundTime > 40.8 && soundTime < 41.6) ||
    (soundTime > 44 && soundTime < 44.8) ||
    (soundTime > 47.2 && soundTime < 48) ||
    (soundTime > 48.8 && soundTime < 49.2) ||
    (soundTime > 49.6 && soundTime < 50.4) || 
  // zweifte Hälfte
    (soundTime > 79.2 && soundTime < 79.6) ||
    (soundTime > 82.4 && soundTime < 83.2) ||
    (soundTime > 85.6 && soundTime < 86.4) ||
    (soundTime > 87.2 && soundTime < 87.6) || 
    (soundTime > 88 && soundTime < 88.8) || 
    (soundTime > 92 && soundTime < 92.8) ||
    (soundTime > 95.2 && soundTime < 96) ||
    (soundTime > 98.4 && soundTime < 99.2) ||
    (soundTime > 100 && soundTime < 100.4) || 
    (soundTime > 100.8 && soundTime < 101.6));





  let zweitstimme1 =
    ((soundTime > 39.2 && soundTime < 39.6) ||
    (soundTime > 42.4 && soundTime < 42.8) ||
    (soundTime > 45.6 && soundTime < 46) || 
  // zweifte Hälfte
    (soundTime > 90.4 && soundTime < 90.8) ||
    (soundTime > 93.6 && soundTime < 94) ||
    (soundTime > 96.8 && soundTime < 97.2));


  let zweitstimme2 =
    ((soundTime > 39.6 && soundTime < 40) ||
    (soundTime > 42.8 && soundTime < 43.2) ||
    (soundTime > 46 && soundTime < 46.4) || 
  // zweifte Hälfte
    (soundTime > 90.8 && soundTime < 91.2) ||
    (soundTime > 94 && soundTime < 94.4) ||
    (soundTime > 97.2 && soundTime < 97.6));


  let zweitstimme3 =
    ((soundTime > 40 && soundTime < 40.4) ||
    (soundTime > 43.2 && soundTime < 43.6) ||
    (soundTime > 46.4 && soundTime < 46.8) || 
  // zweifte Hälfte
    (soundTime > 91.2 && soundTime < 91.6) ||
    (soundTime > 94.4 && soundTime < 94.8) ||
    (soundTime > 97.6 && soundTime < 98));


  let zweitstimme4 =
    ((soundTime > 40.4 && soundTime < 40.8) ||
    (soundTime > 43.6 && soundTime < 44) ||
    (soundTime > 46.8 && soundTime < 47.2) ||
    (soundTime > 48.4 && soundTime < 48.8) ||
    (soundTime > 49.2 && soundTime < 49.6) || 
  // zweifte Hälfte
    (soundTime > 91.6 && soundTime < 92) ||
    (soundTime > 94.8 && soundTime < 95.2) ||
    (soundTime > 98 && soundTime < 98.4) ||
    (soundTime > 99.6 && soundTime < 100) ||
    (soundTime > 100.4 && soundTime < 100.8));


  let zweitstimme5 =
    ((soundTime > 40.8 && soundTime < 41.6) ||
    (soundTime > 44 && soundTime < 44.8) ||
    (soundTime > 47.2 && soundTime < 48) ||
    (soundTime > 48.8 && soundTime < 49.2) ||
    (soundTime > 49.6 && soundTime < 50.4) || 
  // zweifte Hälfte 
    (soundTime > 92 && soundTime < 92.8) ||
    (soundTime > 95.2 && soundTime < 96) ||
    (soundTime > 98.4 && soundTime < 99.2) ||
    (soundTime > 100 && soundTime < 100.4) || 
    (soundTime > 100.8 && soundTime < 101.6));





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
    (soundTime > 75.2 && soundTime < 76));
  
    // zweite Hälfte
  let bassZweiteHaelfte =
    ((soundTime > 102.3 && soundTime < 103.1) ||
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
    (soundTime > 53 && soundTime < 54.4) ||
    (soundTime > 55 && soundTime < 56) ||
    (soundTime > 56.2 && soundTime < 57.6) ||
    (soundTime > 58 && soundTime < 59.2) ||
    (soundTime > 59.6 && soundTime < 60.6) ||
    (soundTime > 61.4 && soundTime < 62.4) ||
    (soundTime > 62.6 && soundTime < 63.8) ||
    (soundTime > 64.4 && soundTime < 65.6) ||
    (soundTime > 66 && soundTime < 67) ||
    (soundTime > 67.8 && soundTime < 68.8) ||
    (soundTime > 69 && soundTime < 70.2) ||
    (soundTime > 70.8 && soundTime < 72) ||
    (soundTime > 72.4 && soundTime < 73.4) ||
    (soundTime > 74.2 && soundTime < 75.2) ||
    (soundTime > 75.4 && soundTime < 77.1));

  // zweite Hälfte
  let gitarreZweiteHaelfte =
    ((soundTime > 103.1 && soundTime < 103.9) || 
    (soundTime > 104.1 && soundTime < 105.5) ||
    (soundTime > 106.1 && soundTime < 107.1) ||
    (soundTime > 107.3 && soundTime < 108.7) ||
    (soundTime > 109.5 && soundTime < 110.5) ||
    (soundTime > 110.7 && soundTime < 111.9) ||
    (soundTime > 112.7 && soundTime < 113.7) ||
    (soundTime > 113.9 && soundTime < 115.1) ||
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
      (soundTime > 96.4 && soundTime < 96.8) ||
      (soundTime > 98 && soundTime < 98.4) ||
// drittes Mal
      (soundTime > 116.3 && soundTime < 116.7) ||
      (soundTime > 117.9 && soundTime < 118.3) ||
      (soundTime > 119.5 && soundTime < 119.9) ||
      (soundTime > 121.1 && soundTime < 121.5) ||
      (soundTime > 122.7 && soundTime < 123.1) ||
      (soundTime > 124.3 && soundTime < 124.7) ||
      (soundTime > 125.9 && soundTime < 126.3) ||
      (soundTime > 127.5 && soundTime < 127.9));


  ///// VARIABLEN FÜR CAMERA DYNAMIK /////
  let chorus =
      ((soundTime > 51 && soundTime < 51.1) ||
      (soundTime > 102.3 && soundTime < 102.4));



  ///// AB HIER DRAW FUNKTIONEN /////

  if (document.documentElement.className === 'DARK'){
    background(0);
    if (strokesColor.value() == '#000000'){
      strokesColor.value('#ffffff')
    }
    if (planetColor.value() == '#000000'){
      planetColor.value('#ffffff')
    }
    }
  else if (document.documentElement.className === 'LIGHT'){
    background(255);
    if (strokesColor.value() == '#ffffff'){
      strokesColor.value('#000000')
    }
    if (planetColor.value() == '#ffffff'){
      planetColor.value('#000000')
    }
  }
   




  for (let i = 0; i < stars.length; i++) {
    stars[i].twinkle();
    stars[i].showStar();
  }


  orbitControl(3,3,0.1); 


  rotateX(millis() / -29982);
  rotateY(millis() / 32285);
  rotateZ(millis() / -31285);

  animateSun();


  // Animation Frauenstimme (Melodie)
  if (frauenstimmeMelodie1 && clap){
    push();
    stroke(planetColor.color());
    strokeWeight(6);
    animateRing1();
    pop();
    push();
    stroke(strokesColor.color());
    strokeWeight(2.5)
    animateRing2();
    strokeWeight(3)
    animateRing3();
    strokeWeight(3.5)
    animateRing4();
    strokeWeight(4)
    animateRing5();
    strokeWeight(4.5)
    animateRing6();
    strokeWeight(5)
    animateRing7();
    strokeWeight(5.5)
    animateRing8();
    pop();
  } else if (frauenstimmeMelodie1){
    push();
    stroke(strokesColor.color());
    strokeWeight(2);
    animateRing1();
    pop();
  }

  if (frauenstimmeMelodie2 && clap){
    push();
    stroke(planetColor.color());
    strokeWeight(6.5);
    animateRing2();
    pop();
    push();
    stroke(strokesColor.color());
    strokeWeight(2)
    animateRing1();
    strokeWeight(3)
    animateRing3();
    strokeWeight(3.5)
    animateRing4();
    strokeWeight(4)
    animateRing5();
    strokeWeight(4.5)
    animateRing6();
    strokeWeight(5)
    animateRing7();
    strokeWeight(5.5)
    animateRing8();
    pop();
  } else if (frauenstimmeMelodie2){
    stroke(strokesColor.color());
    strokeWeight(2.5);
    animateRing2();
  }

  if ((frauenstimmeMelodie3 && bassdrum) || (frauenstimmeMelodie3 && clap)){
    stroke(planetColor.color());
    strokeWeight(7);
    animateRing3();
  } else if (frauenstimmeMelodie3){
    stroke(strokesColor.color());
    strokeWeight(3);
    animateRing3();
  }

  if ((frauenstimmeMelodie4 && bassdrum) || (frauenstimmeMelodie4 && clap)){
    stroke(planetColor.color());
    strokeWeight(7.5);
    animateRing4();
  } else if (frauenstimmeMelodie4){
    stroke(strokesColor.color());
    strokeWeight(3.5);
    animateRing4();
  }

  if (frauenstimmeMelodie5 && clap){
    push();
    stroke(planetColor.color());
    strokeWeight(8);
    animateRing6();
    pop();
    push();
    stroke(strokesColor.color());
    strokeWeight(2)
    animateRing1();
    strokeWeight(2.5)
    animateRing2();
    strokeWeight(3)
    animateRing3();
    strokeWeight(3.5)
    animateRing4();
    strokeWeight(4)
    animateRing5();
    strokeWeight(5)
    animateRing7();
    strokeWeight(5.5)
    animateRing8();
    pop();
  } else if (frauenstimmeMelodie5){
    stroke(strokesColor.color());
    strokeWeight(4);
    animateRing6();
  }





  // Animation Erststimme
  if (erststimme1){
    animatePlanet3();
  } 

  if (erststimme2){
    animatePlanet4();
  } 

  if (erststimme3){
    animatePlanet5();
  } 

  if (erststimme4){
    animatePlanet6();
  } 

  if (erststimme5){
    animatePlanet8();
  } 


  // Animation Zweitstimme
  if (zweitstimme1){
    animatePlanet1();
  }

  if (zweitstimme2){
    animatePlanet2();
  }

  if (zweitstimme3){
    animatePlanet3();
  }

  if (zweitstimme4){
    animatePlanet4();
  }

  if (zweitstimme5){
    animatePlanet6();
  }



  // Animation Stimme (kurz)
  // if (frauenstimmeKurz){
  //   animateCone();
  // }


  // Animation Frauenstimme (Akzente)
  if (frauenstimmeAkzente){
    animateAkzente();
  }


  // Animation Bass
  if (bass){
    sonnenstrahlen();
    animateBassRings();
  }

  if (bassZweiteHaelfte){
    sonnenstrahlen2();
    animateBassRings();
  }


  // Animation Clap
  if ((clap &! gitarre) && (clap &! frauenstimmeMelodie1) && (clap &! frauenstimmeMelodie2) && (clap &! frauenstimmeMelodie5)){
    stroke(strokesColor.color());
    strokeWeight(2)
    animateRing1();
    strokeWeight(2.5)
    animateRing2();
    strokeWeight(3)
    animateRing3();
    strokeWeight(3.5)
    animateRing4();
    strokeWeight(4)
    animateRing5();
    strokeWeight(4.5)
    animateRing6();
    strokeWeight(5)
    animateRing7();
    strokeWeight(5.5)
    animateRing8();
    // animatePlatzhalter1();
  }


  // Animation Bassdrum
  if (bassdrum){
    // animatePlatzhalter2();
    animateBassDrum();

  }



  // Animation Gitarre
  if (gitarre && clap){
      animateOrbit();
      animatePlanet1();
      animatePlanet2();
      animatePlanet3();
      animatePlanet4();
      animatePlanet5();
      animatePlanet6();
      animatePlanet7();
      animatePlanet8();
      stroke(strokesColor.color());
      strokeWeight(3);
      animateRing8();

      /// VERTIAKLE LINIEN ///
    
      push();
      rotateZ(300);
      translate(-width/3.8, -height/2)
      ellipse(x1(t),y1(t),6,6);
      ellipse(x2(t),y2(t),6,6);
      strokeWeight(2);
      stroke(strokesColor.color());
      for(let i=0;i<=m;i++){
      let tt = 0.8*i/m*1.5;
     
      let x = lerp(x1(t - delay_factor*tt),x2(t - delay_factor*(1-tt)),tt);
      let y = lerp(y1(t - delay_factor*tt),y2(t - delay_factor*(1-tt)),tt);
     
      point(x,y);
      }
      pop();


      push();
      rotateZ(300);
      rotateX(180);
      translate(-width/3.8, -height/2)
      ellipse(x1(t),y1(t),6,6);
      ellipse(x2(t),y2(t),6,6);
      strokeWeight(2);
      stroke(strokesColor.color());
      for(let i=0;i<=m;i++){
      let tt = 0.8*i/m*1.5;
     
      let x = lerp(x1(t - delay_factor*tt),x2(t - delay_factor*(1-tt)),tt);
      let y = lerp(y1(t - delay_factor*tt),y2(t - delay_factor*(1-tt)),tt);
     
      point(x,y);
      }
      pop();
  } else if (gitarre){
    animateOrbit();
    animatePlanet1();
    animatePlanet2();
    animatePlanet3();
    animatePlanet4();
    animatePlanet5();
    animatePlanet6();
    animatePlanet7();
    animatePlanet8();
    stroke(strokesColor.color());
    strokeWeight(3);

    /// VERTIAKLE LINIEN ///
  
    push();
    rotateZ(300);
    translate(-width/3.8, -height/2)
    ellipse(x1(t),y1(t),6,6);
    ellipse(x2(t),y2(t),6,6);
    strokeWeight(2);
    stroke(strokesColor.color());
    for(let i=0;i<=m;i++){
    let tt = 0.8*i/m*1.5;
   
    let x = lerp(x1(t - delay_factor*tt),x2(t - delay_factor*(1-tt)),tt);
    let y = lerp(y1(t - delay_factor*tt),y2(t - delay_factor*(1-tt)),tt);
   
    point(x,y);
    }
    pop();


    push();
    rotateZ(300);
    rotateX(180);
    translate(-width/3.8, -height/2)
    ellipse(x1(t),y1(t),6,6);
    ellipse(x2(t),y2(t),6,6);
    strokeWeight(2);
    stroke(strokesColor.color());
    for(let i=0;i<=m;i++){
    let tt = 0.8*i/m*1.5;
   
    let x = lerp(x1(t - delay_factor*tt),x2(t - delay_factor*(1-tt)),tt);
    let y = lerp(y1(t - delay_factor*tt),y2(t - delay_factor*(1-tt)),tt);
   
    point(x,y);
    }
    pop();
  } 
  
  else if (gitarreZweiteHaelfte) {
    animateOrbit();
    animatePlanet1();
    animatePlanet2();
    animatePlanet3();
    animatePlanet4();
    animatePlanet5();
    animatePlanet6();
    animatePlanet7();
    animatePlanet8();
    stroke(strokesColor.color());
    strokeWeight(3);

    /// VERTIAKLE LINIEN ///
  
    push();
    rotateZ(300);
    translate(-width/3.8, -height/2)
    ellipse(x1(t),y1(t),6,6);
    ellipse(x2(t),y2(t),6,6);
    strokeWeight(2);
    stroke(strokesColor.color());
    for(let i=0;i<=m;i++){
    let tt = 2.5*i/m*0.4;
   
    let x = lerp(x1(t - delay_factor*tt*1.5),x2(t - delay_factor*(1-tt)),tt);
    let y = lerp(y1(t - delay_factor*tt*1.5),y2(t - delay_factor*(1-tt)),tt);
   
    point(x,y);
    }
    pop();


    push();
    rotateZ(300);
    rotateX(180);
    translate(-width/3.8, -height/2)
    ellipse(x1(t),y1(t),6,6);
    ellipse(x2(t),y2(t),6,6);
    strokeWeight(2);
    stroke(strokesColor.color());
    for(let i=0;i<=m;i++){
    let tt = 2.5*i/m*0.4;
   
    let x = lerp(x1(t - delay_factor*tt/3),x2(t - delay_factor*(1-tt)),tt);
    let y = lerp(y1(t - delay_factor*tt/3),y2(t - delay_factor*(1-tt)),tt);
   
    point(x,y);
    }
    pop();
  }

/// HORIZONTALE LINIEN ///

      // push();
      // rotateX(80);
      
      // translate(-width/2.1, -height/2)
      // ellipse(x1(t),y1(t),6,6);
      // ellipse(x2(t),y2(t),6,6);
      // strokeWeight(0.5);
      // stroke(strokesColor.color());
      // for(let i=0;i<=m;i++){
      // let tt = 1.8*i/m/1.5;
     
      // let x = lerp(x1(t - delay_factor*tt),x2(t - delay_factor*(1-tt)),tt);
      // let y = lerp(y1(t - delay_factor*tt),y2(t - delay_factor*(1-tt)),tt);
     
      // point(x,y);
      // }
      // pop();

      // push();
      // rotateX(80);
      // rotateZ(90);
      // translate(-width/2.1, -height/2)
      // ellipse(x1(t),y1(t),6,6);
      // ellipse(x2(t),y2(t),6,6);
      // strokeWeight(0.5);
      // stroke(strokesColor.color());
      // for(let i=0;i<=m;i++){
      // let tt = 1.8*i/m/1.5;
     
      // let x = lerp(x1(t - delay_factor*tt),x2(t - delay_factor*(1-tt)),tt);
      // let y = lerp(y1(t - delay_factor*tt),y2(t - delay_factor*(1-tt)),tt);
     
      // point(x,y);
      // }
      // pop();

      // push();
      // rotateX(-80);
      // rotateZ(-90);
      // translate(-width/2.1, -height/2)
      // ellipse(x1(t),y1(t),6,6);
      // ellipse(x2(t),y2(t),6,6);
      // strokeWeight(0.5);
      // stroke(strokesColor.color());
      // for(let i=0;i<=m;i++){
      // let tt = 1.8*i/m/1.5;
     
      // let x = lerp(x1(t - delay_factor*tt),x2(t - delay_factor*(1-tt)),tt);
      // let y = lerp(y1(t - delay_factor*tt),y2(t - delay_factor*(1-tt)),tt);
     
      // point(x,y);
      // }
      // pop();


      // push();
      // rotateX(-80);
      // rotateZ(235);
      // translate(-width/2.1, -height/2)
      // ellipse(x1(t),y1(t),6,6);
      // ellipse(x2(t),y2(t),6,6);
      // strokeWeight(0.5);
      // stroke(strokesColor.color());
      // for(let i=0;i<=m;i++){
      // let tt = 1.8*i/m/1.5;
     
      // let x = lerp(x1(t - delay_factor*tt),x2(t - delay_factor*(1-tt)),tt);
      // let y = lerp(y1(t - delay_factor*tt),y2(t - delay_factor*(1-tt)),tt);
     
      // point(x,y);
      // }
      // pop();

  

 // Animation Hihats
 push()

 rotateX(millis() / 800);
 rotateY(millis() / 1000);

  if (hihat1){
    animateComet1();
  }

  if (hihat2){
    animateComet2();
  }


  if (hihat3){
    animateComet3();
  }


  if (hihat4){
    animateComet4();
  }
  pop();





  // Animation Camera
  if (chorus){
    camera(0, 0, (height/0.8) / tan(PI/6), 0, 0, 0, 0, 1, 0)
  }
  // else if (soundTime > 13.6 && soundTime < 13.9){
  //   camera(0, 0, (height/0.6) / tan(PI/6), 0, 0, 0, 0, 1, 0)
  // }
  // else if (soundTime > 26.4 && soundTime < 26.6){
  //   camera(0, 0, (height/0.7) / tan(PI/6), 0, 0, 0, 0, 1, 0)
  // }
  // else if (soundTime > 39.2 && soundTime < 39.4){
  //   camera(0, 0, (height/0.8) / tan(PI/6), 0, 0, 0, 0, 1, 0)
  // }
    
    
    
  
};










///// FUNKTIONEN FÜR ANIMATIONEN /////

function sonnenstrahlen() {
  for(let k=random(8,12); k>0;k--){
  push()
  let radius = width / k;

  rotateX(millis() / 2000);
  rotateY(millis() / 2400);
  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      push();
      
      // Anzahl der Objekte
      let a = (j / 10) * PI;
      let b = (i / 10) * PI;
      translate(
        // Anzahl der Ringe
        sin(4 * a) * radius * sin(b),
        (cos(b) * radius) / 1,
        cos(4 * a) * radius * sin(b)
      );
      stroke(planetColor.color());
      noFill();
      strokeWeight(1);
      box(6,14,random(2,4));
    pop();
    }
  }
  pop()
}
};


function sonnenstrahlen2() {
  for(let k=random(8,12); k>0;k--){
  push()
  let radius = width / k;

  rotateX(millis() / 2000);
  rotateY(millis() / 2400);
  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      push();
      
      // Anzahl der Objekte
      let a = (j / 10) * PI;
      let b = (i / 10) * PI;
      translate(
        // Anzahl der Ringe
        sin(4 * a) * radius * sin(b),
        (cos(b) * radius) / 1,
        cos(4 * a) * radius * sin(b)
      );
      stroke(strokesColor.color());
      noFill();
      strokeWeight(0.5);
      box(random(16,64),4,4);
    pop();
    }
  }
  pop()
}
};





function animateBox() {
  push();
  translate(300,0,0)
  rotateX(millis() / 2000);
  rotateY(millis() / 1000);
  noFill();
  stroke(strokesColor.color());
  box(10,75);
  pop();
}





function animateBox2() {
  push();
  translate(0,-300,0)
  rotateX(millis() / 2000);
  rotateY(millis() / 1000);
  noFill();
  stroke(strokesColor.color());
  box(75,10);
  pop();
}





function animateBox3() {
  push();
  translate(0,300,0)
  rotateX(millis() / 2000);
  rotateY(millis() / 1000);
  noFill();
  stroke(strokesColor.color());
  box(50,50);
  pop();
}





function animatePlatzhalter1() {
  push();
  rotateX(millis() / 2000);
  rotateY(millis() / 1000);
  noFill();
  stroke(strokesColor.color());
  strokeWeight(0.5);
  sphere(85,3,24);
  pop();
}





function animatePlatzhalter2() {
  push();
  rotateX(millis() / 2000);
  rotateY(millis() / 1000);
  noFill();
  stroke(strokesColor.color());
  strokeWeight(0.5);
  sphere(80,5,24);
  pop();
}





function animateAkzente() {
  push();
  noFill();
  stroke(planetColor.color());
  strokeWeight(6);
  scale(7);
  box(random(180,184),random(180,184));
  pop();
}




function animateOrbit() {
  let radius = width*1.3; 
  let menge = 28;
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
  
        stroke(strokesColor.color())
        strokeWeight(3);
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
  stroke(strokesColor.color());
  cone(45,75);
  pop();
}




function animateComet1() {
  push();
  translate(0,-250,350)
  stroke(planetStrokeColor);
  noStroke();
  fill(strokesColor.color());
  strokeWeight(0.3);
  sphere(22,6,24);
  pop();
  
}




function animateComet2() {
  push();
  translate(-250,-250,-50)
  stroke(planetStrokeColor);
  noStroke();
  fill(strokesColor.color());
  strokeWeight(0.3);
  sphere(19,4,24);
  pop();
}




function animateComet3() {
  push();
  translate(0,-150,-350)
  stroke(planetStrokeColor);
  noStroke();
  fill(strokesColor.color());
  strokeWeight(0.3);
  sphere(19,4,24);
  pop();
}




function animateComet4() {
  push();
  translate(250,-250,-500)
  stroke(planetStrokeColor);
  noStroke();
  fill(strokesColor.color());
  strokeWeight(0.3);
  sphere(19,4,24);
  pop();
}








// PLANETEN

function animateSun(){
  push();
  
  rotateY(millis() / 10000);
  strokeWeight(0.3);
  stroke(planetStrokeColor);
  noStroke();
  fill(planetColor.color());
  sphere(35,24,24);
  pop();
}

function animatePlanet1(){
  push();
  rotateY(millis() / 600);
  translate(60,0,0);
  strokeWeight(0.3);
  stroke(planetStrokeColor);
  noStroke();
  fill(planetColor.color());
  sphere(10,24,24);
  pop();
};

function animatePlanet2(){
  push();
  rotateY(millis() / 900);
  translate(105,0,0);;
  strokeWeight(0.4);
  stroke(planetStrokeColor);
  noStroke();
  fill(planetColor.color());
  sphere(20,24,24);
  pop();
}

function animatePlanet3(){
  push();
  rotateY(millis() / 1350);
  translate(165,0,0);
  strokeWeight(0.4);
  stroke(planetStrokeColor);
  noStroke();
  fill(planetColor.color());
  sphere(22,24,24);
  pop();
}

function animatePlanet4(){
  push();
  rotateY(millis() / 2025);
  translate(222,0,0);
  stroke(planetStrokeColor);
  noStroke();
  strokeWeight(0.5);
  fill(planetColor.color());
  sphere(18,24,24);
  pop();
}

function animatePlanet5(){
  push();
  rotateY(millis() / 3038);
  translate(305,0,0);
  strokeWeight(0.5);
  stroke(planetStrokeColor);
  noStroke();
  fill(planetColor.color());
  sphere(44,24,24);
  pop();
}

function animatePlanet6(){
  push();
  rotateY(millis() / 4556);
  translate(415,0,0);
  strokeWeight(0.5);
  stroke(planetStrokeColor);
  noStroke();
  fill(planetColor.color());
  sphere(36,24,24);
    push();
    rotateX(1.6);
    rotateY(millis() / 4556);
    torus(52,6,24,2);
    pop();
  pop();
}
  
function animatePlanet7(){
  push();
  rotateY(millis() / 6834);
  translate(510,0,0);
  strokeWeight(0.5);
  stroke(planetStrokeColor);
  noStroke();
  fill(planetColor.color());
  sphere(25,24,24);
  pop();
}

function animatePlanet8(){
  push();
  rotateY(millis() / 10250);
  translate(615,0,0);
  strokeWeight(0.5);
  stroke(planetStrokeColor);
  noStroke();
  fill(planetColor.color());
  sphere(22,24,24);
  pop();
}







// Ringe des Sonnensystems (Reihenfolge von Innen nach Außen)
function animateRing1(){
  push();
  translate(random(0,2),0,random(0,2));
  rotateX(1.6);
  noFill();
  ellipse(0,0,120,120,44);
  pop();
}

function animateRing2(){
  push();
  translate(random(0,2),0,random(0,2));
  rotateX(1.6);
  noFill();
  ellipse(0,0,210,210,44);
  pop();
}

function animateRing3(){
  push();
  translate(random(0,2),0,random(0,2));
  rotateX(1.6);
  noFill();
  ellipse(0,0,330,330,46);
  pop();
}

function animateRing4(){
  push();
  translate(random(0,2),0,random(0,2));
  rotateX(1.6);
  noFill();
  ellipse(0,0,440,440,48);
  pop();
}

function animateRing5(){
  push();
  translate(random(0,2),0,random(0,2));
  rotateX(1.6);
  noFill();
  ellipse(0,0,620,620,50);
  pop();
}

function animateRing6(){
  push();
  translate(random(0,2),0,random(0,2));
  rotateX(1.6);
  noFill();
  ellipse(0,0,830,830,50);
  pop();
}

function animateRing7(){
  push();
  translate(random(0,2),0,random(0,2));
  rotateX(1.6);
  noFill();
  ellipse(0,0,1030,1030,50);
  pop();
}

function animateRing8(){
  push();
  translate(random(0,2),0,random(0,2));
  rotateX(1.6);
  noFill();
  ellipse(0,0,1230,1230,50);
  pop();
}



function animateBassRings(){
  stroke(strokesColor.color());
  push();
  translate(random(0,5),random(-20,-30),random(0,5));
  animatePlanet1();
  strokeWeight(2);
  animateRing1();

  translate(random(0,5),random(-40,-50),random(0,5));
  animatePlanet2();
  strokeWeight(2.5);
  animateRing2();


  translate(random(0,5),random(-60,-70),random(0,5));
  animatePlanet3();
  strokeWeight(3);
  animateRing3();
  

  translate(random(0,5),random(-80,-90),random(0,5));
  animatePlanet4();
  strokeWeight(3.5);
  animateRing4();
  

  translate(random(0,5),random(-100,-110),random(0,5));
  animatePlanet5();
  strokeWeight(4);
  animateRing5();
  

  translate(random(0,5),random(-120,-130),random(0,5));
  animatePlanet6();
  strokeWeight(4.5);
  animateRing6();
  

  translate(random(0,5),random(-140,-150),random(0,5));
  animatePlanet7();
  strokeWeight(5);
  animateRing7();
  

  translate(random(0,5),random(-160,-170),random(0,5));
  animatePlanet8();
  strokeWeight(5.5);
  animateRing8();
  pop();
}



function animateBassDrum(){
  stroke(strokesColor.color());
  push();
  strokeWeight(2)
  translate(random(0,2),random(-20,-22),random(0,2));
  // animatePlanet1();
  animateRing1();
  strokeWeight(2.5)
  translate(random(0,2),random(-40,-42),random(0,2));
  // animatePlanet2();
  animateRing2();
  strokeWeight(3)
  translate(random(0,2),random(-60,-62),random(0,2));
  // animatePlanet3();
  animateRing3();
  strokeWeight(3.5)
  translate(random(0,2),random(-80,-82),random(0,2));
  // animatePlanet4();
  animateRing4();
  strokeWeight(4)
  translate(random(0,2),random(-100,-102),random(0,2));
  // animatePlanet5();
  animateRing5();
  strokeWeight(4.5)
  translate(random(0,2),random(-120,-122),random(0,2));
  // animatePlanet6();
  animateRing6();
  strokeWeight(5)
  translate(random(0,2),random(-140,-142),random(0,2));
  // animatePlanet7();
  animateRing7();
  strokeWeight(5.5)
  translate(random(0,2),random(-160,-162),random(0,2));
  // animatePlanet8();
  animateRing8();
  pop();
}



function drawGuitarOutline() {
  stroke(strokesColor.color());
  strokeWeight(4);
  point(-100, -350);
  point(-125, -135);
  point(-200, 50);
  point(-30, 290);
  point(185, 180);
  point(125, -75);
  point(175,-250);
  point(125,-275);
  point(50,-280);

  strokeWeight(2);
  
  noFill();
  beginShape();
  curveVertex(200, -500);
  curveVertex(-100, -350);
  curveVertex(-175, -250);
  curveVertex(-125, -135);
  curveVertex(-135, -70);
  curveVertex(-200, 50);
  curveVertex(-170, 200)
  curveVertex(-30, 290);
  curveVertex(90, 270);
  curveVertex(185, 180);
  curveVertex(195, 45);
  curveVertex(125, -75);
  curveVertex(125, -155);
  curveVertex(175,-250);
  curveVertex(160,-280);
  curveVertex(125,-275);
  curveVertex(80,-260);
  curveVertex(50,-280);
  curveVertex(50,-280);
  endShape();
  }





function drawGuitarStrings (){
  stroke(strokesColor.color())
  strokeWeight(2);
  line(-24,-100,0,-24,-600,0);
  strokeWeight(1.8);
  line(-14.4,-100,0,-14.4,-600,0);
  strokeWeight(1.6);
  line(-4.8,-100,0,-4.8,-600,0);
  strokeWeight(1.4);
  line(4.8,-100,0,4.8,-600,0);
  strokeWeight(1.2);
  line(14.4,-100,0,14.4,-600,0);
  strokeWeight(1);
  line(24,-100,0,24,-600,0);
}





function drawGuitarAnimation (){

}

  //Funktionen für die Noise-Fäden
  function x1(t){
    let seed = 1000;
    return 0.25*width  + 300*simplex.noise2D(seed + motion_radius*cos(TWO_PI*t),motion_radius*sin(TWO_PI*t));
  }

  function y1(t){
    let seed = 1500;
    return 0.5*height + 300*simplex.noise2D(seed + motion_radius*cos(TWO_PI*t),motion_radius*sin(TWO_PI*t));
  }
 
  function x2(t){
    return 0.75*width + 100*cos(2*TWO_PI*t);
  }
  function y2(t){
    return 0.5*height + 100*sin(2*TWO_PI*t);
  }









///// CANVAS SIZE FUNKTION FÜR FULLSCREEN /////

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
};








///// FUNKTION ZUM EIN- UND AUSBLENDEN DES INFOTEXTS //

function toggleInfo() {
  let leftDiv = document.getElementById("leftDiv");
  let descriptiveText = document.getElementById("descriptiveText");
  if (leftDiv.style.opacity == "100") {
    leftDiv.style.opacity = "0";
    descriptiveText.style.opacity = "0";
    // audioSlider.style('opacity', '0');
    // sliderSpan.style('opacity', '0');
  } else {
    leftDiv.style.opacity = "100";
    descriptiveText.style.opacity = "100";
    audioSlider.style('opacity', '100');
    sliderSpan.style('opacity', '100');
  }
}







///// AUDIO FUNKTIONEN /////

function playSong(){
  soundFile.play();
  // soundFile.loop();
};

function keyPressed(){
  if ((key == ' ') &! soundFile.isPlaying()){
    soundFile.play();
  }
  else if ((key == ' ') && soundFile.isPlaying()){
    soundFile.pause();
}}

function jumpSong(){
  soundFile.jump(100);
  // soundFile.loop();
};

function pauseSong(){
  soundFile.pause();
};

function restartSong(){
  if(soundFile.isPlaying() == true){
    soundFile.jump(0);
  } else {
    soundFile.play();
    soundFile.jump(0);
  }
};

function sliderJumpSong(){
  if(soundFile.isPlaying() == true){
  soundFile.pause();
  soundFile.jump(audioSlider.value());
  } else {
  soundFile.play();
  soundFile.jump(audioSlider.value());
  }
};

function sliderDragSong(){
  if(soundFile.isPlaying() == true){
  soundFile.pause();
  soundFile.jump(audioSlider.value());
  } else {
  soundFile.jump(audioSlider.value());
  }
};









///// STARS GENERATION OBJECT /////

class Star {
  constructor(tx, ty, tz, tc, tf, td) {
    this.x = tx;
    this.y = ty;
    this.z = tz;
    this.c = tc;
    this.f = tf;
    this.down = td;
  }

  showStar() {
    stroke(this.c)
    strokeWeight(2);
    point(this.x, this.y, this.z);
  }

  twinkle() {
    if (this.c >= 255) {
      this.down = true;
    }
    if (this.c <= 0) {
      this.down = false;
    }

    if (this.down) {
      this.c -= this.f
    } else {
      this.c += this.f
    }
  }
}




///// FUNKTION ZUR KONVERTIERUNG VON SEKUNDEN ZU MM:SS
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}





function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'DARK' ? 'LIGHT' : 'DARK';
  root.className = newTheme;
  
  document.querySelector('.theme-name').textContent = newTheme;
}