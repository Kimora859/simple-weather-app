const searchBox = document.getElementById("locationInput");
const search = document.getElementById("searchButton");

// Add event listener to search box for 'keypress' event
searchBox.addEventListener("keypress", function(event) {
  // Check if Enter key was pressed (key code 13)
  if (event.keyCode === 13) {
    search.click();
  }
});

// Fetching Weather Data
const apiKey = "8735d9072a9baa02e1f282c8fd33f5fb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

// Accessing User Input
searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

// Constructing the API Request URL
function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

//   Fetching Data from the API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationElement.textContent = data.name;
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      description.textContent = data.weather[0].description;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}