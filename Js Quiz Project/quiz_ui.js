var QuizUI = {
  displayNext: function(){
    if (quiz.hasEnded()) {
      this.displayScore();
    }else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },
  displayQuestion: function(){
    this.populateIDwithHTML("question", quiz.getCurrentQuestion().text);
         
  },
  
  displayChoices: function(){
    var choices = quiz.getCurrentQuestion().choices;
    
    for(var i = 0; i < choices.length; i++) {
      this.populateIDwithHTML("choice" + i, choices[i]);
      this.guessHandler("guess"+ i, choices[i]);
    }
  },
  
  displayScore: function(){
    var gameOverHTML = "<h1>Game Over</h1>";
        gameOverHTML += "<h2> Your Score is: " + quiz.score + "</h2>";
        this.populateIDwithHTML("quiz", gameOverHTML);
  },
  
  populateIDwithHTML: function(id,text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
  },
  
  guessHandler: function(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function (){
      quiz.guess(guess);
      QuizUI.displayNext();
    }
  },
  
  displayProgress: function () {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIDwithHTML("progress", "Question " +currentQuestionNumber + " of " + quiz.questions.length);
  }
};
  
  
  