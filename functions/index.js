startProgram(); // Runs the program

function startProgram() {
    let userName = "Vardenis";
    let age = 25;

    happyBirthday(userName, age);
}


function happyBirthday(userName, age){ // user name and age could be passed as different variables here, in example a, b 
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", userName);
    console.log("Happy birthday to you!");
    console.log("You are", age, "years old");
}