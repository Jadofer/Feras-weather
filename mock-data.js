// mock-data.js - For GitHub Pages demo
const mockWeatherData = {
    'amman': {
        City: 'Amman',
        Country: 'JO',
        Temperature: 22.5,
        FeelsLike: 21.8,
        Humidity: 45,
        Pressure: 1013,
        WindSpeed: 3.2,
        Description: 'Sunny',
        Icon: '01d',
        Sunrise: new Date().setHours(6, 30, 0),
        Sunset: new Date().setHours(17, 45, 0),
        Date: new Date(),
        IsRealData: false,
        Message: 'Demo data for GitHub Pages. Deploy to Azure for real weather.'
    },
    'london': {
        City: 'London',
        Country: 'GB',
        Temperature: 12.3,
        FeelsLike: 11.5,
        Humidity: 78,
        Pressure: 1015,
        WindSpeed: 5.1,
        Description: 'Partly Cloudy',
        Icon: '02d',
        Sunrise: new Date().setHours(7, 45, 0),
        Sunset: new Date().setHours(16, 30, 0),
        Date: new Date(),
        IsRealData: false,
        Message: 'Demo data for GitHub Pages. Deploy to Azure for real weather.'
    },
    'riyadh': {
        City: 'Riyadh',
        Country: 'SA',
        Temperature: 32.8,
        FeelsLike: 31.5,
        Humidity: 25,
        Pressure: 1010,
        WindSpeed: 2.5,
        Description: 'Clear',
        Icon: '01d',
        Sunrise: new Date().setHours(5, 30, 0),
        Sunset: new Date().setHours(18, 15, 0),
        Date: new Date(),
        IsRealData: false,
        Message: 'Demo data for GitHub Pages. Deploy to Azure for real weather.'
    }
};

// Modified getWeather function for GitHub Pages
async function getWeatherGitHub(city = null) {
    const cityName = (city || document.getElementById('city').value.trim()).toLowerCase();
    const resultDiv = document.getElementById('result');
    
    if (!cityName) {
        alert('Please enter a city name');
        return;
    }
    
    // Update input field if button was clicked
    if (city) {
        document.getElementById('city').value = city;
    }
    
    resultDiv.innerHTML = '<p style="text-align: center;">🌤 Loading weather for <strong>' + cityName + '</strong>...</p>';
    
    // Simulate API delay
    setTimeout(() => {
        if (mockWeatherData[cityName]) {
            const data = mockWeatherData[cityName];
            displayWeather(data);
        } else {
            // Default data for unknown cities
            const defaultData = {
                City: cityName.charAt(0).toUpperCase() + cityName.slice(1),
                Country: 'Demo',
                Temperature: 20 + Math.random() * 15,
                FeelsLike: 18 + Math.random() * 10,
                Humidity: 30 + Math.floor(Math.random() * 50),
                Pressure: 1013,
                WindSpeed: 1 + Math.random() * 10,
                Description: ['Sunny', 'Cloudy', 'Partly Cloudy', 'Rainy'][Math.floor(Math.random() * 4)],
                Icon: '01d',
                Sunrise: new Date().setHours(6, 30, 0),
                Sunset: new Date().setHours(18, 30, 0),
                Date: new Date(),
                IsRealData: false,
                Message: 'Demo data for GitHub Pages. Deploy to Azure for real weather.'
            };
            displayWeather(defaultData);
        }
    }, 500);
}

function displayWeather(data) {
    const resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = `
        <h2 style="color: #2c3e50; text-align: center;">
            ${data.City}, ${data.Country}
            ${data.Country === 'JO' ? '🇯🇴' : ''}
        </h2>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 20px;">
            <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <strong style="color: #3498db; display: block; margin-bottom: 5px;">🌡 Temperature</strong>
                ${data.Temperature.toFixed(1)}°C
                <div style="font-size: 14px; color: #7f8c8d;">
                    Feels like: ${data.FeelsLike.toFixed(1)}°C
                </div>
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <strong style="color: #3498db; display: block; margin-bottom: 5px;">💧 Humidity</strong>
                ${data.Humidity}%
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <strong style="color: #3498db; display: block; margin-bottom: 5px;">☁️ Condition</strong>
                ${data.Description}
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <strong style="color: #3498db; display: block; margin-bottom: 5px;">💨 Wind Speed</strong>
                ${data.WindSpeed.toFixed(1)} m/s
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <strong style="color: #3498db; display: block; margin-bottom: 5px;">🌅 Sunrise</strong>
                ${new Date(data.Sunrise).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <strong style="color: #3498db; display: block; margin-bottom: 5px;">🌇 Sunset</strong>
                ${new Date(data.Sunset).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </div>
        </div>
        
        <div style="background: #fff3cd; color: #856404; padding: 15px; border-radius: 5px; margin-top: 20px; text-align: center;">
            <strong>⚠️ Demo Mode</strong>
            <p style="margin: 10px 0 0 0; font-size: 14px;">${data.Message}</p>
            <p style="margin: 5px 0 0 0; font-size: 14px;">
                <a href="https://azure.com" target="_blank" style="color: #0078d4;">Deploy to Azure for real weather data</a>
            </p>
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
            <button onclick="getWeatherGitHub('${data.City}')" style="background: #3498db; color: white; padding: 10px 20px; border: none; border-radius: 8px; cursor: pointer;">
                🔄 Refresh
            </button>
        </div>
    `;
}

// Initialize for GitHub Pages
document.addEventListener('DOMContentLoaded', function() {
    // Replace the original getWeather function
    window.getWeather = getWeatherGitHub;
    
    // Load default city
    getWeatherGitHub('Amman');
    
    // Update all button onclick events
    document.querySelectorAll('button[onclick*="getWeather("]').forEach(button => {
        const oldOnClick = button.getAttribute('onclick');
        const newOnClick = oldOnClick.replace('getWeather', 'getWeatherGitHub');
        button.setAttribute('onclick', newOnClick);
    });
    
    // Enter key support
    document.getElementById('city').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') getWeatherGitHub();
    });
});
