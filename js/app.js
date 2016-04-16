  $(document).ready(function(){

  var questions = [[
  { question: "Nikola Tesla's greatest contribution to science was which of the following achievements?",
    choices: [' AC induction motor', ' The light bulb with tungsten filament', ' Underground electrical wires', ' The 3-pronged electrical outlet'],
    correctAnswer: 0,
    point_value: 5 }, 

  { question: "Which of the following positions did Benjamin Franklin NOT hold?",
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
    choices: [ " Ellen Ochoa", " Sally Ride", " Linda Chavez", " Margaret Kingsley"],
    correctAnswer: 0,
    point_value: 25
  }, {
    question: "Which Dutch inventor introduced the telescope to the world?",
    choices: [" Hans Schopol", " Hans Lippershy", " Johann Bach", " Hans Holbein"],
    correctAnswer: 1,
    point_value: 20

     {
    question: "The Niepce Crater on the Moon was named in recognition of the famous inventor Joseph Niepce. What did Niepce invent?",
    choices: [ " Telescope", " Camera", " Microscope", " Lunar landing module"],
    correctAnswer: 1,
    point_value: 5

   }, {
  	question: "The invention of the refrigerator made a significant improvement to our standard of living. Who is credited with the invention?",
    choices: [" Carl von Linde", " Michael Faraday", " Oliver Evans", " Joseph Beuys"],
    correctAnswer: 2,
    point_value: 25
  }],
  [ {
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
    choices: [ " Astro", " Elroy", " Rufus", " Rocket"],
    correctAnswer: 0,
    point_value: 5
  }, {
    question: "What is the name of the daughter, Elroy's sister?",
    choices: [" Jane", " Rosie", " Judy", " Anne"],
    correctAnswer: 2,
    point_value: 10

    }, {
    question: "When she grows up, what does Judy want to be?",
    choices: [ " Scientist", " Pop star", " School teacher", " Housewife"],
    correctAnswer: 1,
    point_value: 5

   }, {
  	question: "George Jetson is gainfully employed by which firm?",
    choices: [" Cosmo's Rockets", " Spacely Sprockets", " Spacely's Rockets", " Astro-Glide"],
    correctAnswer: 1,
    point_value: 10
  }]
  ];
 
  var questionSet = questions[0];
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var choices = questions[0,0].correctAnswer;
  var quiz = $('.trivia-questions'); //Quiz div object
  

  $(".visible li").click(function() {
  	questionSet = questions[$(this).data("set")];
  	startGame();
  	console.log(questionSet);
  	console.log($(this).data("set"));

  })


  // Display initial question
  displayNext();
  

  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during question transition
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no answer is selected, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please choose an answer!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  function calculateScore() {
  	var numCorrect = 0;
    var totalPoints = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questionSet[i].correctAnswer) {
        numCorrect++;
        totalPoints+=questionSet[i].point_value;
    	
      }

    }
    return [numCorrect, totalPoints];


  }

  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestioncontainer(index) {
    var qContainer = $('<div class="trivia-questions">', {
      id: 'question-number'
    });

    var currentScore = calculateScore();
    var questionPtvalue = questionSet[index].point_value;
    $('#question-score.q-score-css').text((questionPtvalue) + 'pts');

    if (selections[index] === questionSet[index].correctAnswer) {
    	$('ul#question-dots li:nth-child(' + (questionCounter) + ') i').css('color', '#00ff33');
    }     
	
	else  {
    	$('ul#question-dots li:nth-child(' + (questionCounter) + ') i').css('color', '#ff3300');
 	}
       
    var questionNo = $('<h2>QUESTION ' + 0 + (index + 1) + ':</h2>');
  	$('#question-number.question-01').html(questionNo);
    
    var question = $('<div class="question-text">').append(questionSet[index].question);
    qContainer.append(question);
    $('header ul li.total-score').text(currentScore[1]);

	
    var radioButtons = createRadios(index);
    qContainer.append(radioButtons);
    
    return qContainer;
  }
  

  // places user choice into an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
    
  }
  
  // Displays next question
  function displayNext(index) {
    quiz.fadeOut(function() {
      $('.trivia-questions').hide();
      // $('p.cheese').hide();
      // $('.question-01 h2').hide();
      // $('header ul li.total-score').text("05");
	  // $('.q-score-css').text("+10 pts");
      



      if(questionCounter < questionSet.length){
        var nextQuestion = createQuestioncontainer(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
          $('ul.answer-text').hide();
        }
        
      }else {
        var scoreDiv = displayScore();
        quiz.append(scoreDiv).fadeIn();
        // $('#next').hide();
        // $('#start').show();
      }
    });
  }
  
    // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul class="answer-text">');
    var item;
    var input = '';
    for (var i = 0; i < questionSet[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questionSet[index].choices[i];
      item.append(input);
      radioList.append(item);
      // console.log(questions[index].choices[i]);

    }

    return radioList;
  }

  // Calculates number of correct answers and creates a message to be displayed
  function displayScore(index) {
  	// console.log(questionSet);
    var score = $('<div>',{class: 'trivia-questions'});
    var calculatedScore = calculateScore();
    currentScore = calculateScore();
    $('header ul li.total-score').text(currentScore[1]);
    var result = "";
    for (var i=0; i < questionSet.length; i++) {
    	result += (i + 1 ) + '. ' + questionSet[i].question + '<br />' + 'Your Answer: ' + questionSet[i].choices[selections[i]]  +  ', <element style="color: black;">Correct Answer: </element>' + '<element style="color: #22aa22;">' + questionSet[i].choices[questionSet[i].correctAnswer] + '.</element><br />';

    }
  	$('ul.answer-text').html(result);
    	// $('ul.answer-text').html('0' + i + '.' + question01 + '<br />' + 'Your Answer: ' + selections[i] + ' Correct Answer: ' + questionSet[i].correctAnswer + '<br />')
    


   score.append('<h2>You\'ve answered ' + calculatedScore[0] + ' questions out of ' +
   questionSet.length + ' correctly. Your total score is ' + calculatedScore[1] + '.</h2></div>');
    return score;
    }
   
  $('#start-game').click(function(){
  	startGame();
 });

  function startGame() {
  	event.preventDefault();
			// $('header ul li.total-score').text("18");
			$('.q-score-css').text(" 0pts");
			$('header ul li.topic-title').text('JETSONS TRIVIA');
			$('header ul li.topic-title').css('animation-play-state','paused');
			createQuestioncontainer(0);
			$('.answer-text').hide();
			questionCounter = 0;
			selections = [];
			displayNext();
  }

  /*--- Display information modal box ---*/
 		$(".app-instructions").click(function(){
		$(".control-panel").hide();
		$("ul.footer-box").hide();
		$('body').css('background-image', 'url(../Triva-Quiz-App/images/galilleo-bkgd-dk.jpg) no-repeat 0 0');
   		$(".overlay").show();

  	});
/*--- Set and Maintain High Score List ---*/

	var highScore = 1;
	var myScore = calculateScore();
	parseInt(localStorage.setItem('highScore', '22'));
	var highScore = parseInt(localStorage.getItem('highScore'));
	localStorage.getItem('highScore', 'myScore')

			
	console.log(highScore);
	console.log(myScore);

	return [myScore, highScore]



		

  	/*--- Hide information modal box ---*/
  	$(".close").click(function(){
  		$(".overlay").fadeOut(500);
			$(".control-panel").show();
			$("ul.footer-box").show();
			$(".big-wrapper").css("opacity", "0.9");
			$('body').css('background', 'url(../Triva-Quiz-App/images/galilleo-bkgd.jpg) no-repeat 0 0');


	});
});