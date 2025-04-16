/*
* 04.a - Türsteher
* Du arbeitest in einem Club als Türsteher:in. Du willst
* deinen Arbeitsalltag automatisieren und baust dir eine
* Funktion, welche ein Alter (number) als Parameter nimmt
* und dann in der Konsole ausspuckt, welche Getränke mit
* diesem Alter konsumiert werden dürfen.
*
* Unter 16: Du bist zu jung um Alkohol zu kaufen.
* Unter 18: Du bist zu jung für Schnaps.
* 18 oder darüber: Yeah, volljährig - kauf was du willst.
*
* Wenn du Lust hast, kannst du auch versuchen die Funktion
* noch etwas schlauer zu machen. Und zwar wäre es ja am
* besten, wenn anstatt das Alter direkt ein Geburtsdatum
* als Parameter eingegeben werden könnte. Nimm dir hierzu
* diese Anleitung zur Hilfe (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?retiredLocale=de)
* oder arbeite mit KI.
* */



// Benutzer:in gibt Geburtsdatum ein
let geburtsdatumString = prompt("Gib dein Geburtsdatum ein (YYYY-MM-DD):");

// Geburtsdatum in ein Date-Objekt umwandeln
let geburtsdatum = new Date(geburtsdatumString);
let heute = new Date();

// Alter berechnen
let alter = heute.getFullYear() - geburtsdatum.getFullYear();
let m = heute.getMonth() - geburtsdatum.getMonth();
if (m < 0 || (m === 0 && heute.getDate() < geburtsdatum.getDate())) {
  alter--;
}

// Funktion zur Altersprüfung
function checkAge(alter) {
  if (alter < 16) {
    console.log("Du bist zu jung um Alkohol zu kaufen.");
  } else if (alter < 18) {
    console.log("Du bist zu jung für Schnaps.");
  } else {
    console.log("Yeah, volljährig - kauf was du willst.");
  }
}

checkAge(alter);