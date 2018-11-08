// JavaScript Document

//
academic = 0;
social = 0;



$(document).ready(function() {
	$("#buttons").fadeIn(3000);
	//$("#btn2").fadeIn(3000);
	$("#message_begin").fadeIn(3000);
	$("#area_main").fadeIn(3000);
	$("#command_line").fadeIn(3000);
	
	/*$("#btn1").click(function(){
		social += 1;	
		$("#btn1").attr("onclick","test1()");
	});

	$("#btn2").click(function(){

		academic -= 1;
		$("#btn2").attr("onclick","test1()");
	});
*/



});

/*  use for copy and pasting
function test(){
		$("#area_main").html("").fadeIn(3000);
		$("#btn1").html('');
		$("#btn2").html('');
		$("#btn1").attr("onclick","resultA()");
		$("#btn2").attr("onclick","resultB()");
	
};
function resultA(){
		$("#area_main").html("").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test()");
		$("#btn2").attr("onclick","test()");
	
};
function resultB(){
		$("#area_main").html("").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test()");
		$("#btn2").attr("onclick","test()");
	
};
*/

//////////////////////////////////////////
function test1(){
		$("#area_main").html("It’s the first day of class. You leave 10 minutes early to get to class but you have no idea where ETB is and are completely lost with only 3 minutes left before class starts. You decide to:").fadeIn(3000);
		$("#btn1").html('Ask a stranger for directions');
		$("#btn2").html('Look it up yourself');
		$("#pic").attr('src',"images/lost1.jpg");
		$("#btn1").attr("onclick","result1A()");
		$("#btn2").attr("onclick","result1B()");
	
};
function result1A(){
		$("#area_main").html("After asking a friendly stranger for directions, you get to class on time and manage to get a seat in the front of the class.").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test2()");
		$("#btn2").attr("onclick","test2()");
};
function result1B(){
		$("#area_main").html("After wandering around for 10 minutes, you finally get to class and sit in the back of the class.").fadeIn(3000);
        $("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test2()");
		$("#btn2").attr("onclick","test2()");
};
///////////////////////////////////////////

