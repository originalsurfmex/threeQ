$(document).ready(function(){
  //load json
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
  //variable expressions:
  var div_clone = $("#questions").html();  // $("#questions").html(div_clone); //this returns the div to original state
  console.log(div_clone);
  var answer = [];
  var question_state = 0;
  var which_radio = 0;
  var keep_score = []; //this will be a key:value that will be traversed as back/next are clicked
  var total_score= 0;
  var add_it_up = function() {
    for (var i = 0; i < keep_score.length; i++) {
      total_score += keep_score[i];
    }
  };
  var multiple_choice = function(target,question_order){
    for (var i = 0; i < questions[question_order].options.length; i++) {
       $('<input type="radio" name="options" id=' + '"' + i + '"' + '>' + questions[question_order].options[i] + '<br>').appendTo(target);
    }
  };
  var radio_buttons = function() {
    $("#questions").html(div_clone);
    $('#question').append(questions[question_state].question);
    multiple_choice('#radioform',question_state);
    console.log("question state is " + question_state);
  };
  var score_tracker = function(){
    $('input:radio').click(function() {
      which_radio = $(this).attr('id');
      console.log("you just clicked radio button " + which_radio);
      if (which_radio == questions[question_state].correct_answer) {
        keep_score[question_state] = 1;
      } else {
        keep_score[question_state] = 0;
      }
    });
    console.log('the score is ' + keep_score);
  };
  //immediately invoked function expressions:
  var answers = function(){
    for (var i = 0; i < questions.length; i++) {
      answer[i] = questions[i].correct_answer;
    }
  }();
  var keep_score_traverse = function(){
    for (var i = 0; i < questions.length; i++) {
      keep_score.push(0);
    }
  }();
  var games_begin =  function() {
    $('#next').hide();
    $('#back').hide();
    $('#restart').hide();
  }();
  var click_start = function() {
    $('#start').click(function() {
      $('#next').show();
      $('#back').show();
      $('#restart').show();
      $('#start').hide();
      question_state = 0;
      radio_buttons();
      score_tracker();
    });
  }();
  var click_restart = function() {
    $('#restart').click(function() {
      $('#next').hide();
      $('#back').hide();
      $('#restart').hide();
      $('#start').show();
      $("#questions").html(div_clone);
      console.log(div_clone);
    });
  }();
  var click_next = function() {
    $('#next').click(function() {
    if (question_state < questions.length-1) {
      question_state++;
      radio_buttons();
      score_tracker();
    } else {
      score_tracker();
      add_it_up();
      alert(total_score);
    }
    });
  }();
  var click_back = function() {
    $('#back').click(function() {
      if (question_state > 0) {
        question_state--;
        radio_buttons();
        score_tracker();
      }
    });
  }();
  //console logs:
  console.log("there are " + questions.length + " questions right now in 'questions.json'");
  console.log(questions[0].options[0]);
  //console.log('the score is ' + keep_score);
});