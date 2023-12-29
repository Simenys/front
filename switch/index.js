// switch statements

let grade = "Moron";

switch(grade){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    default:
        console.log(grade, "is not a letter grade");
}

let numberGrade = 95;

switch(true){
    case numberGrade >= 90:
        console.log("You did great!");
        break;
    case numberGrade >= 80:
        console.log("You did good!");
        break;
    case numberGrade >= 70:
        console.log("You did okay!");
        break;
    default:
        console.log(numberGrade, "is not a number grade");
}