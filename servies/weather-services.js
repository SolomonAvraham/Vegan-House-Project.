const weather = document.querySelector("#weather");
const api = `https://api.openweathermap.org/data/2.5/weather?q=TEL-AVIV&appid=85470bd4ed69b1bdaae5b623c875c6d7`;

async function getWeather() {
  try {
    return await fetch(`${api}`).then((response) => response.json());
  } catch (err) {}
}

function printWeather() {
  getWeather().then((response) => {
    for (const key in response) {
      let weatherData = `${Math.floor(response["main"]["temp"]) / 9.5}`;
      weather.innerHTML = `${response["name"]}
                <br> ${weatherData.slice(0, 2)} ℃`;
    }
  });
}
printWeather();
