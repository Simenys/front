let userName = "Simonas";
let items = 25;
let total = 150;

let text = 
`Hello ${userName}<br>
You have ${items} in your cart<br>
Your total is $${total}<br>`;

document.getElementById("myLabel").innerHTML = text;