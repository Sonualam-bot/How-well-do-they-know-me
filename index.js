var readLineSync = require('readline-sync');


var userName = readLineSync.question("What's Your Name?");

console.log("welcome "+ userName + " to Do YOU KNOW SONU?");

// data of high score
var highScores = [
  {
    name: "Monu",
    score: 3,
  },

  {
    name: "Gonu",
    score: 2,
  },
]

var score = 0;

function play(question, answer){
  var userAnswer = readLineSync.question(question);

  if (userAnswer === answer){
    console.log("You were right!");
    score = score + 1;
  }else{
    console.log("You were wrong!");
    score = score - 1;
  }
  console.log("current score: ", score);
  console.log("-------------")
}

play("where do i live?", "Diyun");
play("where do i study? ", "College");
play("what do i play? ", "Football");


// console.log("Your score is ", score);

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

showScores();