function test() 
{
    const data = document.getElementById("inputfield");
    const display = document.getElementById("display");

    try 
    {
        var test = data.value.split('');
        console.log(test);
        display.value = "";
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

const bit = [128, 64, 32, 16, 8, 4, 2, 1];
const currentDisplay = [];

function getDec(charArray) 
{
    let zahl = charArray.charCodeAt(0);
    getBinary(zahl);
}


function getBinary(currentChar) 
{
    clearDisplay();

    for (let i = 0; i < bit.length; i++) {
        if (currentChar >= bit[i]) {
            console.log("1");
            currentChar -= bit[i];
            currentDisplay.push("1");
        }
        else {
            console.log("0");
            currentDisplay.push("0");
        }
    }
    addDisplay();
}

function addDisplay() {
    display.value += currentDisplay.join("") + " ";
    clearDisplay();
}

function clearDisplay() {
    currentDisplay.length = 0;    
}