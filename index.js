var readLineSync = require('readline-sync')
const chalk = require('chalk')

var name = readLineSync.question(chalk.blueBright("Your Name: "))

console.log(chalk.red("\nHello There "+name.toUpperCase()+"!"))
console.log(chalk.greenBright("\nTake this Ultimate Quiz to see How Much you Know about Liverpool Football Club"))
console.log(chalk.redBright("\nIMP: To answer a Question, just enter a/b/c/d"))

currentRecordHolders = [
  {
    name:"qLimAxz", score:3
  },
];

questions = [
  {
    question:"Which is my Favourite Game? : ", options:"a. Battlefield\nb. Call Of Duty\nc. IGI\nd. GTA", answer:"b"
  },
  {
    question:"Which OS Do I like the Most? : ", options:"a. MacOS v2\nb. Linux\nc. Windows",answer:"a"
  },
  {
    question:"Which Comedy Movie I can see again and again without getting Bored? : ", options:"a Welcome\nb. Golmaal\nc. Phir Hera Pheri\nd. Singh is King", answer:"c"
  },
  {
    question:"Which Football Club do I hate the Most? : ", options:"a. Manchester United\nb. Chelsea\nc. Real Madrid\nd. Bayern Munich", answer:"b"
    },
  {
    question:"What is my Favourite Colour? : ", options:"a. Silver\nb. Blue\nc. Green\nd. Red", answer:"d"
  }
]

userScore = 0;

function nextQuestion(question, options, answer){

  var userAnswer = readLineSync.question(chalk.blueBright(question)+"\n"+chalk.yellowBright(options)+"\n-> ")

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.greenBright("Yop, That's Right!!!"))
    userScore++
  }else{
    console.log(chalk.redBright("Nah :("))
  }
  console.log(chalk.greenBright("Current Score: "+userScore));
  console.log(chalk.magentaBright("------------------------"))
}

console.log();
for (i=0;i<questions.length;i++){
  nextQuestion(questions[i].question, questions[i].options, questions[i].answer)
}
console.log(chalk.yellowBright("\nYour Total score: "+userScore))

highscoreflag = 0;
for(i=0;i<currentRecordHolders.length;i++){
  if(userScore > currentRecordHolders[i].score){
    console.log("EEHOOOOOOO, WE PALS NOW :)")
    highscoreflag = 1;
    break;
}
}
if(highscoreflag == 0){
  console.log(":( EXPECTED BETTER FROM YOU")
}
