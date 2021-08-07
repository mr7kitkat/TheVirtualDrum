// For Desktop Devices
function keyOn(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    const divOn = document.querySelector(`div[data-key="${e.keyCode}"]`);
    divOn.classList.add('on');
}

function keyOff(e){
    const divOff = document.querySelector(`div[data-key="${e.keyCode}"]`);
    divOff.classList.remove('on');
}

window.addEventListener('keydown', keyOn);
window.addEventListener('keyup',keyOff);


// For Touch Screen Devices
function keyOnTouch(e){
    let touchedKey = e.srcElement.outerText.charCodeAt(0);
    touchedKey = touchedKey.toString();
   
    const audio = document.querySelector(`audio[data-key="${touchedKey}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    const divOn = document.querySelector(`div[data-key="${touchedKey}"]`);
    divOn.classList.add('on');
}

function keyOffOnTouch(e){
    let touchedKey = e.srcElement.outerText.charCodeAt(0);
    touchedKey = touchedKey.toString();

    const divOff = document.querySelector(`div[data-key="${touchedKey}"]`);
    divOff.classList.remove('on');
}

window.addEventListener('touchstart', keyOnTouch);
window.addEventListener('touchend', keyOffOnTouch);