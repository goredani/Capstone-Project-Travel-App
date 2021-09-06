
// function geoService() {
//             new Promise(function(resolve, reject) {
//             const geoUser = () => {
//                 fetch("http://localhost:8088/geoUser").then(res => {
//                     return res.text();
//                 }).then(data => {
//                     console.log(data);
//                     results.innerHTML = JSON.stringify(data);
//                 });
//             }
//             const baseURL = "http://api.geonames.org/postalCodeSearchJSON?placename=";
//             const LocationRows = "&maxRows=1&";
            
//             const getLocation = async (baseURL, city, LocationRows, geoUser) => {
//             const res = await fetch(baseURL+city+LocationRows+geoUser) 
//             try {
//             const data = await res.json();
//             if (data.postalCodes.length == 0) {
//                 alert("valami szar van a cimmel");
//             } else {
//                 console.log(data);
//                 results.innerHTML = JSON.stringify(data); 
//             }
        
//             }catch(error) {
//                 console.log("error", error);
//                 // appropriately handle the error
//             }
//             resolve(getLocation(baseURL,"Las Vegas", LocationRows, geoUser));
//         }
        
// });
// }

function geoService() {
    new Promise(function(resolve, reject) {
                    const geoUser = "ovdaldk";
                    const baseURL = "http://api.geonames.org/postalCodeSearchJSON?placename=";
                    const LocationRows = "&maxRows=1&";
                    
                    const getLocation = async (baseURL, city, LocationRows, geoUser) => {
                    const res = await fetch(baseURL+city+LocationRows+geoUser) 
                    try {
                    const data = await res.json();
                    if (data.postalCodes.length == 0) {
                        alert("valami szar van a cimmel");
                    } else {
                        console.log(data);
                        results.innerHTML = JSON.stringify(data); 
                    }
                
                    }catch(error) {
                        console.log("error", error);
                        // appropriately handle the error
                    }
                    resolve(getLocation(baseURL,"Las Vegas", LocationRows, geoUser));
                }
                
        });
}

export {geoService}
