const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');

const stopButton = document.querySelector('.stop-button');
const readyButton = document.querySelector('.ready-button');
const goButton = document.querySelector('.go-button');

function resetLights(){
    redLight.style.backgroundColor = 'rgb(99, 95, 95)';
    yellowLight.style.backgroundColor = 'rgb(99, 95, 95)';
    greenLight.style.backgroundColor = 'rgb(99, 95, 95)';

    stopButton.style.backgroundColor = 'rgb(32, 64, 111)';
    readyButton.style.backgroundColor = 'rgb(32, 64, 111)';
    goButton.style.backgroundColor = 'rgb(32, 64, 111)';
}

stopButton.addEventListener('click', function(){
    resetLights();
    redLight.style.backgroundColor = 'rgb(255, 0, 0)';
    stopButton.style.backgroundColor = 'rgb(255, 0, 0)';
})

readyButton.addEventListener('click', function(){
    resetLights();
    yellowLight.style.backgroundColor = 'rgb(255, 255, 0)';
    readyButton.style.backgroundColor = 'rgb(255, 255, 0)';
})

goButton.addEventListener('click', function(){
    resetLights();
    greenLight.style.backgroundColor = 'rgb(0, 255, 0)';
    goButton.style.backgroundColor = 'rgb(0, 255, 0)';
})