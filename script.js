$(function () {
  // jQuery methods go here...
  $("#play").click(function () {
    $(this).text("select one");
    $(".left .emoji").addClass(
      "animate__animated animate__tada animate__infinite"
    );
  });
  $("#playagain").hide();
  $("#Rock1").click(function () {
    game("Rock");
  });
  $("#Paper1").click(function () {
    game("Paper");
  });
  $("#Scissor1").click(function () {
    game("Scissor");
  });

  function game(player) {
    var computer_values = ["Rock", "Paper", "Scissor"];
    var randvalue =
      computer_values[Math.floor(Math.random() * computer_values.length)];
    $("#player2").text(randvalue);
    $("#player1").text(player);

    $(".left .emoji").removeClass(
      "animate__animated animate__tada animate__infinite"
    );
    console.log("player -> " + player + " |||| computer -> " + randvalue);
    if (player == randvalue) {
      $("#play").text("tie");
    } else if (player == "Rock" && randvalue == "Scissor") {
      $("#play").text("You Won");
    } else if (player == "Paper" && randvalue == "Rock") {
      $("#play").text("You Won");
    } else if (player == "Scissor" && randvalue == "Paper") {
      $("#play").text("You Won");
    } else {
      $("#play").text("You Lose");
    }
    waitTime();
    $("#playagain").show();
  }

  function waitTime() {
    $("#playagain").click(function () {
      location.reload();
    });
  }
});
