var lines;
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        lines = 'line';
    } else {
        lines = 'lines';
    }
    console.log(counter+" "+lines+" of code in the file.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+lines+" of code in the file.");
    }
    console.log(counter+" "+lines+" of code.");
    console.log("John strikes one out.");
    console.log("clears it all out.");
    if (counter == 1) {
        console.log("Not a single line of code in a file.");
        console.log("John cant stike anymore out.");
    }
}