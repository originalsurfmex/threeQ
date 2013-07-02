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

  //console.log("there are " + questions.length + " questions right now in 'questions.json'");

  //holds the answers per question
  var answer = [];
  //fills the array 'answer' with each answer per question
  var one_at_a_time = function(){
    for (var i = 0; i < questions.length; i++) {
        answer[i] = questions[i].correct_answer;
    }
  }

  //adds a radio button per multiple choice option
  var multiple_choice = function(target,question_order){
    for (var i = 0; i < questions[question_order].options.length; i++) {
       $('<input type="radio" name="options">' + questions[i].options[i] + '<br>').appendTo(target);
    }
  }

  one_at_a_time();

  //dynamically draw the questions and log the answers (correct or wrong),
  //then add a back and forth functionality

  //save div as it was to be used and reused
  var div_clone = $("#questions").html();

  var quiz = function() {
    for (var i = 0; i < questions.length; i++ ) {
      $('#part').append(questions[i].part);
      $('question').append(questions[i].question);
      multiple_choice('#radioform',0);
      $("#questions").html(div_clone);
    }
  }

  quiz();

});