document.getElementById("submitButton").onclick = function () {
    let temp;

    if (document.getElementById("cButton").checked == true) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        
        document.getElementById("tempLabel").innerHTML = `${temp}`;
    }
    else if (document.getElementById("fButton").checked == true) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);

        document.getElementById("tempLabel").innerHTML = `${temp}`;
    }
    else {
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }

}

// Convertion formulas
function toCelsius(temp) {
    temp = (temp - 32) * (5/9);
    temp = temp.toLocaleString(undefined, {style: "unit", unit: "celsius"})
    return temp;
}

function toFahrenheit(temp) {
    temp =  temp * 9 / 5 + 32;
    temp = temp.toLocaleString(undefined, {style: "unit", unit: "fahrenheit"})
    return temp;
}

// Code bellow resets all values
document.getElementById("resetButton").onclick = function () {
    document.getElementById("tempLabel").innerHTML = "";
    document.getElementById("cButton").checked = false;
    document.getElementById("fButton").checked = false;
    document.getElementById("textBox").value = "";
}



