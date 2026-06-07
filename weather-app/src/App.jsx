import { useState } from 'react'
import './index.css'
import WeatherCard from './components/WeatherCard'
import cloud from "./assets/Cloud.mp4"

function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [cityName, setCityName] = useState("")
  const [error, setError] = useState("")



  async function searchWeather() {
    setLoading(true)
    setError("")
    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      )
// C:\Users\NIRAV\OneDrive\Desktop\React-New\weather-app
      const geoData = await geoResponse.json()

      if (!geoData.results) {

        setError("City Not Found")
        setLoading(false)

        return
      }

      const latitude = geoData.results[0].latitude
      const longitude = geoData.results[0].longitude
      setCityName(geoData.results[0].name)
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
      )

      const weatherData = await weatherResponse.json()
      console.log(weatherData)
      setWeather(weatherData)
      setLoading(false)


    }
    catch (error) {
      console.log("Error fetching weather data")

    }

  }

  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src={cloud} type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-black/40"></div>
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center gap-5">

        <h1 className="text-5xl font-bold text-white mb-2">
          Weather App
        </h1>


        <input
          type="text"
          placeholder='Enter city name'
          value={city}
          onChange={(e) => setCity(e.target.value)
          }
          onKeyDown={(e) => {

            if (e.key === "Enter") {
              searchWeather()
            }

          }}
          className="px-4 py-3 rounded-lg w-80 bg-white text-black"
        ></input>
        <button onClick={searchWeather} className='bg-cyan-500 px-3 py-3 rounded-lg font-semibold'>
          Search
        </button>
        {error && (
          <p className="text-red-500 text-2xl font-semibold">
            {error}
          </p>
        )}

        {
          loading && (
            <p className='text-white'>Loading...</p>
          )
        }



        <WeatherCard W1={weather} cityName1={cityName} />
      </div>

    </div>
  )
}

export default App