console.log('hi script.js');

let password = prompt("Passwort eingeben");
let username = prompt("Benutzername eingeben");
checkStringLength(password, 12);
checkStringLength(username, 7);

function checkStringLength(testString, testLength){
    if (testString.length >=testLength) {
        console.log("Der Input ist lang genug.");
    } else {
        console.log("Bitte verwende einen längerer Text");
    }
}