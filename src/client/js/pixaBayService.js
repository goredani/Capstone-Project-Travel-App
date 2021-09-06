const pixaBayAPIKey = () => {
    fetch("http://localhost:8088/pixaBayAPIKey").then(res => {
        return res.text();
    }).then(data => {
        results.innerHTML = JSON.stringify(data);
    });
}

export {pixaBayAPIKey}