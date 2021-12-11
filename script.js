$(function () {
  // jQuery methods go here...
  $("#play").click(function () {
    $(this).text("select one");
    $(".left .emoji").addClass(
      "animate__animated animate__tada animate__infinite"
    );

  });

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
    var randvalue = computer_values[Math.floor(Math.random() * computer_values.length)];
    $("#"+randvalue+"2 img" ).css('margin-right', '90px');
    $("#"+player+"1 img" ).css('margin-left', '90px');
    $(".left .emoji").removeClass("animate__animated animate__tada animate__infinite");
    console.log("player -> "+player + " |||| computer -> "+randvalue);
    if (player == randvalue) {
      console.log(true);
      $("#play").text("tie");
      return;
   
    }
    if(player=="Rock" && randvalue=="Scissor"){
        $("#play").text("You Won");
        
    }
   else if(player=="Paper" && randvalue=="Rock"){
        $("#play").text("You Won");
    }
   else if(player=="Scissor" && randvalue=="Paper"){
        $("#play").text("You Won");
    }else{
        $("#play").text("You Lose");
    }
  }
});
