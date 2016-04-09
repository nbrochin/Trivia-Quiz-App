
$(document).ready(function(){

	 function genRandnum(){

		 return Math.floor(Math.random()* 100 ) + 1;
		}
		var randNum = genRandnum();
		var counter = 1;

	$('#guessButton').click(function(){
			event.preventDefault();

    //no empty fields
		var guess = $('#userGuess').val();
		$('#userGuess').val('');
		guess = parseInt(guess);
		var spread =  Math.abs(randNum - guess);
		console.log('Secret Random Number is ' + randNum +'.');
		console.log('The spread is ' + spread +'.');
		console.log(guess);

        //add guesses to list
			if(spread >= 60 ) {
				$('#guessList').append("<li style='background-color:#231b87;'>" + guess + "</li>");
				}
				else if(spread >=45){
				$('#guessList').append("<li style='background-color:#195ba6;'>" + guess + "</li>");
				}
				else if(spread >=32){
					$('#guessList').append("<li style='background-color:#19a4aa;'>" + guess + "</li>");
				}
				else if(spread >=24){
					$('#guessList').append("<li style='background-color:#9fd219;'>" + guess + "</li>");
				}
				else if(spread >=16){
					$('#guessList').append("<li style='background-color:#f9da17; color:#222222;'>" + guess + "</li>");
				}
				else if(spread >=9){
					$('#guessList').append("<li style='background-color:#eb570f;'>" + guess + "</li>");
				}
				else if(spread >=5){
					$('#guessList').append("<li style='background-color:#c12b68;'>" + guess + "</li>");
				}
				else if(spread >=1){
					$('#guessList').append("<li style='background-color:#771423;'>" + guess + "</li>");
				}
				else if(spread == 0){
					$('#guessList').append("<li style='background-color:#000000;'>" + guess + "</li>");
				}


        // viewing number of guesses
				$('#count').html(counter++);
				// spread =  Math.abs(randNum - guess);

				// hot and cold logic
				console.log(spread);
				if(spread >=60){
					$('#feedback').replaceWith("<h2 id='feedback'>cold like the polar tundra (the coldest).</h2>");
				}
				else if(spread >= 40){
					$('#feedback').replaceWith("<h2 id='feedback'>cold like january in cleveland. that's bad.</h2>");
				}
				else if(spread >=25){
					$('#feedback').replaceWith("<h2 id='feedback'>like london in march, you're a little chilly.</h2>");
				}
				else if(spread >=17){
					$('#feedback').replaceWith("<h2 id='feedback'>Ah. may in Boston. nice breeze.</h2>");
				}
				else if(spread >=8){
					$('#feedback').replaceWith("<h2 id='feedback'>Miami in june is uncomfortably warm.</h2>");
				}
				else if(spread >=1){
					$('#feedback').replaceWith("<h2 id='feedback'>atlanta in july means, you are very hot.</h2>");
				}
				else if(spread === 0){
					$('#feedback').replaceWith("<h2 id='feedback'>winner. winner. chicken dinner!!</h2>");
				}

				else{
					alert('Please enter a number between 1 and 100');
				}
		});

		$('.new').click(function(){
					$('h2#feedback').replaceWith("<h2 id='feedback'>i am thinking of a number between 1 and 100. Can you guess it?</h2");
					$('#guessList').html('');
					$('#userGuess').val('');
					$('#count').replaceWith("<span id='count'>0</span>");

    			counter = 1;

		//generate random number, again; otherwise it get's stuck
					randNum = genRandnum();
					console.log('new number that will be replaced ' + randNum);

			});

	/*--- Display information modal box ---*/
 		$(".app-instructions").click(function(){
   	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
	});

});
