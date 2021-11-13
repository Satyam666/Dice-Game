var randomNo1 = Math.floor(Math.random()*6)+1;
var randomNo2 = Math.floor(Math.random()*6)+1;

var randomImage1 = "dice"+ randomNo1 + ".png";
var randomImageSource1 = "images/"+ randomImage1 ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomImage2 = "dice"+ randomNo2 + ".png";
var randomImageSource2 = "images/"+ randomImage2 ;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

var x = document.querySelector("h1");

if(randomNo1 < randomNo2){
    
//   var y = x.replaceWith("Player 2 Win");
 x.innerHTML = "Player 2 Win";
 

}
else if(randomNo1 > randomNo2){
    // x.replaceWith("Playe 1 Wins");
    x.innerHTML = "Player 1 Win";
}else{
    x.innerHTML = "Tie between Player 1 and Player 2";
}
