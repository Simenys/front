document.getElementById("submitButton").onclick = function () {
    let temp;

    if (document.getElementById("cButton").checked == true) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        //temp = toCelsius(temp);
        temp = temp.toLocaleString(en-US, {style: "unit", unit: "celsius"})
        document.getElementById("tempLabel").innerHTML = `${temp}`;
    }
    else if (document.getElementById("fButton").checked == true) {

    }
    else {
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }

}



function toCelsius(temp) {
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}