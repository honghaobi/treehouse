var questions = [ 
  new Question("what's my name?", ["henry bi", "steve jobs"], "henry bi"),
  new Question("what's my age?", [16, 27], 27),
  new Question("what's my career?", ["web developer", "actor"], "web developer"),
  new Question("what's my goal?", ["to learn", "make money"], "to learn")
];

var quiz = new Quiz(questions);

QuizUI.displayNext();