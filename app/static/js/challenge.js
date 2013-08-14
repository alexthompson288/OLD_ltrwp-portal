<!-- //  Choose level button
//  Open game frame 
//  Picture frames drop down
//  Fruit machine pops up
//  Instructions are read out
//  3...2...1. Go!
//  Fruitmachine function
    // Each letter is on a background
    // Play chaching audio
    // Word appears
    // Each phoneme has a sound button of correct size
    // Each sound button push plays sound of specific phoneme
    // Each sound button push changes state of button sprite
    // Each sound button push changes colour of letter background container
    // Each sound button push changes colour of letter
    


    
//  Choose correct image
//  Image goes to state B
//  Score number increases by 1
//  Background colour changes on the score circle
//  Timer sprite decreases position
//  


//  object of words with attributes:
//        phonemes
//        dummy/target
//  

 -->
 //For the number of times the button has been clicked.
var cnt = 0;

 var words = [ 

{


word: 'sun', 
phonemes: { 
'n':'n_n_naughty nose', 's':'s_s_sneaky snake', 'u':'uh_u_ugly umbrella' } 
} ,
 {

word: 'cat', 
phonemes: { 
'a':'a_a_angry ant', 'c':'ck_c_clumsy clown', 't':'t_t_terrible troll' } 
} , {
word: 'dog', 
phonemes: { 
'd':'d_d_dangerous dragon', 'g':'g_g_grinning goat', 'o':'o_o_odd octopus' } 
} ]


 function EvalSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
 }



                    


$(document).ready(function(){

 $("#picture-frame-left").click(function(event){
    event.stopPropagation();
    $(this).animate({'top':'-500px'},500);
    $('#picture-frame-right').animate({'top':'-500px'},500);
    $(this).parent().find('#fruitmachine-body').animate({'bottom':'-500px'},500);
    setUpScreen();
 });

 $("#picture-frame-right").click(function(event){
 	event.stopPropagation();
    $(this).animate({'top':'-500px'},500);
    $('#picture-frame-left').animate({'top':'-500px'},500);
    $(this).parent().find('#fruitmachine-body').animate({'bottom':'-500px'},500);
    setUpScreen();
  });


 if(document.getElementById("age").value != ""){
	 $(".btn").click(function(){
	 	$('.comparison-container-box').hide();
	 	console.log("hidden");
	 	Main();
	 });
 }
      
});




// function sayHello(){
// 	alert(words[1].word);
// }
// sayHello();


function Main(){
    
	$('#progress-bar').fadeIn(2500);
	$('#score').fadeIn(2500);
	setInterval(function(){
		$("#timer-progress-bar").animate({top: "+=0.1"}, {
            duration: 10,
			step: function( ){
				if((345- $('#timer-progress-bar').position().top) < 0) {
                     var string_url = "_measurelevel.html?" + "score="+cnt+"&age="+document.getElementById("age").value; 
                     window.location = string_url;
                }
			}
		});
	});    
	setUpScreen();
}



function setUpScreen(){
	
	$('#picture-frame-left').show().animate({'top':'0px'},1000,'easeOutBounce');
    $('#picture-frame-right').delay('500').show().animate({'top':'0px'},1000,'easeOutBounce');
    $('#fruitmachine-body').delay('500').show().animate({'bottom':'0px'},2000,'easeOutBounce');
	chooseCorrectWord();	
}


function chooseCorrectWord(){

	var min = 0;
	var max = words.length-1;
	
	// and the formula is:
	var random = Math.floor(Math.random() * (max - min + 1)) + min;

	var correctWord = words[random].word;
	

	var random1 = Math.floor(Math.random() * (max - min + 1)) + min;

	var incorrectWord = words[random1].word;
	
	while(incorrectWord == correctWord){
		incorrectWord = words[Math.floor(Math.random() * (max - min + 1)) + min].word;
	}
	


	function writeWordsToFruitmachine(){
		
		
		var length = correctWord.length;
		
		for (var i=0; i<length; i++){
			var p = i+1;

			$('#word-container-'+ p +' p').text(correctWord[i]);
			
		}
	}

    var chosenWords = [];

	function addImagesToFrames(){
		var sortedWords = [incorrectWord,correctWord]; 
		
		var first = Math.floor(Math.random()*2);
		chosenWords.push(sortedWords[first]);
		chosenWords.push(sortedWords[(first+1) %2]);
  		

  		$('#game-image-left').attr('src','assets/game/game_images/_'+chosenWords[0]+'.png');
        $('#game-image-right').attr('src','assets/game/game_images/_'+chosenWords[1]+'.png');

        if(chosenWords[0] === correctWord){
        	$('#game-image-left').addClass("correct-answer-class");
        	$('#game-image-right').addClass("incorrect-answer-class");
        }else{
        	$('#game-image-right').addClass("correct-answer-class");
        	$('#game-image-left').addClass("incorrect-answer-class");
        }
	}

	function addAudioToButtons(){

	$('#audio7').attr('src','assets/game/audio/'+correctWord+'.wav');
		 
	var length = correctWord.length;
		for (var i=0 ; i < length ; i++){
			var p = i+1;
			$('#audio'+p).attr('src','assets/game/audio/'+correctWord[i]+'.wav');
		}
    }


	function checkCorrectWord(){
		$('.correct-answer-class').one('click', function(event){
			cnt++;
            $('#displayCounter').html(cnt);
			$('#flash-message p').text('Correct!');

		});
        
		$('.incorrect-answer-class').one('click', function(event){
			console.log('incorrect message');
			$('#flash-message p').text('Wrong!');
			
		});

		if(chosenWords[0] === correctWord){
        	$('#game-image-left').removeClass("correct-answer-class");
        	$('#game-image-right').removeClass("incorrect-answer-class");
        }else{
        	$('#game-image-right').removeClass("correct-answer-class");
        	$('#game-image-left').removeClass("incorrect-answer-class");
        }
	}


	addAudioToButtons();
	writeWordsToFruitmachine();
	addImagesToFrames();
	checkCorrectWord();

	
}



// GRAPH WORK

var data = {
	labels : ["4 years","5 years","6 years","7 years","8 years","9 years","10 years"],
	datasets : [
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [28,40,48,60,69,78,95]
		},
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : []
		}
	]
}