const getDate = (lat, lng, cityName, arrivalDate, leaveDate, weatherAcc, imageAcc) => {
    
    const travelDate = new Date(arrivalDate);
    const exitDate = new Date(leaveDate);
    const today = new Date();

    let stayTime = (Math.abs(exitDate-travelDate))/(1000 * 3600 * 24);
    
    let difference= Math.abs(travelDate-today);

    if (today > travelDate) {
        alert("It seems you're trying to travel in the past. :) Please use a date in the future!")
    } else {
        let days = difference/(1000 * 3600 * 24);
        
    
        if (days > 7) {
            
            let weatherURL = "https://api.weatherbit.io/v2.0/forecast/daily?";
            Client.weatherService(lat, lng, cityName, weatherURL, arrivalDate, leaveDate, days, stayTime, weatherAcc, imageAcc);
            //return ;
            
        } else {
            let weatherURL = "https://api.weatherbit.io/v2.0/current?";
            Client.weatherService(lat, lng, cityName, weatherURL, arrivalDate, leaveDate, days, stayTime, weatherAcc, imageAcc);
            
        }
    }
}

export {getDate}