const div = document.querySelector(".test");
const line = document.querySelector(".line");
const diary = document.querySelector(".diary")
const greeting = ">> Hallo, wollen wir ein Spiel spielen? ";
const answerRequest = ">> Ja / Nein";
const start = ">> Na gut, dann lass uns mal herausfinden, worauf du dich da eingelassen hast. Fangen wir mit einem einfachen Rätsel an.";
const breakOff = ">> Schade, bist du dir sicher? ... Naja, vielleicht ein anderes mal";
const questionMark = ">> ?";
const riddle1 = ">> Egal was im Weg mir steht, selbst wenn die Welt auch untergeht, ich laufe stets weiter. Was bin ich?";
const riddle2 = ">> Ich steh dir stets zur Seit', auch in allerschwerster Zeit. Doch verschwindet das Licht, so verschwind' auch ich. Was bin ich?";
const riddle3 = ">> Ich kann alles sein, was du dir vorstellen kannst. Ob leicht oder schwer, kurz oder lang und hab' dabei meist süßen Klang. Was bin ich?";
const breakLines = "<br>";
const response1 = ">> Bitte probieren Sie es noch einmal, geben Sie nur eine der oben genannten Antworten genau so ein.";
const response2 = ">> Hälst dich wohl für witzig, tja find ich nicht!";
const response3 = ">> Gibst du noch einmal etwas ein, was nicht dort oben steht, verweigere ich dir den Zugriff zu meinem Spiel!!";
const response4 = ">> Okay, jetzt reicht's! Ich hab dich gewarnt";
const answerCorrect1 = ">> Wow, ich bin beeindruckt, wie einfach das anscheinend für dich war. Aber wie sieht es mit dem nächsten aus?";
const answerCorrect2 = ">> Gleich das nächste richtig. Ich bin erstaunt über deine Fähigkeiten, Rätsel zu lösen. Nur noch eins und du erhälst eine Belohnung für deine Bemühungen.";
const answerCorrect3 = ">> Wow, alle drei Rätsel richtig! Dafür hast du dir jetzt aber wirklich was verdient";
const answerWrong = ">> Das war leider nicht richtig. Warum probierst du es nicht nochmal?";
let i = 0;
let userInputDisplay = document.querySelector(".userInput");
let input;


//Bei falscher Antwort Eingabe nicht möglich

document.addEventListener("click", function (e) {
    const input = document.getElementById("secretInput");
    if (!input) return; // Falls es noch keinen Input gibt
    if (input.focus()) return;

    // Wenn das angeklickte Element NICHT das Inputfeld ist
    if (e.target !== input) {
        input.focus();
    }
});

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight || document.documentElement.scrollHeight,
        behavior: "smooth" // optional: für sanftes Scrollen
    });
}

function textTypingEffect(div,element,i=0) {
    // if (i===0) {
    //     element.textContent = "";
    // }
    div.innerHTML += element[i];
    scrollToBottom()

    if (i === element.length - 1) {
        div.innerHTML += "<br>"
        return;
    }
    setTimeout(() => textTypingEffect(div,element,i+1), 100);
}


greet(div,greeting);



function greet(div,greeting) {
    textTypingEffect(div,greeting);
    setTimeout(() => {
        requestAnswer(div,answerRequest);
    }, 5000);
}


function requestAnswer (div,answerRequest) {
    textTypingEffect(div,answerRequest);

    setTimeout(() => {
        addInput(div);
    }, 1500);        

}


function addInput(div) {
    input = document.createElement("input"); // Erstelle ein Input-Element
    input.type = "text"; // Typ "text" festlegen
    div.appendChild(input); // Input in das div einfügen
    input.id = "secretInput";
    input.focus();
    getTextFromInput(input);
}

function addExtraInput(div) {
    input = document.createElement("input"); // Erstelle ein Input-Element
    input.type = "text"; // Typ "text" festlegen
    div.appendChild(input); // Input in das div einfügen
    input.id = "secretInput";
    input.focus();

    input.addEventListener("input", () => {
        userInputDisplay.textContent = input.value;
    });
}

function deleteInput() {
    input = document.getElementById("secretInput")
    input.remove();
}



function getTextFromInput(inputElement) {
    input = inputElement;


    input.addEventListener("input", () => {
        userInputDisplay.textContent = input.value;
    });

    document.addEventListener("keydown", controlAnswer1)
    
}

