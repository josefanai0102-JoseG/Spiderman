const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const counterDisplay = document.getElementById('myDisplay');
let count = 0;

function changeColor(){
    if(count > 0){
        counterDisplay.style.color = 'green';
    } else if(count < 0){
        counterDisplay.style.color = 'red';
    } else {
        counterDisplay.style.color = 'white';
    }
}

increaseBtn.onclick = function (){
    count++;
    counterDisplay.innerHTML = count;
    changeColor();
}

decreaseBtn.onclick = function (){
    count--;
    counterDisplay.innerHTML = count;
    changeColor()
}

resetBtn.onclick = function (){
    count = 0;
    counterDisplay.innerHTML = count;
    changeColor();
}
window.alert(`Hello! Welcome to the Classic Counter!`);
