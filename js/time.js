const nowtime = document.querySelector('#time');

function changeTime(obj){
    return String(obj).padStart(2,'0')
}
function getTime(){
    const date = new Date();
    let hours =  date.getHours();
    let minutes = date.getMinutes();   
    let seconds = date.getSeconds();
    let str='A.M'; 
    if(hours > 12){
        hours = hours - 12;
        str ="P.M"
    }
    nowtime.innerText = `${str} ${changeTime(hours)} : ${changeTime(minutes)} : ${changeTime(seconds)} `;
}

setInterval(getTime, 1000);
 