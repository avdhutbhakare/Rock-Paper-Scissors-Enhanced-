var imageSelection ={
    "Stone":"Image3.png",
    "Paper":"Image1.png",
    "Scissors":"Image2.png"
};

function StartGame(){
   

   var moves = ["Stone", "Paper", "Scissors"];
   //Assigning random image for player 2
   var randomNumber2 = Math.floor(Math.random() * 3);
   var player2Choice = moves[randomNumber2];
   document.querySelectorAll("img")[1].setAttribute("src", imageSelection[player2Choice]);
   //Assigning image for player 1
   var player1Choice = document.getElementById("playerSelection").value;
   var imageForPlayer1 = imageSelection[player1Choice];
   document.querySelectorAll("img")[0].setAttribute("src",imageForPlayer1);

    if (player1Choice==="Paper" && player2Choice==="Scissors"){ //paper and scissors
        document.querySelector("h1").innerHTML="Player 2 Wins";
    }else if(player1Choice==="Paper" && player2Choice==="Stone"){ //paper and Stone
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    }else if(player1Choice==="Scissors" && player2Choice==="Paper"){ //scissors and paper
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    }else if(player1Choice==="Scissors" && player2Choice==="Stone"){ //scissors and stone
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    }else if(player1Choice==="Stone" && player2Choice==="Paper"){ //stone and paper
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    }else if(player1Choice==="Stone" && player2Choice==="Scissors"){ //stone and scissors
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    }else{
        document.querySelector("h1").innerHTML = "Draw";
    }

};
