const API_KEY = "4e84e8a8d236dc67e1f161e1f49bbc41";

function getWeather() {
  const weatherInfo = document.getElementById("weatherInfo");

  weatherInfo.innerHTML = "";

  const error = document.getElementById("error");
  error.innerHTML = "";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fetchWeatherData, shwError);
  } else {
    error.innerHTML = "Geolocation is not supported by this browser.";
  }
}
async function fetchWeatherData(position) {
  try {
    console.log(position);

    const { latitude, longitude } = position.coords;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const city = data.name;
    const weatherInfos = `<h2>Weather in ${city}</h2>
<h2>Temperature in ${city} is ${temperature}°C</h2>
<h2>Weather Description: ${weatherDescription}</h2>
`;

    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = weatherInfos;
  } catch (error) {
    const errorElement = document.getElementById("error");
    errorElement.innerHTML = "Something went wrong";
  }
}

function shwError(error) {
  console.log(error);
  const err = document.getElementById("error");

  switch (error.code) {
    case error.PERMISSION_DENIED:
      err.innerHTML = "User denied the request for Geolocation.";
      break;

    case error.POSITION_UNAVAILABLE:
      err.innerHTML = "Location information is unavailable.";
      break;

    case error.TIMEOUT:
      err.innerHTML = "The request to get user location timed out.";
      break;

    case error.UNKNOWN_ERROR:
      err.innerHTML = "Unknown Error Occurred";
      break;

    default:
      err.innerHTML = "Something Went wrong ! Try Again";
  }
}
