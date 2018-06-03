
var game_start = document.querySelector('#game-start');
var start_button = document.querySelector('#game-start button');
var time = document.querySelector('.time span');
var score = document.querySelector('strong');
var scoreNumber = score.textContent;
var counter = time.textContent;
var game_over = document.querySelector('#game-over');
var restart = document.querySelector('.restart');
var images = document.querySelectorAll('.img');
var find_country = document.querySelector('h2');
var clickImage = document.querySelectorAll('.flag');
var lives = document.querySelectorAll('.lives img');
var gameMain = document.querySelector('#game');


start_button.addEventListener('click', function() {
  game_start.classList.remove('is-open');
  function startTime(){
    if (counter > 0){
      counter--;
      time.textContent = counter;
    } else {
      game_over.classList.add('is-open');
    }
  }
  clearInterval();
  setInterval(startTime, 1000);
});
restart.addEventListener('click', function() {
  gameMain.classList.add('is-open');

  counter = 20;
});
// là on declare nos variables glabalement
var pickUp, suffix, chooseName, countryName

// Here I've created a function that generate the four flags
// the variable pickUp will pick up four flags randomely
//and the suffix will get the code and replace the src

 function showingFlags() {
  for ( var i = 0; i < 4; i++ ){
   pickUp = Math.floor(Math.random() * flags.length) +1;
   suffix = flags[pickUp].code;

   images[i].setAttribute('src', 'flags/' + suffix + '.svg');
   images[i].dataset.flagCountry = flags[pickUp].name
   }
   chooseName = Math.floor(Math.random() * 4)
   countryName = images[chooseName].dataset.flagCountry
   find_country.innerHTML = countryName;

  for (let i = 0; i < clickImage.length; i++) {
    clickImage[i].addEventListener('click', function () {
        if (clickImage[i].firstChild.dataset.flagCountry == countryName ) {
          scoreNumber ++;
          score.textContent = scoreNumber;
          showingFlags();
        }else if (clickImage[i].firstChild.dataset.flagCountry || countryName ){
          clickImage[i].classList.add('is-active');
          lives[i].classList.add('is-active');
        }
      });clickImage[i].classList.remove('is-active');
     }
    }
  showingFlags();
