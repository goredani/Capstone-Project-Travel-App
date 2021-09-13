function weatherService(lat, lng, cityName, weatherURL, arrivalDate, leaveDate, days, stayTime, weatherAcc, imageAcc) {
    
    new Promise(function(resolve, reject) {
        const getWeather = async () => {
            const res = await fetch(`${weatherURL}lat=${lat}&lon=${lng}&key=${weatherAcc}`) 
            try {
                const data = await res.json();
                const temperature = data.data[0].temp;
                //const sunrise = data.data[0].sunrise;
                //const sunset = data.data[0].sunset;
                Client.pixaBayService(cityName, temperature, arrivalDate, leaveDate, days,stayTime, imageAcc);
                
            }  catch(error) {
                console.log("error", error);  
            }
        }
        resolve(getWeather());
    })
 }

 export {weatherService}