function test2(){
		$("#area_main").html("Open house is this week and your friend invites you to go with her. Y’all head out and start talking to a few clubs. You signed up for:").fadeIn(3000);
		$("#btn1").html('Academic Club');
		$("#btn2").html('Sorority');
		$("#pic").attr('src',"images/open house.jpg");
		$("#btn1").attr("onclick","result2A()");
		$("#btn2").attr("onclick","result2B()");
	
};
function result2A(){
		$("#area_main").html("You have been going to all the club events, from resume fixing to interview practices and even made a few new friends.").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test3()");
		$("#btn2").attr("onclick","test3()");
	
};
function result2B(){
		$("#area_main").html("The sorority immediately invites you out to their event, mixers and sleepovers. You make so many new friends and living your best life.").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test3()");
		$("#btn2").attr("onclick","test3()");
	
};
////////////////////////////////////////////////////
function test3(){
		$("#area_main").html("Midterms are a week away; you were invited to study with your classmates at the library. You head to Evans to study. After studying for 2 hours your friends beg you to go grab some food with them. You decide to:").fadeIn(3000);
		$("#btn1").html('Go');
		$("#btn2").html('Not go');
		$("#pic").attr('src',"images/library1.jpg");
		$("#btn1").attr("onclick","result3A()");
		$("#btn2").attr("onclick","result3B()");
	
};
function result3A(){
		$("#area_main").html("You and your friends leave to get food together, and study later.").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test4()");
		$("#btn2").attr("onclick","test4()");
	
};
function result3B(){
		$("#area_main").html("You decide to soldier it out and get some more study time in.").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test4()");
		$("#btn2").attr("onclick","test4()");
	
};
////////////////////////////////////////////////////
function test4(){
		$("#area_main").html("After a few weeks, your professor emails out an announcement that midterm grades are out. You quickly pull up eCampus and clicked on grades, to see a 70 staring back at you. You are:").fadeIn(3000);
		$("#btn1").html('Okay with it');
		$("#btn2").html('Not okay with it');
		$("#pic").attr('src',"images/ecampus.png");
		$("#btn1").attr("onclick","result4A()");
		$("#btn2").attr("onclick","result4B()");
	
};
function result4A(){
		$("#area_main").html("You breathe a sigh of relief, you can still get a C in this class! C get degrees.").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test5()");
		$("#btn2").attr("onclick","test5()");
	
};
function result4B(){
		$("#area_main").html("You’re shocked! How could this happen? You studied all week! NO more fun!").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test5()");
		$("#btn2").attr("onclick","test5()");
	
};
///////////////////////////////////////////////////
function test5(){
		$("#area_main").html("Beep! Beep! Beep! Your alarm goes off, glancing at the the clock it’s 8:30. You have already missed 30 min of your first class! You decide to:").fadeIn(3000);
		$("#btn1").html('Go');
		$("#btn2").html('Not go');
		$("#pic").attr('src',"images/bed.jpg");
		$("#btn1").attr("onclick","result5A()");
		$("#btn2").attr("onclick","result5B()");
	
};
function result5A(){
		$("#area_main").html("You grab your bag and start running.").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test6()");
		$("#btn2").attr("onclick","test6()");
	
};
function result5B(){
		$("#area_main").html("Giving it some thought, you would get there for 5 min of class, go home sleepy, and fall back to your warm bed anyway.").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test6()");
		$("#btn2").attr("onclick","test6()");
	
};
///////////////////////////////////////////////////
function test6(){
		$("#area_main").html("The week is finally over and all your work is turned in, and you’re chilling in your dorm when you received 2 messages from your friends: 1. Hey let’s go study for the finals that’s 3 weeks away! 2. Hey you worked hard all week wanna go party and celebrate my birthday!   You decide to: ").fadeIn(3000);
		$("#btn1").html('Study');
		$("#btn2").html('Party');
		$("#pic").attr('src',"images/dormchill.jpg");
		$("#btn1").attr("onclick","result6A()");
		$("#btn2").attr("onclick","result6B()");
	
};
function result6A(){
		$("#area_main").html("You felt it was more important to study than party.").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test7()");
		$("#btn2").attr("onclick","test7()");
	
};
function result6B(){
		$("#area_main").html("You felt that there is still 3 weeks left and you can have fun for a little bit.").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test7()");
		$("#btn2").attr("onclick","test7()");
	
};
///////////////////////////////////////////////////
function test7(){
		$("#area_main").html("Finals week is finally here! You gather all of your study materials and head to the library. You happen to see your classmates at the library and they invite you to study with them. You decide to:").fadeIn(3000);
		$("#btn1").html('Study together');
		$("#btn2").html('Study alone');
		$("#pic").attr('src',"images/library2.jpg");
		$("#btn1").attr("onclick","result7A()");
		$("#btn2").attr("onclick","result7B()");
	
};
function result7A(){
		$("#area_main").html("One topic lead to another and everyone ends up chatting the whole time.").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test8()");
		$("#btn2").attr("onclick","test8()");
	
};
function resultB(){
		$("#area_main").html("You studied for a while, but lost steam and fell asleep for 2 hours.").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test8()");
		$("#btn2").attr("onclick","test8()");
	
};
///////////////////////////////////////////////////
function test8(){
		$("#area_main").html("It’s the night before your final, it’s already 5am, and your final is at 10am. You decide to:").fadeIn(3000);
		$("#btn1").html('Sleep');
		$("#btn2").html('Study');
		$("#pic").attr('src',"images/studying.jpg");
		$("#btn1").attr("onclick","result8A()");
		$("#btn2").attr("onclick","result8B()");
	
};
function result8A(){
		$("#area_main").html("You take a nap to get some rest and help you remember things better.").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test9()");
		$("#btn2").attr("onclick","test9()");
	
};
function result8B(){
		$("#area_main").html("You push through and keep staring at your textbook. You take your tests very tired.").fadeIn(3000);
		$("#btn1").html('Next');
		$("#btn2").html('Next');
		$("#btn1").attr("onclick","test9()");
		$("#btn2").attr("onclick","test9()");
	
};
///////////////////////////////////////////////////
function test9(){
		$("#area_main").html("Judging from how you answered these scenarios, you academic score is ... and your social score is ...").fadeIn(3000);
};

