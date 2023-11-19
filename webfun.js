
//This section is used to create global variables that were used within the function
    const apiKey= "503b6ee3a0e89b6f08765c58feadbd98&";
    const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const getCity= document.querySelector(".city_search input");
    const getBtn= document.querySelector(".city_search button");
    const imgweather= document.querySelector(".img_weather");

//This function captures the weather values and icons codes for updating citys' weather
    async function my_weather(city){
        const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
       
// This function shows display and non-display action of invalid city name

        if (response.status== "404"){
            document.getElementById("error").style.display="block"
            document.getElementById("weather").style.display="none"
        }

        else{
            var data= await response.json();
            //The querySelector is used to update the weather values of cities
        document.querySelector(".city_name").innerHTML=data.name ;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp )+ "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

  //This section of code changes weather icons according to weather values of cities
        if(data.weather[0].main == "Clouds"){
            imgweather.src= "weather-cloudy.png";
        }
        else if(data.weather[0].main == "Clear"){
            imgweather.src= "weather-sunshine.png";
        }

        else if(data.weather[0]== "Drizzle"){
            imgweather.src= "weather-scattered-snow.png";}

        else if(data.weather[0].main =="Wind"){
                imgweather.src= "weather-windy.png";}

        else if(data.weather[0].main == "Snow"){
                    imgweather.src= "weather-snow.png";}
        
        else if(data.weather[0].main == "Rain"){
                imgweather.src= "weather-rainy.jpeg";
            }

 document.getElementById("weather").style.display="block";
 document.getElementById("error").style.display="none"
        }
        

// console.log(data);
    


    }
       


    // getBtn.addEventListener("click", ()=>{
    //     my_weather(getCity.value);
    // })
    
    //Jquery was used to call the function after addEventListener failed to work.
    $(document).ready(function (){
            $(getBtn).click(function(){
            my_weather(getCity.value);
        })

   })
   




