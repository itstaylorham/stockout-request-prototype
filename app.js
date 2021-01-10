const Error = () => {
    alert("This action is not supported in stockout request prototype.");
};


// Add Requests
let i = 0;
const addRequest = () => {
    i++;
    document.getElementById('requests').value = i;
    alert("A new request has been submitted.");
}

// Remove Requests
const removeRequest = () => {
    i--;
    document.getElementById('requests').value = i;

    if (document.getElementById('requests').value < 0) {
        document.getElementById('requests').value = 0;
         alert("Request count cannot be below zero.");
    } else {
    alert("A request has been removed.");
    }
}



var d = new Date();
document.getElementById("date").innerHTML = d;