function controlAnswer1(e){
    const code = e.code || e.key; // Moderne Eigenschaft
    if (code === "Enter") { // Enter key
        if (userInputDisplay.textContent === "Ja") {
            div.innerHTML += "Ja <br>";
            textTypingEffect(div,start);
            input.value = "";
            userInputDisplay.textContent = "";
            askRiddles(div,userInputDisplay);
            return;
            
        } else if (userInputDisplay.textContent === "Nein") {
            div.innerHTML += "Nein <br>";
            textTypingEffect(div,breakOff);
            input.value = "";
            userInputDisplay.textContent = "";

            setTimeout(() => {
                textTypingEffect(div,questionMark);
                setTimeout(() => {
                    line.style.display = "none";
                }, 500);
            }, 8000);
        } else {
            if (i===0) {
                i++;
                input.addEventListener("input", () => {
                    userInputDisplay.textContent = input.value;
                });
                input.focus();
                setTimeout(() => {
                    input.value = "";
                    userInputDisplay.textContent = "";
                    textTypingEffect(div,response1);
                    deleteInput();
                }, 1);
                setTimeout(() => {
                    div.innerHTML += userInputDisplay.textContent + breakLines;
                }, 0.0001);
                setTimeout(() => {
                    addExtraInput(div);
                }, 12000);
                
            } else if (i===1) {
                input.addEventListener("input", () => {
                    userInputDisplay.textContent = input.value;
                });
                input.focus();
                setTimeout(() => {
                    input.value = "";
                    userInputDisplay.textContent = "";
                    textTypingEffect(div,response2);
                    deleteInput();
                }, 1);
                setTimeout(() => {
                    div.innerHTML += userInputDisplay.textContent + breakLines;
                }, 0.0001);
                setTimeout(() => {
                    addExtraInput(div);
                }, 7000);
                i++;
            } else if (i===2) {
                input.addEventListener("input", () => {
                    userInputDisplay.textContent = input.value;
                });
                input.focus();
                setTimeout(() => {
                    input.value = "";
                    userInputDisplay.textContent = "";
                    textTypingEffect(div,response3);
                    deleteInput();
                }, 1);
                setTimeout(() => {
                    div.innerHTML += userInputDisplay.textContent + breakLines;
                }, 0.0001);
                setTimeout(() => {
                    addExtraInput(div);
                }, 14000);
                i++;
            } else if (i===3){
                setTimeout(() => {
                    div.innerHTML += userInputDisplay.textContent + breakLines;
                }, 0.0001);
                setTimeout(() => {
                    textTypingEffect(div,response4);
                    input.value = "";
                    userInputDisplay.textContent = "";
                    deleteInput();
                }, 1);
                setTimeout(() => {
                    textTypingEffect(div,questionMark)
                    document.querySelector(".line").style.display = "none";
                }, 6000);
            }
        }
    }
}

function askRiddles(div) {
    document.removeEventListener("keydown",controlAnswer1);
    setTimeout(() => {
                        
        textTypingEffect(div,riddle1);
        deleteInput();
        setTimeout(() => {
            addExtraInput(div);
        }, 12000);

        document.addEventListener("keydown",askRiddle1);
    }, 14000);
}

function askRiddle1 (e) {
    const code = e.code || e.key; // Moderne Eigenschaft
            if (code === "Enter") {
                if (userInputDisplay.textContent === "Zeit") {
                    div.innerHTML += "Zeit <br>";
                    textTypingEffect(div,answerCorrect1);
                    askRiddle2(div);
                    input.value = "";
                    userInputDisplay.textContent = "";
                    deleteInput();
                } else {
                    div.innerHTML += userInputDisplay.textContent + breakLines;
                    textTypingEffect(div,answerWrong);
                    input.value = "";
                    userInputDisplay.textContent = "";
                    deleteInput();
                    setTimeout(() => {
                        addExtraInput(div);
                    }, 8000);
                }
            }
}

function askRiddle2(div) {
    document.removeEventListener("keydown",askRiddle1);
    setTimeout(() => {
        textTypingEffect(div,riddle2);
        setTimeout(() => {
            addExtraInput(div);
            document.addEventListener("keydown",controlRiddle2);
        }, 15000);
    }, 13000);
}

function controlRiddle2(e) {
    const code = e.code || e.key; // Moderne Eigenschaft
            if (code === "Enter") {
                if (userInputDisplay.textContent === "Schatten") {
                    div.innerHTML += "Schatten <br>";
                    textTypingEffect(div,answerCorrect2);
                    askRiddle3(div);
                    input.value = "";
                    userInputDisplay.textContent = "";
                    deleteInput();
                } else {
                    div.innerHTML += userInputDisplay.textContent + breakLines;
                    textTypingEffect(div,answerWrong);
                    input.value = "";
                    userInputDisplay.textContent = "";
                    deleteInput();
                    setTimeout(() => {
                        addExtraInput(div);
                    }, 8000);
                }
            }
}

function askRiddle3(div) {
    document.removeEventListener("keydown",controlRiddle2);
    setTimeout(() => {
        textTypingEffect(div,riddle3);
        setTimeout(() => {
            addExtraInput(div);
            document.addEventListener("keydown",controlRiddle3);
        }, 16500);
    }, 18000);
}

function controlRiddle3(e) {
    const code = e.code || e.key; // Moderne Eigenschaft
            if (code === "Enter") {
                if (userInputDisplay.textContent === "Rätsel") {
                    div.innerHTML += "Rätsel <br>";
                    textTypingEffect(div,answerCorrect3);
                    setTimeout(() => {
                        textTypingEffect(div,questionMark);
                        line.style.display = "none";
                        setTimeout(() => {
                            setTimeout(() => {
                                div.innerHTML = "";
                                diary.style.display = "flex";
                            }, 2500);
                        }, 1000);
                        
                    }, 10500);
                    input.value = "";
                    userInputDisplay.textContent = "";
                    deleteInput();
                    
                } else {
                    div.innerHTML += userInputDisplay.textContent + breakLines;
                    textTypingEffect(div,answerWrong);
                    input.value = "";
                    userInputDisplay.textContent = "";
                    deleteInput();
                    setTimeout(() => {
                        addExtraInput(div);
                    }, 8000);
                }
            }
}