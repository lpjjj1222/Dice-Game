// 随机数1-左骰子
var randomNumber1 = Math.floor(Math.random() * 6) +1;

randomImg1 = "dice"+randomNumber1+".png"
img_src1 = "./images/" + randomImg1

document.querySelector(".img1").setAttribute("src",img_src1);

// 随机数2-右骰子
var randomNumber2 = Math.floor(Math.random() * 6) +1;

randomImg2 = "dice"+randomNumber2+".png"
img_src2 = "./images/" + randomImg2


document.querySelector(".img2").setAttribute("src",img_src2);

if(randomNumber1 > randomNumber2){
    document.querySelector(".container>h1").textContent = "🚩Player1 Wins!"
}
else if (randomNumber1 < randomNumber2){
    document.querySelector(".container>h1").textContent = "🚩Player2 Wins!"
}
else{
    document.querySelector(".container>h1").textContent = "🚩Draw!"
}
