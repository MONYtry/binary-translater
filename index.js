// Hilfs Arrays für vereinfachteren Ablauf
const bit = [128, 64, 32, 16, 8, 4, 2, 1];
const currentDisplay = [];

function startBinaryCalculation() 
{
    // Holt benötigte Elemente
    const raw_input = document.getElementById("inputfield");
    
    // Löscht alles
    whipeData();
    
    try 
    {
        // Versucht alle Buchstaben zu teilen
        var input = raw_input.value.split('');
        
        //  Holt sich für jeden Buchstaben die angegebe Dezimalzahl
        for (let i = 0; i < input.length; i++) 
        {
            getBinary(input[i]);
        } 
    }

    catch (error) 
    {
        console.log("Fehler: " + error);
    }
}

function getBinary(charArray) 
{
    let currentChar = charArray.charCodeAt(0);
    
    // Bessere Übersicht
    clearcurrentDisplay();

    // Geht durch jeden verfügbaren Bit 
    for (let i = 0; i < bit.length; i++)
    {
        // Wenn currentChar größer oder gleich ist 
        if (currentChar >= bit[i]) {
            
            // Subtrahieren und danach damit weiter rechen
            currentChar -= bit[i];
            
            // Fügt es dem Display-Array hinzu
            currentDisplay.push("1");
        }
        // Wenn es nicht geht 0 speichern
        else {
            currentDisplay.push("0");
        }
    }
    addDisplay();
}

function addDisplay() {
    // Fügt den Wert hinzu
    // Es wird alles unnötige durch join("") entfernt
    const raw_input = document.getElementById("inputfield").value;
    
    if (raw_input.length == 1)
    {
        display.value += currentDisplay.join("");
        clearcurrentDisplay();
        return;    
    }

    display.value += currentDisplay.join("") + " ";
    clearcurrentDisplay();
}

function clearcurrentDisplay() {
    currentDisplay.length = 0;    
}

function whipeData()
{
    const raw_input = document.getElementById("inputfield");

    display.value = "";
    raw_input.value = "";
}

function binaryToText()
{
    const inputfield = document.getElementById("inputfield");
    var binaryTextInput = inputfield.value.split(" ");

    // Binary-Block
    for (var i = 0; i < binaryTextInput.length; i++)
    {
        var Dezimalzahl = 0;

        // Macht aus dem Block einzelne Nummern
        var number = binaryTextInput[i].split("");
        
        // Binary-Numbers
        for (var j = 0; j < bit.length; j++)
        {
            if (number[j] == 1)
            {
                Dezimalzahl += bit[j];
            }
        }
        console.log(String.fromCharCode(Dezimalzahl));
        currentDisplay.push(String.fromCharCode(Dezimalzahl));
    }
    addDisplay();
}

var textToBinary = true;
function changeWay()
{
    clearcurrentDisplay();
    whipeData();

    textToBinary = !textToBinary;


    var wayText = textToBinary ? "Text 🔁 Binary" : "Binary 🔁 Text"
    document.getElementById("wayText").textContent = wayText;
    
    applyLanguage();
    
    if (textToBinary)
    {
        document.getElementById("binarytransalteButton").onclick = startBinaryCalculation;
        return;
    }

    document.getElementById("binarytransalteButton").onclick = binaryToText;
}

var isDE = true;

const translations  = {
        DE: 
        {
            title: "Maschinen Code Übersetzer",
            resultPlaceholder: "Dein Ergebnis...",
            textPlaceholder: "Gebe deinen Text an...",
            binaryPlaceholder : "Gebe deinen Binär-Code an...",
            buttonPlaceholder: "🔁Übersetze"
        },

        EN: 
        {
            title: "Binary Translater",
            resultPlaceholder: "Your result...",
            textPlaceholder: "Enter your Text...",
            binaryPlaceholder : "Enter your Binary-Text...",
            buttonPlaceholder: "🔁Translate"
        }
    };

function changeLanguage()
{   
    // Flips the bool 
    isDE = !isDE;
    
    applyLanguage();
}


function applyLanguage()
{
    // Ternary Operator
    const lang = isDE ? "DE" : "EN";

    // Website
    document.getElementById("website_title").textContent = translations[lang].title;
    
    
    // Buttons
    document.getElementById("translateButton").textContent = lang;
    document.getElementById("binarytransalteButton").textContent = translations[lang].buttonPlaceholder;

    
    document.getElementById("display").placeholder = translations[lang].resultPlaceholder;


    if (textToBinary)
    {
        document.getElementById("inputfield").placeholder = translations[lang].textPlaceholder;
    }
    else
    {
        document.getElementById("inputfield").placeholder = translations[lang].binaryPlaceholder;
    }
}

applyLanguage();
