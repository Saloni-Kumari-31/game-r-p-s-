function openForm() {
    document.getElementById("button").style.display = "block";

    document.getElementById("myForm").style.display = "block";
    
    }

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("button").style.display = "none";
    }
let one;
let two;
let start1=document.getElementById("play");
start1.addEventListener('click',function(){
    let hands=document.querySelector(".game");
    hands.style.display="block";
    let contests=document.querySelector(".contest");
    contests.style.display="none";
})
let userScore=0;
let computerScore=0;
let win1=document.getElementById("win_lose_tie");
// score chart
const userscore_div=document.getElementById("user-score");
const computerscore_div=document.getElementById("computer-score");
// options access
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissor_div=document.getElementById('s');
function getcomputerchoice(){
    const choices=['r','p','s'];
    const randomindex=Math.floor(Math.random()*3);
    return choices[randomindex];
}
function win(){
    userScore++;
    userscore_div.innerHTML=userScore;
    console.log(userScore);
    win1.innerHTML="YOU WIN";
    let against=document.getElementById("ag");
    against.innerHTML="AGAINST PC";
    let nextbut=document.getElementById("nextbut");
    nextbut.style.display="block";

}
function lose(){
    computerScore++;
    computerscore_div.innerHTML=computerScore;
    console.log("lose");
    win1.innerHTML="YOULOST";
    let against=document.getElementById("ag");
    against.innerHTML="AGAINST PC";
    let nextbut=document.getElementById("nextbut");
    nextbut.style.display="none";
}
function draw(){
    console.log("draw");
    win1.innerHTML="TIE UP";
    let against=document.getElementById("ag");
    against.innerHTML="";
    let nextbut=document.getElementById("nextbut");
    nextbut.style.display="none";
}
// game function
function game(userChoice){
    const computerChoice=getcomputerchoice();
    // console.log(userChoice);
    // console.log(computerChoice);
    switch(userChoice+computerChoice){
        case "rs":
            one=document.getElementById("one");
            one.src="stone.png";
            two=document.getElementById("two");
            two.src="scissor.png";
            win();
            break;
        case "sp":
            one=document.getElementById("one");
            one.src="scissor.png";
            two=document.getElementById("two");
            two.src="paper.png";
            win();
            break;

        case "pr":
            one=document.getElementById("one");
            one.src="paper.png";
            two=document.getElementById("two");
            two.src="stone.png";
            // console.log("user wins");
            win();
            break;
        case "sr":
            one=document.getElementById("one");
            one.src="scissor.png";
            two=document.getElementById("two");
            two.src="stone.png";
            lose();
            break;
        case "ps":
            one=document.getElementById("one");
            one.src="paper.png";
            two=document.getElementById("two");
            two.src="scissor.png";
            lose();
            break;
        case "rp":
            one=document.getElementById("one");
            one.src="stone.png";
            two=document.getElementById("two");
            two.src="paper.png";
            // console.log("user loses");
            lose();
            break;
        case "rr":
            one=document.getElementById("one");
            one.src="stone.png";
            two=document.getElementById("two");
            two.src="stone.png";
            draw();
            break;
        case "ss":
            one=document.getElementById("one");
            one.src="scissor.png";
            two=document.getElementById("two");
            two.src="scissor.png";
            draw();
            break;
        case "pp":
            one=document.getElementById("one");
            one.src="paper.png";
            // console.log("draw");
            two=document.getElementById("two");
            two.src="paper.png";
            draw();
            break;
    }
}
function removing(){
    let hands=document.querySelector(".game");
    hands.style.display="none";
    let contests=document.querySelector(".contest");
    contests.style.display="block";

}
// adding event listeners
function main(){
    rock_div.addEventListener('click',function(){
        removing();
        // game function call with different paramet
        
        // console.log("hey you clicked on rock");
        game('r');
    })
    paper_div.addEventListener('click',function(){
        removing();
        // console.log("hey you clicked on paper");
        game('p');
    })
    scissor_div.addEventListener('click',function(){
        removing();
        game('s');
        // console.log("hey you clicked on scissor");
    })
}
main();