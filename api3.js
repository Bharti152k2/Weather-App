document.addEventListener("DOMContentLoaded", () => {
  let cityInfo = document.getElementById("cityInfo");
  let searchBtn = document.getElementById("searchBtn");
  let cityName = document.getElementById("cityName");
  let temperature = document.getElementById("temperature");
  let weatherDescription = document.getElementById("weatherDescription");
  console.log(searchBtn, cityInfo, cityName, temperature, weatherDescription);
  searchBtn.addEventListener("click", () => {
    let city = cityInfo.value;
    console.log(city);
    if (cityInfo != "") {
      getWeatherData(city);
    } else {
      console.log("Please enter your city name");
    }
  });
});
async function getWeatherData(city) {
  let apiKey = `358a8dc4cea7e294135d02b1f3259d19`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    let response = await fetch(apiUrl);
    console.log(response);
    let data = await response.json();
    console.log(data);
    if (data.cod === 200) {
      cityName.innerHTML = `City : ${data.name}`;
      temperature.innerHTML = `Temperature : ${data.main.temp}`;
      weatherDescription.innerHTML = `Weather Description : ${data.weather[0].description}`;
    }
  } catch (error) {
    console.log(`you API is not working ${apiUrl}`, error);
  }
}
