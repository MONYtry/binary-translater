function startBinaryCalculation() 
{
    // Holt benötigte Elemente
    const data = document.getElementById("inputfield");
    const display = document.getElementById("display");
    
    try 
    {
        // Versucht alle Buchstaben zu teilen
        var test = data.value.split('');
        
        // Verhindert Nullpointer
        if (test.length == 0)
        {
            console.log("Kein Wert geben, abbruch!");
            return;
        }
        
        // Setzt den Display zurück
        display.value = "";
        
        //  Holt sich für jeden Buchstaben die angegebe Dezimalzahl
        for (let i = 0; i < test.length; i++) 
        {
            getDec(test[i]);
        }
    }

    catch (error) 
    {
        console.log("Fehler: " + error);
    }
}
// Hilfs Arrays für vereinfachteren Ablauf
const bit = [128, 64, 32, 16, 8, 4, 2, 1];
const currentDisplay = [];

function getDec(charArray) 
{
    // Holt sich die angegebene Zahl (Library von JS selbst)
    let zahl = charArray.charCodeAt(0);

    // Versucht aus der angegebenen Zahl eine Binäre zu holen
    getBinary(zahl);
}


function getBinary(currentChar) 
{
    // Bessere Übersicht
    clearDisplay();

    // Geht durch jeden verfügbaren Bit 
    for (let i = 0; i < bit.length; i++)
    {
        // Wenn currentChar größer oder gleich ist 
        if (currentChar >= bit[i]) {
            console.log("1");
            // Subtrahieren und danach damit weiter rechen
            currentChar -= bit[i];
            // Fügt es dem Display-Array hinzu
            currentDisplay.push("1");
        }
        // Wenn es nicht geht 0 speichern
        else {
            console.log("0");
            currentDisplay.push("0");
        }
    }
    addDisplay();
}

function addDisplay() {
    // Fügt den Wert hinzu
    // Es wird alles unnötige durch join("") entfernt
    display.value += currentDisplay.join("") + " ";
    clearDisplay();
}

function clearDisplay() {
    currentDisplay.length = 0;    
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
    clearDisplay();
    textToBinary = !textToBinary;

    var wayText = textToBinary ? "Text 🔁 Binary" : "Binary 🔁 Text"
    document.getElementById("wayText").textContent = wayText;
    
    if (textToBinary)
    {
        document.getElementById("binarytransalteButton").onclick = startBinaryCalculation;
        return;
    }

    document.getElementById("binarytransalteButton").onclick = binaryToText;
}

var isDE = false;
function changeLanguage()
{
    const translations  = {
        DE: 
        {
            title: "Maschinen Code Übersetzer",
            textPlaceholder: "Gebe deinen Text an",
            buttonPlaceholder: "🔁Übersetze"
        },

        EN: 
        {
            title: "Binary Translater",
            textPlaceholder: "Enter your Text",
            buttonPlaceholder: "🔁Translate"
        }
    };
    
    // Flips the bool 
    isDE = !isDE;
    
    // Ternary Operator
    const lang = isDE ? "DE" : "EN";

    applyLanguage(lang,translations);
}


function applyLanguage(lang, translations)
{
    // Website
    document.getElementById("website_title").textContent = translations[lang].title;
    document.getElementById("inputfield").placeholder = translations[lang].textPlaceholder;
    
    // Buttons
    document.getElementById("translateButton").textContent = lang;
    document.getElementById("binarytransalteButton").textContent = translations[lang].buttonPlaceholder;
}
