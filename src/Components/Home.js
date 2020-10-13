import React from 'react';
import sunny from '../Assets/sunny.svg';
import './Home.css';

const WEATHER_API_BASE_URL = 'http://api.weatherstack.com';
const WEATHER_API_KEY = '4dd7f264360a8f1ba133a948a58ef00e';

function Home() {
    const [weatherData, setWeatherData] = React.useState(null);

    // Extract the fetch into a reusable function that takes in an parameter query
    // Use the function inside useEffect and pass the query argument as Ghana
    // Use the function inside your search bar submit handler and pass the query argument as the text entered

    React.useEffect(() => {
        fetch(`${WEATHER_API_BASE_URL}/current?access_key=${WEATHER_API_KEY}&query=ACCRA`)
            .then(res => res.json())
            .then(result => {
                setWeatherData(result);
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (

<div className="homeSection">

<div className="aside-left">
<h1>Get accurate weather forecast here.</h1>
<img src={sunny} alt="" />
<p>Weather forecase for the day is displayed 24/7 and is automatically refreshed.</p>

</div>

<div className="aside-right">
<h3>{weatherData ? weatherData.current.locations : ''}</h3>
   <p> {weatherData ? weatherData.current.weather_descriptions : ['']}</p>
    <p className="p-Degree"> {weatherData ? weatherData.current.temperature : ''} <span className="degree">&#8451;</span></p>
    <img src={weatherData ? weatherData.current.weather_icons : ''} alt="m" />
    <p> {weatherData ? weatherData.current.observation_time : [``]}</p>
</div>


</div>


    );
    
}

export default Home;