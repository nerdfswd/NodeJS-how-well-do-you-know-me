var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.blue.bgRed.bold("Hey!! It's a DO YOU KNOW ME Quiz. Lets dive into it & see how well do you know me.."));

var userName = readlineSync.question(chalk.yellow.bold("Hi! What's your name?"));

console.log(chalk.blue.bold("Hai" + " "+userName + "! Good to have you here!"));

console.log(chalk.blue.bold("Okay! Let's move into game, "+userName +"!"));
console.log("----------------------------------------------");
console.log(chalk.blue.bold("Rules for playing This game: "));
console.log("----------------------------------------------");
console.log(chalk.blue.bold("1. There are 4 questions about me  in this round."));
console.log(chalk.blue.bold("2. For every right answer you gain 5 points."));
console.log(chalk.blue.bold("3. For every wrong answer you loose 2 points."));
console.log("----------------------------------------------");

var questions=[
  {
  question:'What is my name?',
  answer:'sabiya'
},
{
  question:'What is my age?',
  answer:'21'
},
{
  question:'Where am I working?',
  answer:'unemployed'
},
{
  question:'Which movie I liked recently?',
  answer:'Aakasam Nee Haddhu Ra'
}
];

var tscore=0;

function play(question, answer)
{
  var userans = readlineSync.question(chalk.yellow.bold(question));
  if(userans.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.green.bold("You are right!! You guessed correct!"));
    tscore=tscore+5;
    console.log(chalk.yellow.bold('Your score: '+tscore));
  }
  else{
    console.log(chalk.red.bold("You are wrong!! Even legends can get wrong!"));
    tscore=tscore-5;
    console.log(chalk.yellow.bold('Your score: '+tscore));
  }


}


for(var k=0;k<questions.length;k++)
{
  var currentquestion = questions[k];
  play(currentquestion.question, currentquestion.answer)
}

console.log(chalk.green.bold("Yayy! Your score: "+tscore))
console.log(chalk.green.bold("Congratulations!! "+userName))