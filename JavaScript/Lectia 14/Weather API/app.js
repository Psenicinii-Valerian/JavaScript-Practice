// fa9004bb33573ddc82e6f9908c28a1f8
const cityInput = document.getElementById("city");
const weatherContainer = document.getElementById("weather");

async function getWeather(city){
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}
                            &appid=fa9004bb33573ddc82e6f9908c28a1f8`)
    const data = await res.json();
    weatherContainer.innerHTML = `
        <h1>City name: ${data.name}, ${data.sys.country}</h1>
        <p>Temperature: ${Math.round(data.main.temp - 273.5)}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Visibility: ${data.visibility}m</p>
    `;
}

// e - parametru folosit de obicei pentru event object
cityInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && cityInput.value.length >= 3) {
        getWeather(cityInput.value);
    }
});