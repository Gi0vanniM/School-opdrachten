// Giovanni Mierop
// Da Vinci College - Applicatie Ontwikkelaar


alert("U dient 3 vragen te antwoorden.");

// maakt een prompt aan en vraagt naar je voornaam, achternaam en leeftijd. Wat je invoerd wordt in het geheugen opgeslagen.
var naam = prompt("Wat is je naam?", "Voornaam");

var achternaam = prompt("Wat is je achternaam?", "Achternaam");

var leeftijd = prompt("Hoe oud ben je?", "18");

// Hier worden de variables zichtbaar gemaakt op het document.
document.write("Voornaam: " + naam + "<br>");

document.write("achternaam: " + achternaam + "<br>");

document.write("Leeftijd: " + leeftijd);
