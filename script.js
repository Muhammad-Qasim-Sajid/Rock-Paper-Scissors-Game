let choices = document.querySelectorAll("img");
let reBtn = document.querySelector(".restart");
let announcement = document.querySelector(".msg");
let scoreUser = document.querySelector(".you-score");
let scorecom = document.querySelector(".comp-score");

let userScore = 0;
let comScore = 0;

let genComChoice = () => {
    let choices = ["Rock", "Paper", "Scissor"]
    let idx = Math.floor(Math.random()*3);
    return choices[idx];
}

for(let choice of choices){
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id");
        let comChoice = genComChoice();

    if(userChoice === comChoice){
       announcement.innerText = "It's a Draw"; 
       announcement.style.color = "#ffd000ff";
    } 
    else if(userChoice === "Rock" && comChoice === "Scissor"){
       announcement.innerText = "You chose Rock & Computer chose Scissor, You Won"; 
       announcement.style.color = "#00ff15";
       userScore ++;
       scoreUser.innerText = userScore;
    } 
    else if(userChoice === "Rock" && comChoice === "Paper"){
       announcement.innerText = "You chose Rock & Computer chose Paper, Computer Won";
       announcement.style.color = "#ff0000"; 
       comScore ++;
       scorecom.innerText = comScore;
    } 
    else if(userChoice === "Scissor" && comChoice === "Rock"){
       announcement.innerText = "You chose Scissor & Computer chose Rock, Computer Won"; 
       announcement.style.color = "#ff0000";
       comScore ++;
       scorecom.innerText = comScore;
    } 
    else if(userChoice === "Paper" && comChoice === "Rock"){
       announcement.innerText = "You chose Paper & Computer chose Rock, You Won"; 
       announcement.style.color = "#00ff15";
       userScore ++;
       scoreUser.innerText = userScore;
    } 
    else if(userChoice === "Scissor" && comChoice === "Paper"){
       announcement.innerText = "You chose Scissor & Computer chose paper, You Won"; 
       announcement.style.color = "#00ff15";
       userScore ++;
       scoreUser.innerText = userScore;
    } 
    else if(userChoice === "Paper" && comChoice === "Scissor"){
       announcement.innerText = "You chose Paper & Computer chose Scissor, Computer Won"; 
       announcement.style.color = "#ff0000";
       comScore ++;
       scorecom.innerText = comScore;
    }  
    }) 
    
};

reBtn.addEventListener("click",() => {
      userScore = 0;
      comScore = 0;
      scorecom.innerText = userScore;
      scoreUser.innerText = comScore;
      announcement.innerText = "Play Your Move";
      announcement.style.color = "#ffffffff";
});