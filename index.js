var randomNumber1= Math.floor(Math.random()*3)+1;
var image1= "images/Image" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", image1);

var randomNumber2 = Math.floor(Math.random() * 3) + 1;
var image2 = "images/Image" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", image2);

var resultText = ""

if (randomNumber1===1 && randomNumber2===2){ //paper and scissors
    resultText="Player 2 Wins";
}else if(randomNumber1===1 && randomNumber2===3){ //Paper ans scissors
    resultText="Player 1 Wins";
}else if (randomNumber1 === 2 && randomNumber2===1){ //Scissors and paper
    resultText="Player 1 Wins";
}else if (randomNumber1===2 && randomNumber2===3){ //Scissors and Stone
    resultText="Player 2 Wins";
}else if(randomNumber1===3 && randomNumber2===1){ //Stone and Paper
    resultText="Player 2 Wins";
}else if(randomNumber1===3 && randomNumber2===2){ //Stone and Scissors
    resultText="player 1 Wins";
}else{
    resultText="Draw !!";
}
document.querySelector("h1").textContent=resultText;