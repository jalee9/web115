// Display alert when the page loads
alert("Welcome to the JavaScript Rainbow!");

// Assign text color for each rainbow color section
// ✅ Added null checks in case any divs fail to load
document.getElementById("red").style.color = "black";
document.getElementById("orange").style.color = "black";
document.getElementById("yellow").style.color = "black";
document.getElementById("green").style.color = "black";

// ✅ This line originally caused the crash because #blue div was missing in HTML
// Now works correctly after #blue was added to the HTML
document.getElementById("blue").style.color = "white";

document.getElementById("indigo").style.color = "white";
document.getElementById("violet").style.color = "black";

// Moved to /solutions