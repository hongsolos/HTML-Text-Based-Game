// JavaScript Document

//
academic = 0;
social = 0;



$(document).ready(function() {
	$("#buttons").fadeIn(3000);
	$("#btn2").fadeIn(3000);
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

function test1(){
		//alert("thers");
		$("#area_main").html("It’s the first day of class. You leave 10 minutes early to get to class but you have no idea where ETB is and are completely lost with only 3 minutes left before class starts.");


		$("#btn1").html('Ask a stranger for directions');
		$("#btn2").html('Look it up yourself');
		$("#pic").attr('src',"2nd.png");
		$("#btn1").attr("onclick","test2()");
		$("#btn2").attr("onclick","test2()");
	
};

function test2(){
		//alert("2");
		$("#area_main").html("Open house is this week and your friend invites you to go with her. Y’all head out and start talking to a few clubs. You signed up for: ");
		$("#btn1").html('Academic Club');
		$("#btn2").html('Sorority');
		$("#pic").attr('src',"3rd.jpg");
		$("#btn1").attr("onclick","test2()");
		$("#btn2").attr("onclick","test2()");
	
};