const num1 = Math.round(Math.random()*10);
const num2 = Math.round(Math.random()*10);
const questionEl = document.getElementById("question");
const correctanswer = num1 * num2;
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const bntEl = document.querySelector(".btn");
let score=JSON.parse(localStorage.getItem("score"));


bntEl.addEventListener("mouseover", (event)=> {
    const x = (event.pageX - bntEl.offsetLeft);
    const y = (event.pageY - bntEl.offsetTop);

    bntEl.style.setProperty("--xPos", x + "px")
    bntEl.style.setProperty("--yPos", y + "px")
});
if(!score){
    score = 0;
}

questionEl.innerText = `What is ${num1} multiply by ${num2}?`

formEl.addEventListener("submit",() => {
    const userAns = +inputEl.value;
    if (userAns === correctanswer){
        score++
        updatelocalstorage()
    }else{
        if(score!==0){
        score--
        updatelocalstorage()
        }
        else{}
    }
})
function updatelocalstorage(){
    localStorage.setItem("score",JSON.stringify(score))
}

scoreEl.innerText = `score: ${score}`

