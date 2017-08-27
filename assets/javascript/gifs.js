var singers = ["Shakira", "Enrique Iglesias", "Michael Jackson", "Ricky Martin", "Thalia", "Michael Buble", "Selena Gomez", "David Archuleta","Selena"];

    //function to get singer's data from giphy.com 
      function displaySingerInfo(){

	     var singer = $(this).attr("data-name");
	     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + singer + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
        	url: queryURL,
        	method: "GET"
        }).done(function(response) {

        	for(var i = 0; i < singers.length; i++)	{

			  var results = response.data;
			
		      var singerDiv = $('<div class="singerDiv">'); 	
			  var p =$('<p class="rating">');
              p.text("Rating:" + results[i].rating);
			  singerDiv.append(p);
			  var singerImage = $("<img>");
			  singerImage.addClass("anImg");
              singerImage.attr("src" , response.data[i].images.fixed_height.url);
			  singerImage.attr("data-still", response.data[i].images.fixed_height.url);
			  singerImage.attr("data-animate" , response.data[i].images.fixed_height.url);
			  singerImage.attr("data-state", "still");
                
              singerDiv.append(singerImage);
			  $("#gifshere").prepend(singerDiv);
			}

			  $("#singers-view").attr(response);
			          renderButtons();


         //function to make gif still and animate
		$(".anImg").on("click", function(){

			var state = $(this).attr("data-state");
			    if(state === "still"){
				      $(this).attr('src',$(this).attr("data-animate"));
				      $(this).attr("data-state", "animate");
			}
			     else{
				      $(this).attr('src',$(this).attr("data-still"));
				      $(this).attr("data-state", "still");

            }

         });

       });
     } 

        //function to create new singer's buttons
        function renderButtons() {

	        $("#buttons-view").empty();

	        for(var i = 0; i < singers.length; i++)	{

			var newbutton = $("<button>");
			newbutton.addClass("singer");
			// newbutton.attr("actor-name", actor[i]);
			newbutton.attr("data-name", singers[i]);
			newbutton.text(singers[i]);
			$("#buttons-view").append(newbutton);

	    }   
    }


        //function after click add singer's button 
        $("#add-singer").on("click", function(event){
	        event.preventDefault();

	        var singer = $("#singers-input").val().trim();
	        console.log('singer:', singer);

			singers.push(singer);
			renderButtons();
    });

        $(document).on("click", ".singer", displaySingerInfo);

             renderButtons();
