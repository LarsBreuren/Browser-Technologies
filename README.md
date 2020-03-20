# Browser-Technologies
My accessible website

## Case 2 - Shirts designen

# Feedback
- Opbouw code, goed? Kan het beter?
- Flexbox werkt op IE, goede keuze?
- In de json files staan nu id objects die data over een shirt bevatten. Ik ben er nog niet helemaal achter hoe ik dit weer kan ophalen via
een formulier. Wellicht een suggestie hiervoor?

# Opbouw code
-NodeJS
-EJS
Je land op de edit pagina, hier kan je met een formulier data versturen om het shirt aan de rechterzijde te bewerken.
Zodra je op submit klikt gaat de data naar de server, die zet de waardes in een nieuwe EJS file die vervolgens server side gerenderd wordt.
Ook wordt deze data doormiddel van de npm package file system naar een .json file geschreven om later weer gebruikt te worden.
De id's worden met uniqid gemaakt, zo kunnen er geen dubbele shirts onstaan.
