let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');
let mPoint = document.querySelectorAll('.ponto');
let sPoint = document.querySelectorAll('.ponto--segundo');
let centerPoint = document.querySelector('.encaixe');
let btn = document.querySelector('.button--mode');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}
function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();

/* Script parte dos modos dark e light */
function changeMode() {
    let fundo = document.querySelector('body');
    let relogio = document.querySelector('.relogio');

    if(fundo.classList.contains('light')) {
        fundo.classList.remove('light');
        relogio.classList.remove('light');
        digitalElement.classList.remove('light');
        mElement.classList.remove('light');
        hElement.classList.remove('light');
        centerPoint.classList.remove('light');
        mPoint.forEach(item =>{
            item.classList.remove('light')
        });
        sPoint.forEach(item =>{
            item.classList.remove('light')
        });
        btn.classList.remove('light');
        btn.innerHTML = 'Light'
    } else {
        fundo.classList.add('light');
        relogio.classList.add('light');
        digitalElement.classList.add('light');
        mElement.classList.add('light');
        hElement.classList.add('light');
        centerPoint.classList.add('light');
        mPoint.forEach(item =>{
            item.classList.add('light')
        });
        sPoint.forEach(item =>{
            item.classList.add('light')
        });
        btn.classList.add('light');
        btn.innerHTML = 'Dark';
    }

}