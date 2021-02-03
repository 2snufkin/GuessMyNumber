 'use strict';
/*
@Generate a random number
making the site reactive:
1. the check button  => "btn check"
@A. add listener
@B. comp re the number with the generated one
C.Take a decision:

@if it's the correct number:
@start guessing -> you've guessed it right   => ."message"
@compare the current score with the highest score. DTM bigger? this is the new Highscore   => class="highscore"
@put the number in the number field  => class="number"
@RESET PROCESS
@reset the score to 20  => "score"
@the text to start guessing
@empty the input box => guess
change the beckgorund color

@if its not the correct number
@take of one of the score: score--
@show a message if it's too low or too high
@empty the input box

 */


/**-------------------------------------Methologie---------------------------------------------------------------

1. create all the var that you need.
2. create your dynamique DOM var = it will return an Element!!! if a cast shold be done - do it now
3.and arrange them top to bottom as they appear in the html page
3.Add listners : Element.addEventListner (Event Name, reactionFunction ) ==> (whenToDo, whatToDo)
!!! a function is a value, and as such we can pass it as an argument to another function like we pass a string or a number....
*/


 /*
SET actual text => Element.textContent = string;
GET the actual text from an input element => Element.value
SET the text inside   an input element => Element.value = string || number
CSS: changing a style of an element => Elment.style.propertyName  = 'string'(background-color -> backgroundColor)
  */
 //1
let highscore = 0;
let score =20;
let generatedNumber = Math.trunc(Math.random()*20 + 1);
console.log(generatedNumber);

//2
 let againBt = document.querySelector(".again")//again button
 let checkBt = document.querySelector(".check")//check button
 let number = document.querySelector(".number"); // the generated number
 let message = document.querySelector(".message"); // the output regarding the guess
 let scoreEl = document.querySelector(".score");
 let highscoreEl = document.querySelector(".highscore");
 let guess = document.querySelector(".guess");
 let background = document.querySelector("body")
 //3
 checkBt.addEventListener("click", ()=> {
  var guess = Number(document.querySelector(".guess").value)// the user input
   if (!guess) {
   message.textContent = 'please enter a number';
   message.style.color = 'red';

  } else if (guess === generatedNumber) {
   message.textContent = 'you\'ve guessed it right'
   background.style.backgroundColor = '#2596be';
   number.style.width = '45rem';
   highScore();

  } else {
    if (score> 1) {
     guess > generatedNumber ? message.textContent = "it's to high" : message.textContent = "it's to low";
     score--;
     scoreEl.textContent = score;


    } else {
     message.textContent = "you lost buddy";
     scoreEl.textContent = '0';
    }
  }

  });

 againBt.addEventListener('click', () => reset());


 function reset(){

  generatedNumber = Math.trunc(Math.random()*20 + 1);
  console.log(generatedNumber);

  score = 20;
  scoreEl.textContent = score;
   console.log(`this is the socre ${score}`)
  message.textContent = "Start guessing...";
  background.style.backgroundColor = '#40c4c1';
  number.style.width = '15rem';
  number.textContent = '?';
  guess.value='';

 }

 function highScore(){
  if (score > highscore) {
   highscore = score;
   highscoreEl.textContent = score;
   number.textContent = generatedNumber;

  }
   }


