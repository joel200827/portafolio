document.addEventListener('DOMContentLoaded', (event)=>{
    const target = document.getElementById('target');
    const speedDisplay = document.getElementById('speed');
    const scoreDisplay = document.getElementById('score');

    let score =0;
    let speed =1000;
    let TimeRanges;

    function getRandomPosition(element){
        const gameContainer = document.getElementById('game-container');
        const x = Math.random() * (gameContainer.clientWidth - element.clientWidth);
        const y = Math.random() * (gameContainer.clientWidth - element.clientWidth);
        return {x,y};
    }
    function moveTarget(){
        const {x,y} = getRandomPosition(target);
        target.style.left = `${x}px`;
        target.style.top = `${y}px`;
    }
    function updateSpeed(){
        if(speed > 200){
            speed -=50;
        }
        speedDisplay.textContent = (1000 / speed).toFixed(2);
        clearInterval(timer);
        timer = setInterval(moveTarget, speed);
    }
    target.addEventListener('click', () =>{
        score++;
        scoreDisplay.textContent = score;
        updateSpeed();
    });
    timer = setInterval(moveTarget, speed);
});
const containerWidth = document.getElementById("game-container").offsetWidth;
const containerHeight = document.getElementById("game-container").offsetHeight;
const targetSize = target.offsetWidth;
const maxX = containerWidth - targetSize;
const maxY = containerHeight - targetSize;

function moveTarget(){
    let randomX = Math.floor (Math,random()* maxX);
    let randomY = Math.floor (Math,random()* maxY);
    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
    setTimeout(moveTarget,2000 / speed);
}