 
You'll create a trivia game that shows only one question until the player answers it or their time runs out.
******Timerfn()***********************************************************************


If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.
*******************************splash screenFn()*****************************************
	


	*Both
		r++
		display explination
		
	*Correct
	*Incorrect
		-wrong
			:tell the player they selected the wrong option 
			:and then display the correct answer
			:Wait a few seconds, 
			:then show the next question
		-timeout
			:time's up and 
			:display the correct answer.
			:Wait a few seconds
			:then show the next question
	*Final
		-Score
			-correct answers, 
			-incorrect answers, 
		-option to restart the game


	*	



<!-- The scenario is similar for wrong answers and time-outs. -->

If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.

If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

A Few Last Notes

Styling and theme are completely up to you. Get creative!

If you get stuck anywhere in this assignment, remember to talk to a TA or instructor for support.

Good Luck!

Copyright

Coding Boot Camp (C) 2016. All Rights Reserved.



 JavaScript for the logic  
 jQuery to manipulate HTML
 HTML
 CSS

<!-- Create a GitHub repo called TriviaGame, then clone the repo to your computer. -->

<!-- Create a file inside of the TriviaGame folder called index.html. This is where you'll mark up all of your HTML. -->

<!-- Don't forget to include a script tag with the jQuery library.
Create a folder inside of the TriviaGame folder called assets. -->

<!-- Inside assets, create three folders: css, javascript, images
In your css folder, create a style.css file. -->
<!-- In your javascript folder, create an app.js file; here you'll write all of your JavaScript and jQuery. -->

In your images folder, save whatever images you'd like to use in this exercise.
Choose a game to build from your options below.

<!-- Option One: Basic Quiz (Timed Form)

Basic

Click Here to Watch the Demo.

You'll create a trivia form with multiple choice or true/false options (your choice).

The player will have a limited amount of time to finish the quiz.

The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
Don't let the player pick more than one answer per question.

Don't forget to include a countdown timer. -->