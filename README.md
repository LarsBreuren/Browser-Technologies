# Browser-Technologies
My accessible website

## Case 2 - Shirts designen

# Feedback
- Opbouw code, goed? Kan het beter?
- Flexbox werkt op IE, goede keuze?
- In de json files staan nu id objects die data over een shirt bevatten. Ik ben er nog niet helemaal achter hoe ik dit weer kan ophalen via
een formulier. Wellicht een suggestie hiervoor? -- Dit is nu gefixed, wellicht feedback op hoe dit opgelost is ( in shirts.json opgeslagen).

# Opbouw code
Ik heb NodeJS en EJS gebruikt.
Je land op de edit pagina, hier kan je met een formulier data versturen om het shirt aan de rechterzijde te bewerken.
Zodra je op submit klikt gaat de data naar de server, die zet de waardes in een nieuwe EJS file die vervolgens server side gerenderd wordt.
Ook wordt deze data doormiddel van de npm package file system naar een .json file geschreven om later weer gebruikt te worden.
De id's worden met uniqid gemaakt, zo kunnen er geen dubbele shirts onstaan.


# To install
1. Clone repository
2. open terminal on master folder
3. Give the command `npm start`
4. Navigate to localhost:3000
