// We load the necessary user names and API keys from our server

function getAccessUser(destination, arrivalDate, leaveDate) {
    
    new Promise(function(resolve, reject) {
        const getGeoAccess = async () => {
            const geoRes = await fetch(`http://localhost:8088/geoUser`) 
            const weatherRes = await fetch(`http://localhost:8088/WeatherAPIKey`) 
            const imageRes = await fetch(`http://localhost:8088/pixaBayAPIKey`) 
            try {
                const geoAcc = await geoRes.text();
                const weatherAcc = await weatherRes.text();
                const imageAcc = await imageRes.text();
                Client.geoService(destination, arrivalDate, leaveDate, geoAcc, weatherAcc, imageAcc);
                
                //const sunrise = data.data[0].sunrise;
                //const sunset = data.data[0].sunset;
                
                
            }  catch(error) {
                console.log("error", error);  
            }
        }
        resolve(getGeoAccess());
        
    })
 }




 export {getAccessUser}