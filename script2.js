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

  $('#next').hide();
  $('#back').hide();
  $('#restart').hide();

  $('#restart').click(function() {
    $('#next').hide();
    $('#back').hide();
    $('#restart').hide();
    $('#start').show();
  });

    //save div as it was to be used and reused
  var div_clone = $("#questions").html();
  // $("#questions").html(div_clone); //this returns the div to original state

  console.log("there are " + questions.length + " questions right now in 'questions.json'");

  //holds the answers per question
  var answer = [];
  //fills the array 'answer' with each answer per question
  var answers = function(){
    for (var i = 0; i < questions.length; i++) {
        answer[i] = questions[i].correct_answer;
    }
  }

  answers();

  //adds a radio button per multiple choice option
  var multiple_choice = function(target,question_order){
    for (var i = 0; i < questions[question_order].options.length; i++) {
       $('<input type="radio" name="options">' + questions[i].options[i] + '<br>').appendTo(target);
    }
  }

  //dynamically draw the questions and log the answers (correct or wrong),
  //then add a back and forth functionality by traversing the json array object

  function Quiz(number) {
    this.question = questions[number].question;
    this.answer = questions[number].correct_answer;
    this.answered = false;
    this.number = number;
  }

  Quiz.prototype.ask = function() {

  }

  qna = new Quiz(1);

  $('#start').click(function() {
    $('#next').show();
    $('#back').show();
    $('#restart').show();
    $('#start').hide();

    $('#question').append(qna.question);
    multiple_choice('#radioform',0);
  });

  console.log(qna.question + qna.answer + qna.answered);

  //
  //$('#back')click(function() {
  //
  //})


});