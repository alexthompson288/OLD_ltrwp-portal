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


$(document).ready(function(){
 console.log('hello');
 $('#picture-frame-left').show().animate({'top':'0px'},1000,'easeOutBounce');
 $('#picture-frame-right').delay('500').show().animate({'top':'0px'},1000,'easeOutBounce');
 $('#fruitmachine-body').delay('500').show().animate({'bottom':'0px'},2000,'easeOutBounce');
 $('#progress-bar').fadeIn(2500);


 $("#picture-frame-left").click(function(){
 	$(this).slideUp(1000);
 });

 $("#picture-frame-right").click(function(){
 	$(this).slideUp(1000);
 });

});

var MoveBar = 0;

$(".btn").click(function(){
	MoveBar = setInterval(function(){
  			$("#timer-progress-bar").animate({top: "+=0.1"},10)}, 10)
	});




// function sayHello(){
// 	alert(words[1].word);
// }
// sayHello();


function chooseCorrectWord(){

	var min = 0;
	var max = words.length-1;
	
	// and the formula is:
	var random = Math.floor(Math.random() * (max - min + 1)) + min;

	var correctWord = words[random].word;
	

	var random1 = Math.floor(Math.random() * (max - min + 1)) + min;

	var incorrectWord = words[random1].word;
	if (incorrectWord === correctWord){
		incorrectWord = words[Math.floor(Math.random() * (max - min + 1)) + min].word;
	}
	

	function writeWordsToFruitmachine(){
		$('#correct-word-position').text(correctWord);

		
	}

	function addImagesToFrames(){
		$('#game-image-left').attr('src','assets/game/game_images/_'+correctWord+'.png')
		$('#game-image-right').attr('src','assets/game/game_images/_'+incorrectWord+'.png')
	}



	writeWordsToFruitmachine();
	addImagesToFrames();
}




chooseCorrectWord();











