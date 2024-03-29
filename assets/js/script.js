//Wait for the DOM to load before running the game 

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else {
                let gameType= this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            checkAnswer();
        }
    })
    runGame("addition")
})


function runGame(gameType){
document.getElementById("answer-box").value = "";
document.getElementById("answer-box").focus();

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === 'subtract') {
        displaySubtractionQuestion(num1, num2);}
        else if (gameType === 'multiply') {
            displayMultiplicationQuestion(num1, num2);}
            else if (gameType === 'division') {
                let num1 = Math.floor(Math.random() * 100) + 1;
                let num2 = Math.floor(Math.random() * 20) + 1;
                if (num1 > num2 && num1 % num2 === 0){
                displayDivisionQuestion(num1, num2);
                } else {
                    runGame(gameType);
                }
            }

    
    else {
        alert(`Unknown Game type: ${gameType}`);
        throw `Unknown Game type: ${gameType} Aborting.`
    }
}

/** Checks the user answer against the calculated value and returns true or false. */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect) {
        alert("You are correct :)")
        incrementScore();
    } else {
        alert(`Incorrect, sorry the correct answer is ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"]
        
    } else if(operator === "-"){
        return [operand1 - operand2, "subtract"]

    } else if(operator === "x"){
        return [operand1 * operand2, "multiply"]

    } else if(operator === "/"){
        return [Math.floor(operand1 / operand2), "division"]
    }

        else {
        alert(`Unknown operator ${operator}`)
        throw `Unknown operator ${operator}. Aborting.`
    }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText= ++oldScore;

}


/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText= ++oldScore;

}


function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "-";
    
}

function displayMultiplicationQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function displayDivisionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
}