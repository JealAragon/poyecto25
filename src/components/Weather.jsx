import { useState } from "react"
import { KelvinToCelsius, KelvinToFahrenheit } from "../assets/utils/temp"


const Weather = ({weatherInfo}) => {

    const [isCelsius, setisCelsius] = useState(true)

    const handleChangeTemp = () => {
        setisCelsius(!isCelsius)
    }

    const weatherImages = {
        "01d": "/images/weather/clearSky.png",
        "02d": "/images/weather/fewClouds.png",
        "03d": "/images/weather/scatteredClouds.png",
        "04d": "/images/weather/brokenClouds.png",
        "09d": "/images/weather/showerRain.png",
        "10d": "/images/weather/rain.png",
        "11d": "/images/weather/thunderstorm.png",
        "13d": "/images/weather/snow.png",
        "50d": "/images/weather/mist.png",

        "01n": "/images/weather/clearSkyN.png",
        "02n": "/images/weather/fewCloudsN.png",
        "03n": "/images/weather/scatteredClouds.png",
        "04n": "/images/weather/brokenClouds.png",
        "09n": "/images/weather/showerRain.png",
        "10n": "/images/weather/rain.png",
        "11n": "/images/weather/thunderstorm.png",
        "13n": "/images/weather/snow.png",
        "50n": "/images/weather/mist.png",
    }



  return (
    <section className="text-center grid gap-6">
        <h2 className="font-bold text-2l"> {weatherInfo?.name}, {weatherInfo?.sys.country } </h2>
        <section  className="grid gap-4 sm:grid-cols-[1fr_auto]">
                {/*seccion arriba*/}
            <article className="bg-white/70 p-2  rounded-3xl grid grid-cols-2 items-center "  >
                <h3 className="col-span-2 capitalize">{weatherInfo?.weather[0].description}</h3>

                <span className="text-4xl">{isCelsius ? `${KelvinToCelsius(weatherInfo?.main.temp)}`: `${KelvinToFahrenheit(weatherInfo?.main.temp)}`}</span>

                <div>
                    <img src={weatherImages[weatherInfo?.weather[0].icon]}/>
                </div>
            </article>
                 {/*seccion abajo*/}
        <section className="bg-white/70 p-2  py-6 rounded-3xl grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center">
            <article className="flex gap-2 sm:items-center">
                <div>
                    <img src="/images/wind.png" alt="" />
                </div>
                <span>{weatherInfo?.wind.speed}m/s</span>
            </article>
            <article className="flex gap-2 sm:items-center">
                <div>
                    <img src="/images/humidity.png" alt="" />
                </div>
                <span>{weatherInfo?.main.humidity}%</span>
            </article>
            <article className="flex gap-2 sm:items-center">
                <div>
                    <img src="/images/pressure.png" alt="" />
                </div>
                <span>{weatherInfo?.main.pressure}hPa</span>
            </article>

        </section>

        </section  >
            <button className="bg-red-700 rounded-full px-6 py-4 shadow-sm font-principal-font "  onClick={handleChangeTemp} >CHANGE F/C</button>
           

    </section>
  )
}

export default Weather