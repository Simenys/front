document.getElementById("myButton").onclick = function() {
    const myCheckBox = document.getElementById("myCheckBox").checked;
    const visaBtn = document.getElementById("visaBtn").checked;
    const mastercardBtn = document.getElementById("mastercardBtn").checked;
    const paypalBtn = document.getElementById("paypalBtn").checked;

    if(myCheckBox) {
        console.log("You are subscribed");
    }
    else {
        console.log("You are not subscribed");

    }

    if(visaBtn){
        console.log("You selected Visa payment card");
    }
    else if (mastercardBtn){
        console.log("You selected Master Card payment card");
    }
    else if(paypalBtn){
        console.log("You selected PayPal method");
    }
    else{
        console.log("You did not selected anything");
    }
}
