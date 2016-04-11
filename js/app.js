$(document).ready(function(){

  var questions = [{
    question: "Nikola Tesla's greatest contribution to science was which of the following achievements?",
    choices: [' AC induction motor', ' The light bulb with tungsten filament', ' Underground electrical wires', ' The 3-pronged electrical outlet'],
    correctAnswer: 0,
    point_value: 15
  }, {
    question: "Which of the following positions did Benjamin Franklin NOT hold?",
    choices: [" Ambassador to France", " Newpaper editor in Philadelphia", " British postmaster for the colonies", " Inventor of the kite"],
    correctAnswer: 3,
    point_value: 10
  }, {
    question: "What was the first message sent by Samuel Morse's telegraph machine?",
    choices: [" Save our souls", " What hath God wrought?", " Mr. Watson, come here!", " Now is the time for all good men."],
    correctAnswer: 1,
    point_value: 10
  }, {
    question: "This inventor of the Optical Analysis System was also the world's first Hispanic female astronaut. What is her name?",
    choices: [ " Ellen Ochoa", " Sally Ride", " Linda Chavez", " Margaret Kingsley"],
    correctAnswer: 0,
    point_value: 20
  }, {
    question: "Which Dutch inventor introduced the telescope to the world?",
    choices: [" Hans Schopol", " Hans Lippershy", " Johann Bach", " Hans Holbein"],
    correctAnswer: 1,
    point_value: 20

    }, {
    question: "The Niepce Crater on the Moon was named in recognition of the famous inventor Joseph Niepce. What did Niepce invent?",
    choices: [ " Telescope", " Camera", " Microscope", " Lunar landing module"],
    correctAnswer: 1,
    point_value: 20

   }, {
  	question: "The invention of the refrigerator made a significant improvement to our standard of living. Who is credited with the invention?",
    choices: [" Carl von Linde", " Michael Faraday", " Oliver Evans", " Joseph Beuys"],
    correctAnswer: 2,
    point_value: 20
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('.trivia-questions'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please choose an answer!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div class="trivia-questions">', {
      id: 'question-number'
    });
    
    var questionNo = $('<h2>QUESTION ' + 0 + (index + 1) + ':</h2>');
  	$('#question-number.question-01').append(questionNo);
    
    var question = $('<div class="question-text">').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul class="answer-text">');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  
  }

  
  // places user choice into an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next question
  function displayNext() {
    quiz.fadeOut(function() {
      $('.trivia-questions').hide();
      $('.question-01 h2').hide();
      $('header ul li.total-score').text("05");
	  $('.q-score-css').text("+10 pts");
	  // $(".question-01 h2").text("QUESTION 01");
	  $(".fa-circle:nth-child(2)").css("color", "#778DA3" );
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // // Controls display of 'prev' button
        // if(questionCounter === 1){
        //   $('#prev').show();
        // } else if(questionCounter === 0){
          
        //   $('#next').show();
        // }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#start').show();
      }
    });
  }
  
  $('.start-game-css').click(function(){
			event.preventDefault();
			$("header ul li.total-score").text("0");
			$(".q-score-css").text("+0 pts");
			$('header ul li.topic-title').text('FAMOUS INVENTORS');
			$('header ul li.topic-title').css('animation-play-state','paused');
			$(".fa-circle:nth-child(2)").css("color", "#778DA3" );

 });

  // Calculates number of correct answers and creates a dynamic message to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'QA-holder'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }

    }
    
    score.append('<h2>You answered ' + numCorrect + ' questions out of ' +
                 questions.length + ' correctly. That stinks.</h2>');
    return score;
  }
  

  /*--- Display information modal box ---*/
 		$(".app-instructions").click(function(){
		$(".control-panel").hide();
		$("ul.footer-box").hide();
		$('body').css('background', 'url(../Triva-Quiz-App/images/galilleo-bkgd-dk.jpg) no-repeat 0 0');
   		$(".overlay").show();

  	});

  	/*--- Hide information modal box ---*/
  	$(".close").click(function(){
  		$(".overlay").fadeOut(500);
			$(".control-panel").show();
			$("ul.footer-box").show();
			$(".big-wrapper").css("opacity", "0.9");
			$('body').css('background', 'url(../Triva-Quiz-App/images/galilleo-bkgd.jpg) no-repeat 0 0');


	});
});