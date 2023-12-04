const searchInp = document.getElementById("searchInp");
const searchBtn = document.getElementById("searchBtn");
const showBtn = document.getElementById('show');
const logo = document.getElementById("logo");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const lat = document.getElementById("lat");
const lon = document.getElementById("lon");
const aqi = document.getElementById("aqi");
const des = document.getElementById("des");
const disp = document.getElementById("display");
const err = document.getElementById("error");

disp.style.display = "none";

const fetchWeather = (url) => {
    fetch(url)
        .then(data => data.json())
        .then(json => {
            err.style.display = "none";
            disp.style.display = "block";
            logo.src = `https://www.weatherbit.io/static/img/icons/${json.data[0].weather.icon}.png`;
            city.innerHTML = "&nbsp;&nbsp;" + json.data[0].city_name;
            temp.innerHTML = "&nbsp;&nbsp;" + json.data[0].temp + " °C";
            lat.innerHTML = "&nbsp;&nbsp;" + json.data[0].lat.toFixed(4);
            lon.innerHTML = "&nbsp;&nbsp;" + json.data[0].lon.toFixed(4);
            aqi.innerHTML = "&nbsp;&nbsp;" + "<a href='./AirQualityIndex.png' target='_blank'>" + json.data[0].aqi + "</a>";
            des.innerHTML = "&nbsp;&nbsp;" + json.data[0].weather.description;
        })
}

window.onload = () => {
    err.style.display = "block";
    disp.style.display = "none";
    err.innerHTML = "<img src='./l1.gif'>";
    const urlData = `https://api.weatherbit.io/v2.0/current?city=vadodara&key=5d2e559182ee498080c119e7f1798b55`;
    fetchWeather(urlData);
}

function findCoordinates() {
    err.style.display = "block";
    disp.style.display = "none";
    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const urlData = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=5d2e559182ee498080c119e7f1798b55`;
        fetchWeather(urlData);
    }
    const error = () => {
        err.innerHTML = "Unable to retrieve live location!";
    }
    if (!navigator.geolocation) {
        err.innerHTML = "GeoLocation is not supported by your browser!";
    } else {
        err.innerHTML = "<img src='./l1.gif'>";
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

showBtn.addEventListener('click', findCoordinates);

searchBtn.addEventListener('click', () => {
    err.style.display = "block";
    disp.style.display = "none";
    err.innerHTML = "<img src='./l1.gif'>";
    const urlData = `https://api.weatherbit.io/v2.0/current?city=${searchInp.value.toLowerCase()}&key=5d2e559182ee498080c119e7f1798b55`;
    fetchWeather(urlData);
    searchInp.value = "";
})