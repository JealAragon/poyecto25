
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'

function App() {

  const [weaterInfo, setweaterInfo] = useState(null)

  const success =(pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = '4cf0297ee469626dcb9216c184b49581'
    const URL =` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
   
    axios.get(URL)
    .then(({data})=> setweaterInfo(data))
    .catch((err) => console.log(err))
  }


  useEffect(() => {
   navigator.geolocation.getCurrentPosition(success)

  }, [])
  
  
  return (
    <main className= 'fontImg min-h-screen text-white flex justify-center items-center font-principal-font p-2'>
     
    <Weather weatherInfo={weaterInfo}> </Weather>
    

    </main>
  )
}

export default App