$(document).ready(function() {
    $("#resume").hover(function() {
      $("#info").text('Check out my resume!');
      $("#info").css('visibility', 'visible');
    }, function() {
      $("#info").css('visibility', 'hidden');
    });
    $("#github").hover(function() {
      $("#info").text('See my projects on Github!');
      $("#info").css('visibility', 'visible');
    }, function() {
      $("#info").css('visibility', 'hidden');
    });
    $("#twitter").hover(function() {
      $("#info").text('Follow me on Twitter!');
      $("#info").css('visibility', 'visible');
    }, function() {
      $("#info").css('visibility', 'hidden');
    });
    $("#linkedin").hover(function() {
      $("#info").text('Connect with me on LinkedIn!');
      $("#info").css('visibility', 'visible');
    }, function() {
      $("#info").css('visibility', 'hidden');
    });
    $("#email").hover(function() {
      $("#info").text('Feel free to send me an email!');
      $("#info").css('visibility', 'visible');
    }, function() {
      $("#info").css('visibility', 'hidden');
    });
});
