// Giovanni Mierop
// Da Vinci College - Applicatie Ontwikkelaar

const ALERT_MSG = "Je dient 3 vragen te antwoorden."
alert(ALERT_MSG);

// maakt een prompt aan en vraagt naar je voornaam, achternaam en leeftijd. Wat je invoerd wordt in het geheugen opgeslagen.
var naam = prompt("Wat is je naam?", "Voornaam");

var achternaam = prompt("Wat is je achternaam?", "Achternaam");

var leeftijd = prompt("Hoe oud ben je?", "18");

// Hier worden de variables zichtbaar gemaakt op het document.
document.write("Voornaam: " + naam + "<br>");

document.write("Achternaam: " + achternaam + "<br>");

document.write("Leeftijd: " + leeftijd);
