$(document).ready(function(){

  var questions = (function () {
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

  console.log("there are " + questions.length + " questions right now in 'questions.json'");
  //console.log(questions[0].correct_answer);

  var answer = [];
  var one_at_a_time = function(){
    for (var i = 0; i < questions.length; i++) {
      //console.log(questions[i].correct_answer)
      answer[i] = questions[i].correct_answer;
    }
  }

  one_at_a_time();
  console.log("Reading from the 'questions.json' file: Question 1 is " + "'" + questions[0].question + "'" + ". Answer 1 is " + "'" + answer[0] + "'" + ".");
//users

$('#questions').append("<h1>test</h1>");



});