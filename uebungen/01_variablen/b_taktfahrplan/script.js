/*
* 01.b - Taktfahrplan
* Bis im Jahr 2070 möchte die Deutsche Bahn auf einen Taktfahrplan,
* also einem System wie in der Schweiz, umstellen, wo alle Züge stündlich
* Fahren. Darauf freust du dich sehr! Jetzt möchtest du aber wissen,
* wie alt du dann überhaupt schon bist. Schreibe dir eine Berechnung dazu.
*
* Merke: Pro Kalenderjahr kannst du zwei verschiedene Alter haben (z.B. 26 und 27).
* Gebe in einem String beide Möglichkeiten in der Konsole aus.
* */

const taktfahrplan_done_year = 2070;
const geburtsjahr = 2002;
const age_max = taktfahrplan_done_year - geburtsjahr;
const age_min = age_max - 1;

console.log (`Bei der Einführung wirst du entweder ${age_max} oder ${age_min} Jahre alt sein.`)