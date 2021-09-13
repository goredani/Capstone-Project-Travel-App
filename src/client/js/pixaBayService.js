// Based on the destination we retrive an image

function pixaBayService(cityName, temperature, arrivalDate, leaveDate, days, stayTime, imageAcc) {
    
    new Promise(function(resolve, reject) {
        const getPic = async () => {
            const res = await fetch(`https://pixabay.com/api/?key=${imageAcc}&q=${cityName}&image_type=photo&per_page=3`) 
            try {
                let data = await res.json();
                if(data.hits == 0) {
                    // We load a placeholder image if we couldn't find anything
                    data = {"hits":[{"webformatURL":"https://via.placeholder.com/640"}]};
                    const image = data.hits[0].webformatURL;
                    Client.results(cityName, temperature, image, arrivalDate, leaveDate, days, stayTime);
                } else {
                    const image = data.hits[0].webformatURL;
                    Client.results(cityName, temperature, image, arrivalDate, leaveDate, days, stayTime);
                }   
                                
            }  catch(error) {
                console.log("error", error);  
            }
        }
        resolve(getPic());
    })
 }

 export {pixaBayService}