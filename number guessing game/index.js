const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function () {
    let guess = document.getElementById("guessField").value;
    guesses++;

    if (guess == answer) {
        alert(`${answer} is correct number. It took you ${guesses} guesses to make it right!`);
    }
    else if (guess < answer) {
        alert("Number is too small!");
    }
    else {
        alert("Number is too big!");
    }
}