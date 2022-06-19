const weather=document.querySelector('#weather');
const API_KEY = 'b5d2d2bbbe73a58e08fc9b69e5caf913'
const SETPOSITION ='setPosition';
function getWeather(lat, lng){
    //console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    }).then(function(json){
        const temperature= json.main.temp; //온도
        const city = json.name; // 지역        
        const img = `<img src="http://openweathermap.org/img/w/${json.weather[0].icon}.png" alt=${json.weather[0].description}>`;       
        weather.innerHTML = `${img} <span>${temperature}℃ ${city}</span>`; 
    });
}

function positionOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const coords={
        lat,
        lng
    };
    getWeather(lat,lng);
    savePosition(coords);
}
function positionError(){
    console.log("Can't find you. No weather for you")
}
function savePosition(coords){
    localStorage.setItem(SETPOSITION, JSON.stringify(coords));
}
function init(){
    const loadPositon = localStorage.getItem(SETPOSITION);    
    if(loadPositon === null){
        navigator.geolocation.getCurrentPosition(positionOk,positionError)
    }else{
        const loadCoords = JSON.parse(loadPositon); 
        getWeather(loadCoords.lat,loadCoords.lng);
    }
    
}
init()