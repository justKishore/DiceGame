var randomNumber1 = Math.floor(Math.random()*6)+1;
// console.log(randomNumber1);

var randomPath1 = 'assets/images/dice'+randomNumber1+'.png';
// console.log(randomPath1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomPath2 = 'assets/images/dice'+randomNumber2+'.png';

// changing for player 1
document.querySelector(".img1").setAttribute("src",randomPath1);

//changing for player 2
document.querySelector(".img2").setAttribute("src",randomPath2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
}