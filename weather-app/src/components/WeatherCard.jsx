function WeatherCard({ W1, cityName1 }) {

  if (!W1) {
    return null
  }

  let weatherIcon = "☀️"
  let weatherCondition = "Clear"

  const code = W1.current.weather_code

  if (code === 0) {
    weatherIcon = "☀️"
    weatherCondition = "Clear Sky"
  }
  else if (code <= 3) {
    weatherIcon = "☁️"
    weatherCondition = "Cloudy"
  }
  else if (code >= 61 && code <= 67) {
    weatherIcon = "🌧️"
    weatherCondition = "Rainy"
  }
  else if (code === 95) {
    weatherIcon = "⛈️"
    weatherCondition = "Thunderstorm"
  }

  return (

    <div className="bg-white/10 backdrop-blur-md-4 border border-white/20 rounded-3xl p-8 w-[350px] shadow-2xl text-white ">

      <h2 className="text-2xl font-semibold text-center mb-4">
        📍{cityName1}
      </h2>
      <div className="text-center mb-3">

        <div className="text-3xl">
          {weatherIcon}
        </div>

        <p className="text-gray-300 mt-2">
          {weatherCondition}
        </p>

      </div>
      <h2 className="text-4xl font-bold text-center mb-4">
        {W1.current.temperature_2m}°C
      </h2>

      <div className="space-y-3 text-md">

        <p>
          Humidity: {W1.current.relative_humidity_2m}%
        </p>

        <p>
          Wind Speed: {W1.current.wind_speed_10m} km/h
        </p>

      </div>

    </div>

  )
}

export default WeatherCard