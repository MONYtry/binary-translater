function test() 
{
    // Holt benötigte Elemente
    const data = document.getElementById("inputfield");
    const display = document.getElementById("display");

    try 
    {
        // Versucht alle Buchstaben zu teilen
        var test = data.value.split('');
        
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