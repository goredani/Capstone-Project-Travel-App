
function results(cityName, temperature, image, arrivalDate, leaveDate, days, stayTime) {

    const results = document.getElementById("entryHolder");
    let card = document.createElement("div");
    
    card.classList.add("card");

    let content = document.createElement("div");
    content.innerHTML = `<div class="text">
                            <div class="title">${cityName}</div>
                            <div><h5>Expected temperature:</h5> <p>${temperature} °C</p></div>
                            <div><h5>Arrival date:</h5><p>${arrivalDate}</p></span></div>
                            <div><h5>Leave date:</h5> <p>${leaveDate}</p></span></div>
                            <div><h5>Days remaining:</h5><p>${days.toFixed(0)} days</p> </div>
                            <div><h5>You will stay for:</h5><p>${stayTime.toFixed(0)} days</p> </div>
                        </div>
                        <div class="image">  
                            <img src="${image}" alt="${cityName}">
                        </div>
                    `;
    content.classList.add("content");
    
    card.appendChild(content);
    results.appendChild(card);
    
}

export {results}