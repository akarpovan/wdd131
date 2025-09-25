const temperature = 10;
const windSpeed = 5;

function calculateWindChill(temp, wind) {
    // Formula for wind chill in metric units (°C)
    if (temp <= 10 && wind > 4.8) {
        return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16))).toFixed(1) + "°C";
    } else {
        return "N/A";
    }
    /*const computeWindChill = function(windSpeed, temperature) {
        // Fahrenheit Only
        return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
      };*/
}

document.getElementById('wind-chill').textContent = calculateWindChill(temperature, windSpeed);

// Función for icon weather
function handleWeatherIcon() {
    const weatherIcon = document.querySelector('.weather-icon');
    if (window.innerWidth < 768) {
        weatherIcon.style.display = 'inline-block';
    } else {
        weatherIcon.style.display = 'none';
    }
}

window.addEventListener('load', handleWeatherIcon);
window.addEventListener('resize', handleWeatherIcon);