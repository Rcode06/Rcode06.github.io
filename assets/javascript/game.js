$(document).ready(function(){
      
        //Global Variables
      var wins = 0;
      var losses = 0;
      var totaladdition = 0;
      var pcomputerChoice = Math.floor(Math.random() * 100) + 19;
      var redCrystal = Math.floor( Math.random() * 12 ) + 1;
      var blueCrystal = Math.floor( Math.random() * 12 ) + 1;
      var yellowCrystal = Math.floor( Math.random() * 12 ) + 1;
      var greenCrystal = Math.floor( Math.random() * 12 ) + 1;
      var audio = new Audio("./assets/images/02 Better When I'm Dancin'.mp3");
      
      $("#totaladdition").text(totaladdition);
      $("#pcomputerChoice").text(pcomputerChoice);

    
       // Add the current wins and losses to the wins and losses div.       
      $(".wins").append("<p> WINS " +  " : "  + wins + "</p>");
      $(".losses").append("<p> LOSSES " +   " : "  + losses + "</p>");

    

      $("#reset").on('click', function(){ 
        reset();
      })  
    // using jQuery to select the div with the id of redCrystal
      $("#redCrystal").on('click', function(){
        //increasing the total by the number stored in the redCrystal
        totaladdition = totaladdition + redCrystal;
        $("#totaladdition").text(totaladdition);
        check();
    })
    // using jQuery to select the div with the id of blueCrystal
      $("#blueCrystal").on('click', function(){
      //increasing the total by the number stored in the blueCrystal
      totaladdition = totaladdition + blueCrystal;
      $("#totaladdition").text(totaladdition);
      check();
      })
      // using jQuery to select the div with the id of yellowCrystal
      $("#yellowCrystal").on('click', function(){
      //increasing the total by the number stored in the yellowCrystal
        totaladdition = totaladdition + yellowCrystal;
        $("#totaladdition").text(totaladdition);
        check();
    })
    // using jQuery to select the div with the id of greenCrystal
    $('#greenCrystal').on('click', function(){
    //increasing the total by the number stored in the greenCrystal
      totaladdition = totaladdition + greenCrystal;
      $("#totaladdition").text(totaladdition);
        check();
        })

    //function to reset everything 
       var reset = function(){
           totaladdition = 0;
           $("#totaladdition").text('0');
           pcomputerChoice = Math.floor(Math.random()* 100) + 19;
           redCrystal = Math.floor (Math.random()* 12) + 1;
           blueCrystal = Math.floor (Math.random()* 12) + 1;
           yellowCrystal = Math.floor (Math.random()* 12) + 1;
           greenCrystal = Math.floor (Math.random()* 12) + 1;
           $("#pcomputerChoice").text(pcomputerChoice); 
    }

    //logic function to determine if player will win or lose
       var   check = function (){
           if (totaladdition === pcomputerChoice) {
               wins ++;
               $(".wins").text("WINS " +   " : "  + wins );
               alert("You are awesome. YOU WON!")
               audio.play();
               reset();
  }
           else if(totaladdition > pcomputerChoice) {
              losses ++;
              $(".losses").text("LOSSES " +   " : "  + losses );
              alert("You lose!")
              audio.play();
              reset();
    }
       
  }
  
});
