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





var words = [
	{
		word: 'cat',
		phonemes: ['c','a','t'],
		state: 'target'
	},

	{
		word: 'dog',
		phonemes: ['d','o','g'],
		state: 'dummy'
	}
]

