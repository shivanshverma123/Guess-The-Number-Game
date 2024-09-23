'use strict';

let randomNumber = Math.round(Math.random()*100+1);
console.log(randomNumber);
let inputValue;
let score = Number(document.querySelector(".score").textContent);




document.querySelector(".check").addEventListener("click", function(){
    inputValue = Number(document.querySelector(".guess").value);
    console.log("Input value : " + inputValue);
    console.log("Initial Score : " + 20);
    
    //When Player wins

    if(randomNumber === inputValue){
        document.querySelector(".message").textContent = "Correct Answer!";
        document.querySelector("body").style.backgroundColor = "#60b347"
        if (score >= Number(document.querySelector(".highscore").textContent)){
            document.querySelector(".highscore").textContent = score;
        }
    }else{
        
        //When player loses

        document.querySelector(".score").textContent  = score - 1;
        score = Number(document.querySelector(".score").textContent)
        console.log(`Score: ${score}`)
        if (score===0){
            document.querySelector(".message").textContent = "Game Over";
            document.querySelector(".check").disabled = true;
            return;
        }
        if(inputValue < randomNumber){
            document.querySelector(".message").textContent = "Too Low!";
        } else{
            document.querySelector(".message").textContent = "Too High!";
        }
    }
});

document.querySelector(".again").addEventListener("click", function(){
    randomNumber = Math.round(Math.random()*100+1); 
    score = document.querySelector(".score").textContent = 20;
    document.querySelector("body").style.backgroundColor = "#222222";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".check").disabled = false;
    document.querySelector(".guess").value = undefined;
})

//Does not work for some reason

// let check = function(generatedRandomNumber){
//     inputValue = Number(document.querySelector(".guess").value);
//     score = document.querySelector(".score").textContent;
//     if(generatedRandomNumber === inputValue){
//         document.querySelector(".message").textContent = "Correct Answer!";
//         document.querySelector(".highscore").textContent = score;
//     }else{
//         document.querySelector(".score").textContent  = score - 1;
//         if(inputValue < generatedRandomNumber){
//             document.querySelector(".message").textContent = "Too Low!";
//         } else{
//             document.querySelector(".message").textContent = "Too High!";
//         }
//    }
// };

// document.querySelector(".check").addEventListener("click", check(randomNumber));


