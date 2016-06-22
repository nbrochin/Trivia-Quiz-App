  
  $(document).ready(function() {
      var QuizModel = function() {

          this.questions = [
              [

                  {
                      question: "Nikola Tesla's greatest contribution to science was which of the following achievements?",
                      choices: [' AC induction motor', ' The light bulb with tungsten filament', ' Underground electrical wires', ' The 3-pronged electrical outlet'],
                      correctAnswer: 0,
                      point_value: 5
                  },

                  {
                      question: "Which of the following positions did Benjamin Franklin NOT hold?",
                      choices: [" Ambassador to France", " Newpaper editor in Philadelphia", " British postmaster for the colonies", " Inventor of the kite"],
                      correctAnswer: 3,
                      point_value: 15
                  }, {
                      question: "What was the first message sent by Samuel Morse's telegraph machine?",
                      choices: [" Save our souls", " What hath God wrought?", " Mr. Watson, come here!", " Now is the time for all good men."],
                      correctAnswer: 1,
                      point_value: 10
                  }, {
                      question: "This inventor of the Optical Analysis System was also the world's first Hispanic female astronaut. What is her name?",
                      choices: [" Ellen Ochoa", " Sally Ride", " Linda Chavez", " Margaret Kingsley"],
                      correctAnswer: 0,
                      point_value: 25
                  }, {
                      question: "Which Dutch inventor introduced the telescope to the world?",
                      choices: [" Hans Schopol", " Hans Lippershy", " Johann Bach", " Hans Holbein"],
                      correctAnswer: 1,
                      point_value: 20
                  }, {
                      question: "The Niepce Crater on the Moon was named in recognition of the famous inventor Joseph Niepce. What did Niepce invent?",
                      choices: [" Telescope", " Camera", " Microscope", " Lunar landing module"],
                      correctAnswer: 1,
                      point_value: 5

                  }, {
                      question: "The invention of the refrigerator made a significant improvement to our standard of living. Who is credited with the invention?",
                      choices: [" Carl von Linde", " Michael Faraday", " Oliver Evans", " Joseph Beuys"],
                      correctAnswer: 2,
                      point_value: 25
                  }
              ],

              // THE JETSONS 

              [{
                  question: "Meet George Jetson.... His boy ____",
                  choices: [' George, Jr.', ' Cosmo', ' Elroy', ' Astro'],
                  correctAnswer: 2,
                  point_value: 5
              }, {
                  question: "What is name of George's boss? ",
                  choices: [" Cosmo Spacely", " George Sprocket", " Arturo Spacely", " Elroy Sprocket"],
                  correctAnswer: 0,
                  point_value: 10
              }, {
                  question: "What is the name of the Jetsons' robotic housekeeper?",
                  choices: [" Judy", " Roseanne", " Mariana", " Rosie"],
                  correctAnswer: 3,
                  point_value: 10
              }, {
                  question: "What is the name of the annoying family pet?",
                  choices: [" Astro", " Elroy", " Rufus", " Rocket"],
                  correctAnswer: 0,
                  point_value: 5
              }, {
                  question: "What is the name of the daughter, Elroy's sister?",
                  choices: [" Jane", " Rosie", " Judy", " Anne"],
                  correctAnswer: 2,
                  point_value: 10

              }, {
                  question: "When she grows up, what does Judy want to be?",
                  choices: [" Scientist", " Pop star", " School teacher", " Housewife"],
                  correctAnswer: 1,
                  point_value: 5

              }, {
                  question: "George Jetson is gainfully employed by which firm?",
                  choices: [" Cosmo's Rockets", " Spacely Sprockets", " Spacely's Rockets", " Astro-Glide"],
                  correctAnswer: 1,
                  point_value: 10
              }],

              // WORLD CAPITALS

              [{
                  question: "Which of the following is NOT a capital city?",
                  choices: [' Jakarta', ' New Delhi', ' Budapest', ' Antwerp'],
                  correctAnswer: 3,
                  point_value: 15
              }, {
                  question: "What is the capital city of Venezuela? ",
                  choices: [" Bogota", " Caracas", " Lima", " Buenos Aires"],
                  correctAnswer: 1,
                  point_value: 10
              }, {
                  question: "Which of the following cities is a capital city on the African continent?",
                  choices: [" Nairobi", " Algiers", " Cairo", " All of the above"],
                  correctAnswer: 3,
                  point_value: 10
              }, {
                  question: "Djibouti is the capital city of which African nation?",
                  choices: [" Gambia", " Chad", " Djibouti", " Ghana"],
                  correctAnswer: 2,
                  point_value: 5
              }, {
                  question: "Which of the following is the capital of Equatorial Guinea?",
                  choices: [" Malabo", " Asmara", " Monrovia", " Lilongwe"],
                  correctAnswer: 0,
                  point_value: 25

              }, {
                  question: "Which of these European capital cities has the largest population? ",
                  choices: [" Lisbon", " Vienna", " Helsinki", " Minsk"],
                  correctAnswer: 3,
                  point_value: 15

              }, {
                  question: "What is the capital of the Ukraine?",
                  choices: [" Budapest", " Kiev", " Tblisi", " Minsk"],
                  correctAnswer: 1,
                  point_value: 20
              }],

              // NBA SCORING CHAMPS

              [{
                  question: "In what year did Pete Maravich win his only scoring title?",
                  choices: [' 1976', ' 1978', ' 1977', ' 1975'],
                  correctAnswer: 2,
                  point_value: 15
              }, {
                  question: "Who among these players below won the most NBA scoring titles?",
                  choices: [" Kareem-Abdul Jabbar", " Bob McAdoo", " Jerry West", " George Gervin"],
                  correctAnswer: 3,
                  point_value: 10
              }, {
                  question: "Which of the players from the list below never won an NBA scoring title?",
                  choices: [" Larry Bird", " Bernard King", " Elvin Hayes", " Alex English"],
                  correctAnswer: 0,
                  point_value: 10
              }, {
                  question: "Which NBA player won scoring titles in both 2000 and 2005?",
                  choices: [" Kobe Bryant", " Shaquille O'Neal", " Alan Iverson", " Tracy McGrady"],
                  correctAnswer: 1,
                  point_value: 15
              }, {
                  question: "Who was the first player to win a second NBA scoring championship?",
                  choices: [" George Mikan", " Bob Petit", " Paul Arizin", " Neal Johnston"],
                  correctAnswer: 0,
                  point_value: 25

              }, {
                  question: "Who won the NBA scoring title in 1994? ",
                  choices: [" Michael Jordan", " Hakeem Olajuwon", " David Robinson", " Shaquille O'Neal"],
                  correctAnswer: 2,
                  point_value: 15

              }, {
                  question: "Wilt Chamberlain owns the five highest point per game totals in the history of the NBA. Who owns the 6th highest?",
                  choices: [" Rick Barry", " Kobe Bryant", " Michael Jordan", " Bob McAdoo"],
                  correctAnswer: 0,
                  point_value: 20
              }]
          ];

          this.quizTopic = this.questions[0];

          this.startGame = function() {
              $('.q-score-css').text("0pts");
              $('ul#question-dots li i').css('color', '#778DA3');
              $('ul.left-header-box li.total-score').text("0");
              $('.answer-text').hide(); //hide
              $('.next-q-css').show();
              this.questionCounter = 0;
              this.selections = [];
              this.displayNext();
              this.calculateScore();
              this.createRadios();
          };

          // console.log(this.questions.length)

          this.score = 0;
          this.currentScore = 0;
          this.questionCounter = 0; // TRACKS QUESTION NUMBER
          this.selections = []; // CREATES ARRAY WITH USER CHOICES
          this.correct = this.questions[0].correctAnswer;


          this.createRadios = function(index) {
              var self = this;
              var radioList = $('<ul class="answer-text">');
              var item;
              var input = '';
              for (var i = 0; i < this.quizTopic[i].choices.length; i++) {
                  item = $('<li>');
                  input ='<input type="radio" name="answer" value=' + i + ' />';
                  input += this.quizTopic[this.questionCounter].choices[i];
                  item.append(input);
                  radioList.append(item);
              }
              return radioList;
          }


          this.calculateScore = function() {
              this.numCorrect = 0;
              this.totalPoints = 0;
              for (var i = 0; i < this.selections.length; i++) {

                  if (this.selections[i] === this.quizTopic[i].correctAnswer) {
                      this.numCorrect++;
                      this.totalPoints += this.quizTopic[i].point_value;
                  }

              }
              return [this.numCorrect, this.totalPoints];
          }

          this.createQuestioncontainer = function(index) {
              var qContainer = $(
                  '<div class="trivia-questions">', {
                      id: 'question-number'
                  });
              var currentScore = this.calculateScore();
              var questionPtvalue = this.quizTopic[index].point_value;
              for (var i = 0; i < this.quizTopic[index].choices.length; i++) {
                  $('#question-score.q-score-css').text((
                      questionPtvalue) + 'pts');
              }
              this.correct = this.quizTopic.correctAnswer;
              var questionNo = $('<h2>QUESTION ' + 0 + (index +
                  1) + ':</h2>');
              $('#question-number.question-01').html(questionNo);
              var question = $('<div class="question-text">').append(this.quizTopic[index].question);
              qContainer.append(question);
              $('header ul li.total-score').text(currentScore[1]);
              var radioButtons = this.createRadios(index);
              qContainer.append(radioButtons);
              return qContainer;
          }

          this.displayScore = function(index) {

              this.score = $('<div>', {
                  class: 'trivia-questions'
              });

              this.calculatedScore = this.calculateScore;
              this.currentScore = this.calculateScore();
              $('header ul li.total-score').text(this.currentScore[1]);

              this.trueTxtcolr = "";
              this.falseTxtcolr = "";
              this.result = "";


              for (var i = 0; i < this.quizTopic.length; i++) {
                  //console.log(this.quizTopic[0].correctAnswer, this.quizTopic.choices[this.selections[0]]);
                  if (this.selections[i] === this.quizTopic[i].correctAnswer)  {
                      this.trueTxtcolr = '#1E6C06';
                      console.log('true')
                  } else {
                      this.trueTxtcolr = '#cc0300';
                  }
                  this.result += (i + 1) + '. ' + this.quizTopic[i].question +
                      '<br />' + '<em>Your Answer: </em>' +
                      '<element style="color:' + this.trueTxtcolr +
                      ';"><strong>' + this.quizTopic[i].choices[this.selections[
                          i]] + '</strong></element><br />' +
                      '<em>Correct Answer:</em><element style="color:#000000;">' + this.quizTopic[i].choices[this.quizTopic[i].correctAnswer] +
                      '.</element><br /><hr>';
              }

              $('ul.answer-text').html(this.result);
              this.score.append('<h2>You\'ve answered ' + this.numCorrect + ' questions out of ' + this.quizTopic.length +
                  ' correctly. Your total score is ' + this.totalPoints + '.</h2></div>');
              $('.next-q-css').hide();
              return this.score;

          }

          this.choose = function() {
              this.selections[this.questionCounter] = +$('input[name="answer"]:checked').val();
          }

          this.displayNext = function(index) {
              if (index > 0) {
                  if (this.selections[index - 1] === this.quizTopic[index - 1].correctAnswer) {
                      $('ul#question-dots li:nth-child(' + (
                          this.questionCounter) + ') i').css(
                          'color', '#1e6c06');
                  } else {
                      $('ul#question-dots li:nth-child(' + (
                          this.questionCounter) + ') i').css(
                          'color', '#66000a');
                  }

              };

              var self = this;
              quizArea.fadeOut(function() {
                  $('.trivia-questions').hide(); //hide
                  if (self.questionCounter < self.quizTopic.length) {
                      var nextQuestion =
                          self.createQuestioncontainer(self.questionCounter);
                      quizArea.append(nextQuestion).fadeIn();
                      if (!(isNaN(self.selections[this.questionCounter]))) {
                          $('input[value=' + self.selections[
                              self.questionCounter
                          ] + ']').prop('checked',
                              true);
                          $('ul.answer-text').hide(); //hide
                      }
                  } else {
                      var scoreDiv = self.displayScore();
                      quizArea.append(scoreDiv).fadeIn();
                      $('ul.answer-text').show();
                  }
              });


              // NEXT BUTTON, HANDLER - 
              $('#next').on('click', function(e) {
                  e.preventDefault();
                  // Suspend click listener during question transition
                  if (quizArea.is(':animated')) {
                      return false;

                  }
                  self.choose();

                  // ERROR IF NEXT BUTTON IS PUSHED WITHOUT AN ANSWER CHOICE
                  if (isNaN(self.selections[self.questionCounter])) {
                      alert('Please choose an answer!');
                  } else {
                      self.questionCounter++;
                      self.displayNext(self.questionCounter);
                      // console.log(self.questions[0]);
                  }
              });

          }
      };

      var quiz = new QuizModel();
      var quizArea = $('.trivia-questions');

      $('#start-game').click(function() {
          quiz.startGame();
      });

      $(".visible li.topic-title").click(function() {
              quiz.quizTopic = quiz.questions[$(this).data("set")];
              quiz.startGame();
       })
          
      // NEXT BUTTON, HANDLER - 
      $("#howToplay").click(function() {
          $("#quiz-area").css("opacity", "0.2");
          // $("ul.footer-box").hide();
          $(".overlay").show();
      });
      // Get the modal
      var modal = document.getElementById('myModal');
      var btn = document.getElementById("myBtn");
      var span = document.getElementsByClassName("close")[0];

      btn.onclick = function() {
              modal.style.display = "block";
          }
      span.onclick = function() {
              modal.style.display = "none";
          }
          // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
              if (event.target == modal) {
                  modal.style.display = "none";
                  $(".control-panel").show();
                  $("ul.footer-box").show();
                  $("#quiz-area").css("opacity", "1.0");
              }
          }

          /*--- Hide information modal box ---*/
      $(".close").click(function() {
          $(".overlay").fadeOut(600);
          $(".control-panel").show();
          $("ul.footer-box").show();
          $("#quiz-area").css("opacity", "1.0");
      });

      /*--- Set and Maintain High Score List ---*/
      $('#showHighScore').click(function ShowHighScoreValues() {
          var previousHS = (localStorage.HighScore ?
              localStorage.HighScore : 0)
          $('li#high-score-container.high-score').html(
              'HIGH SCORE: ' + previousHS + 'pts');
      });
      // ShowHighScoreValues();
      $('#clearStorage').click(function clearStorage() {
          localStorage.clear();
          $('li#high-score-container.high-score').html(
              'HIGH SCORE: 00');
      })

  });