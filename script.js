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

  function User (the_name, the_email) {
    this.name = the_name;
    this.email = the_email;
    this.quiz_scores = [];
    this.current_score = 0;
  }

  User.prototype = {
    constructor: User,
    save_score:function (score_to_add) {
      this.quiz_scores.push(score_to_add)
    },
    show_name_scores:function() {
      var scores = this.quiz_scores.length > 0 ? this.quiz_scores.join(",") : "nada";
      return this.name + " Scores: " + scores;
    },
    change_email:function(new_email) {
      this.email = new_email;
      return "New Email Saved: " + this.email;
    }
  }

  //testuser
  /*
  test_user = new User("dude", "dude@thedude.com");
  test_user.change_email("thedude@thedude.com");
  test_user.save_score(15);
  test_user.save_score(10);
  test_user.show_name_scores();
  console.log(test_user.email);
  */

//variables

  var answer_1;
  var answer_2;
  var answer_3;
  var score_q1 = 0;
  var score_q2 = 0;
  var score_q3 = 0;
  var tryagain = 'Nothing is checked, please check one';

// start by showing question 1
  $('#q2').hide();
  $('#q3').hide();
  $('#results').hide();

// click next and log answer, then move to next question
  $('#next').click(function(){
  var total = score_q1 + score_q1 + score_q2;
    if ($('#q1').is(":visible")){
      var selection_1 = $('input:radio[name="part_1"]:checked').val();
      if (!$('input:radio[name="part_1"]:checked').val()) {
        alert(tryagain);
        $('#q1').show();
        $('#q2').hide();
        $('#q3').hide();
      } else if (answer_1 === selection_1) {
        $('#q1').hide();
        $('#q2').fadeIn();
        score_q1 = 1;
      } else {
        $('#q1').hide();
        $('#q2').fadeIn();
        score_q1 = 0;
      }
      console.log("question 1 score is " + score_q1);
      console.log("question 2 score is " + score_q2);
      console.log("question 3 score is " + score_q3);
      total = score_q1+score_q2+score_q3;
      console.log("Total score is " + total);
      } else if ($('#q2').is(":visible")){
      var selection_2 = $('input:radio[name="part_2"]:checked').val();
      if (!$('input:radio[name="part_2"]:checked').val()) {
        alert(tryagain);
        $('#q2').show();
        $('#q3').hide();
      } else if (answer_2 === selection_2) {
        score_q2 = 1;
        $('#q2').hide();
        $('#q3').fadeIn();
      } else {
        $('#q2').hide();
        $('#q3').fadeIn();
        score_q2 = 0;
      }
      console.log("question 1 score is " + score_q1);
      console.log("question 2 score is " + score_q2);
      console.log("question 3 score is " + score_q3);
      total = score_q1+score_q2+score_q3;
      console.log("Total score is " + total);
     } else if ($('#q3').is(":visible")){
     var selection_3 = $('input:radio[name="part_3"]:checked').val();
      if (!$('input:radio[name="part_3"]:checked').val()) {
        alert(tryagain);
        $('#q3').show();
      } else if (answer_3 === selection_3) {
        score_q3 = 1;
        $('#q3').hide();
        $('#results').fadeIn('slow');
        $('#results').append("Score: " + total);
      } else {
        $('#q3').hide();
        score_q3 = 0;
        $('#results').fadeIn('slow');
        $('#results').append("Score: " + total);
      }
      console.log("question 1 score is " + score_q1);
      console.log("question 2 score is " + score_q2);
      console.log("question 3 score is " + score_q3);
      total = score_q1+score_q2+score_q3;
      console.log("Total score is " + total);
    }
  });

  $('#back').click(function(){
    if ($('#q3').is(":visible")) {
      $('#q3').hide();
      $('#q2').show();
      $('#q1').hide();
    } else if ($('#q2').is(":visible")) {
      $('#q3').hide();
      $('#q2').hide();
      $('#q1').show();
    } else if ($('#q1').is(":visible")) {
      $('#q1').show();
    } else {
      alert("too late, can't go back now!");
    }
  });

  //take care of your formz
  $('#login').validationMessage;

  $('#local_storage_form').submit(function(){
    var storedlogin = $('input[id=login_input]').val();
    localStorage.setItem('login',storedlogin);
    console.log("submit was clicked");
    console.log("localstorage is holding " + "'" + localStorage.getItem('login') +"'");
  });

  $('input:reset').click(function(){
    console.log("change player");
    //localStorage.setItem('login',null);
    $('#submit').show();
    $('#login_input').show();
    $('#reset').hide();
  });

  if (localStorage.getItem('login') !== null) {
    $('#submit').hide();
    $('#login_input').hide();
    $('#current').html("Player: " + localStorage.getItem('login'));
    $('#reset').show();
  }


});