const WeatherAPIKey = () => {
    fetch("http://localhost:8088/WeatherAPIKey").then(res => {
        return res.text();
    }).then(data => {
        results.innerHTML = JSON.stringify(data);
    });
}

export {WeatherAPIKey}