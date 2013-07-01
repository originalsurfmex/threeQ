threeQ
======

PART 2
------

Improve Your Quiz Application From Earlier:
 X  Add client-side data validation: make sure the user answers each question before proceeding to the next question.
 X  Add a “Back” button to allow the user to go back and change her answer. The user can go back up to the first question. For the questions that the user has answered already, be sure to show the radio button selected, so that the user is not forced to answer the questions again, which she has completed.
 X  Use jQuery to add animation (fade out the current question and fade in the next question).
 -  Test the quiz on IE 8 and 9, and fix any bugs. This will give you a good workout ;)
 X  Store the quiz questions in an external JSON file.
 X  Add user authentication: allow users log in, and save their login credentials to local storage (HTML5 browser storage).
 X  Use cookies to remember the user, and show a “Welcome, First Name” message when the user returns to the quiz.


PART 1
------

/*
You are building a JavaScript quiz application (you will use HTML and CSS as well) that will function as follows:

It is a simple quiz that has radio button choices, and it will show the user her score upon completion.

The quiz can show any number of questions and any number of choices.

Tally the user’s score and display the final score on the last page. The last page will only show the score, so remove the last question.

Use an array to store all the questions. Each question, along with its choices and correct answer, should be stored in an object. The array of questions should look similar to this one question array:

var allQuestions = [{
  question: "Who is Prime Minister of the United Kingdom?",
  choices: ["David Cameron",
             "Gordon Brown",
             "Winston Churchill",
             "Tony Blair"],
  correctAnswer:"David Cameron"
}];

Dynamically (with document.getElementById or jQuery) add the next question and remove the current question from the screen, when the user clicks the “Next” button. The Next button will be the only button to navigate this version of the quiz.
*/
