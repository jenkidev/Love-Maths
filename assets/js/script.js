//Wait for the DOM to load before running the game 

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") == "submit"){
                alert("You clicked submit!");
            } else {
                let gameType= this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})


function runGame(){
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer(){
    
}

function calculateCorrectAnswer(){
    
}

function incrementScore(){
    
}

function incrementWrongAnswer(){
    
}

function displayAdditionQuestion(){
    
}

function displaySubtractionQuestion(){
    
}

function displayMultiplicationQuestion(){
    
}

function displayDivisionQuestion(){
    
}