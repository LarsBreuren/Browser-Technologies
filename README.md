# Browser-Technologies
My accessible website

## Case 2 - Shirts designen

## Feedback
- Opbouw code, goed? Kan het beter?
- Flexbox werkt op IE, goede keuze?
- In de json files staan nu id objects die data over een shirt bevatten. Ik ben er nog niet helemaal achter hoe ik dit weer kan ophalen via
een formulier. Wellicht een suggestie hiervoor? -- Dit is nu gefixed, wellicht feedback op hoe dit opgelost is ( in shirts.json opgeslagen).

## Opbouw code
Ik heb NodeJS en EJS gebruikt.
Je land op de edit pagina, hier kan je met een formulier data versturen om het shirt aan de rechterzijde te bewerken.
Zodra je op submit klikt gaat de data naar de server, die zet de waardes in een nieuwe EJS file die vervolgens server side gerenderd wordt.
Ook wordt deze data doormiddel van de npm package file system naar een .json file geschreven om later weer gebruikt te worden.
De id's worden met uniqid gemaakt, zo kunnen er geen dubbele shirts onstaan.


## To install
1. Clone repository
2. open terminal on master folder
3. Give the command `npm start`
4. Navigate to localhost:3000


## Opdracht 1.2 Browser technologies
Geteste features per device:
- Zoeken op 2 titels
- Verwijderen boeken
- Details boeken bekijken


### Nexus 5 - android 6.0.1 chrome 75
All functions work fine, layout is still okay. But the performance is poor because of the background JS.

### Lenovo legion y540 - Firefox 73
All functions are fine, no lagg or crashes. Layout is good and performance is good.

### Ipod touch - IOS 6.1.6 Safari 8536.25 
Website crashes about 10 seconds after loading finished, no interaction possible.

### Ipad mini - IOS 9.3.5 Safari 9.0
Fetch does not work, so interaction is not possible. Layout does load and so does the background that is rendered with JS.

### Screenreader
The website is not optimized for a screen reader because it can't read the book titles. Inside the a tag there is a h2 tag that contains the title. An easy fix would be to insert the title into the a directly. Adding an alt text to the book cover images would help as well.

## Opdracht 2
Case 2 - T-shirt ontwerpen

### Eerste schets

![18-03-2020-11 50 03](https://user-images.githubusercontent.com/43336468/76953364-e0c9c680-690e-11ea-9392-df6b7143f6cb.jpg)

