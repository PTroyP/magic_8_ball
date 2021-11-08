$(document).ready(function(){
var magic8ball = {};

magic8ball.listOfAnswers = ["You can count on it", "Outlook good", "Concentrate and ask again", "Probably not", "My sources say no"];


magic8ball.process = function()
{
$("#answer").fadeIn(4000);
$("#8ball").effect("shake");
	randomNumber = Math.random();

    randomNumberArray = randomNumber * magic8ball.listOfAnswers.length;

    randomIndex = Math.floor(randomNumberArray);

    randomAnswer = magic8ball.listOfAnswers[randomIndex];
	$("#answer").text(randomAnswer);


$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
};

$("#answer").hide();

var onClick = function() {
$("#answer").hide();
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

	setTimeout(
		function(){
	var question = prompt("Ask a Yes/No Question!");
	magic8ball.process(question);
	}, 500);
};
$("#questionButton").click(onClick);
});
