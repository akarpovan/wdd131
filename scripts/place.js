const temperature = 10;
const windSpeed = 5;

function calculateWindChill(temp, wind) {
    // Formula for wind chill in metric units (°C)
    if (temp <= 10 && wind > 4.8) {
        return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16))).toFixed(1) + "°C";
    } else {
        return "N/A";
    }
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