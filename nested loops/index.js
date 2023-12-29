// short intro to nested loops
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        console.log(j);
        // this will return 3 times (i) of 123 (j) = i * j = 3 * 123
    }
}


// drawing of rectangle
let symbol = window.prompt('Enter a symbol to use');
let rows = window.prompt('Enter # of rows: ');
let columns = window.prompt('Enter # of columns: ');

for(let i = 1; i <= rows; i++){
    for(let j = 1; j <= columns; j++){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}


