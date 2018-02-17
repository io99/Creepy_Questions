var questions = [
  "What is the creepiest thing you did in your life?",
  "What is the plot number of your grandpa's grave?",
  "What is the street name your first cat died on?"
  "When was the last time you shit your pants?"
];

newQuestion();

document.getElementById("refresh").addEventListener("click", newQuestion);

function newQuestion(){
  var question = questions[Math.floor(Math.random()*questions.length)];
  document.getElementById("q").innerText = question;
}
