const containerE1 = document.querySelector(".container");

const careers = ["software engineer", "web developer", "freelancer", "instructer"];

let careerIndex = 0

let characterIndex = 0;

updateText()

function updateText(){
    containerE1.innerHTML =  `<h1>I am ${careers[careerIndex].slice(0,1) === "i" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
    characterIndex++
    if(characterIndex === careers[careerIndex].length){
        careerIndex++
        characterIndex = 0
    }
    if(careerIndex === careers.length){
        careerIndex = 0;
    }
    setTimeout(updateText, 100);
}

