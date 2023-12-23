let x;
let y;
let z;
let showDiceBorder = document.getElementsByClassName("dice");

document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;

    for (let i = 0; i < showDiceBorder.length; i++) {
        showDiceBorder[i].style.display = "";
    }
    
}

document.getElementById("clearButton").onclick = function(){
    location.reload();
}

