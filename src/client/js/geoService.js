
 
 let geoService = async (destination, arrivalDate, leaveDate, geoAcc, weatherAcc, imageAcc) => {

            const res = await fetch(`http://api.geonames.org/postalCodeSearchJSON?placename=${destination}&maxRows=1&username=${geoAcc}`);
            try {
            const data = await res.json();
            if (data.postalCodes.length == 0) {
                alert("Please try a different city or a different name!")
            } else {
                const lat = data.postalCodes[0].lat;
                const lng = data.postalCodes[0].lng;
                const cityName = data.postalCodes[0].placeName;
                Client.getDate(lat, lng, cityName, arrivalDate, leaveDate, weatherAcc, imageAcc);
            }
        
            }catch(error) {
                console.log("error", error);
                alert("Please add a city!")
                }
}
 

 

export {geoService}
