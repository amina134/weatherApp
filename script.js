// const options = {method: 'GET', headers: {accept: 'application/json'}};


// //this function to fetch weather data selon the city
// function fetchWeather(city){
//     const url = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=40w10ieKjVQR9wPnmZUMezqiZ3CwBgTq`
//     fetch(url)
//     .then(response=> response.json())
//     .then(data=>{
       
//     //njib les donnes lmatloubin

//     const temperature=data.data.values.temperature
//     const description=data.data.values.weatherCode
//     const humidity=data.data.values.humidity
//     const windSpeed=data.data.values.windSpeed

//     //use the dom

//     document.getElementById('cityName').innerText=city
//     document.getElementById('temperature').innerText=`${temperature}`
//     document.getElementById('description').innerText = ` ${description}`
//     document.getElementById('humidity').innerText = ` ${humidity}`
//     document.getElementById('windSpeed').innerText = ` ${windSpeed}`



//     }).catch(err=>{
//         console.error('Error fetching weather data:', err)
//     })
// }

// //event listner
// document.getElementById('searchButton').addEventListener('click',()=>{
//     const city=document.getElementById('cityInput').value
//     console.log('City input:', city)
//     if(city){
//         fetchWeather(city)
//     }else{
//         alert('no input')
//     }
// })




const apiKey = 'a03cf2cabcaa4353971164038230401';
 
function fetchWeather(city) {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=a03cf2cabcaa4353971164038230401&q=${city}&days=5&aqi=no&alerts=no`;

    fetch(url, { method: 'GET' })
        .then(response => {
           return response.json();
        })
        .then(data => {
           
            console.log(data);

            const temperature = data.current.temp_c; 
            const description = data.current.condition.text; 
            const humidity = data.current.humidity; 
            const windSpeed = data.current.wind_kph; 

            // Update the DOM with the fetched data
            document.getElementById('cityName').innerText = city;
            document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
            document.getElementById('description').innerText = `Weather: ${description}`;
            document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
            document.getElementById('windSpeed').innerText = `Wind Speed: ${windSpeed} km/h`;
        })
        .catch(err => {
            console.error('Error fetching weather data:', err);
            alert('Failed to fetch weather data. Please try again later.');
        });
}


document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    } else if (city =="") {
        alert('Please enter a city name.');
    }
    else {
       let  cityModified=removespace(city)
        fetchWeather(cityModified)
    }
});


function removespace(city){
    let res=''
    for(let i=0;i<city.length;i++){
        if( city[i]!=' '){
            res+=city[i]
        }
    }
    return res

}