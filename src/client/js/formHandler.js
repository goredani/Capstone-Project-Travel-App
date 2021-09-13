// We handle the form inputs in this function

function formHandler(event) {
    event.preventDefault();


    let destination = document.getElementById('destination').value;
    let arrivalDate = document.getElementById('arrivalDate').value
    let leaveDate = document.getElementById('leaveDate').value

    
    Client.getAccessUser(destination, arrivalDate, leaveDate);
    

    
}
 export {formHandler}