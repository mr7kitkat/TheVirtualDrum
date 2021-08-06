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