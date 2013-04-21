
$(document).ready(function(){

  var questions = (function () {
    //var questions = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'questions.json',
        'dataType': "json",
        'success': function (data) {
            questions = data;
        }
    });
    return questions;
  })();

  console.log(questions[0]);
  $('h1').append("test");

  var answer_1 = questions[0].correct_answer_1;
  var answer_2 = questions[1].correct_answer_2;
  var answer_3 = questions[2].correct_answer_3;
  var score = 0;
  
  $('#q2').hide();  
  $('#q3').hide();  

  $('#button').click(function(){
    if ($('#q1').is(":visible")){
      $('#q1').hide();
      $('#q2').show();
      var selection_1 = $('input:radio[name="part_1"]:checked').val();
      if (answer_1 === selection_1){
        score = score + 1;
      }
      console.log(score); 
    } else if ($('#q2').is(":visible")){
      $('#q2').hide();
      $('#q3').show();
      var selection_2 = $('input:radio[name="part_2"]:checked').val();
      if (answer_2 === selection_2){
        score = score + 1;
      }
      console.log(score);
    } else if ($('#q3').is(":visible")){
      $('#q3').hide();
      $('#results').show();
     var selection_3 = $('input:radio[name="part_3"]:checked').val();
      if (answer_3 === selection_3){
        score = score + 1;
      }
      $('#results').append(score);
      console.log(score);     
    }
  });
});

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
