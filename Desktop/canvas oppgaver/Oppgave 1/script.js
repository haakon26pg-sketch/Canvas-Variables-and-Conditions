/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/
    
    <script> src="script.js"</script>

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/
let userheight = 1.55;
const minimumHeight = 1.60;

if (userheight >= 1.60) {
    console.log("User is tall enough for rollercoaster")
} else {
    console.log("User is not tall enough for rollercoaster")
}
/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/
5 + 5;
10 / 20;
20 +

let score = 5;

score++;

console.log(score);

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

///let userName >= && "BilboSwaggins"
///let userAge = 18;
///let userIsLoggedIn = true;
///let userIsBlocked = false;
///let goToPage = "True";

let username = "BilboSwaggins";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

if (username !== "" && userAge >= 18 && userIsBlocked === false) {
        userIsLoggedIn = true;
        goToPage= "/home";

        console.log("Velkommen " + username + "!");
} else {
        console.log("Kunne ikke logge inn.");
}
/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = false;

let userMale = true;

const userTitle = userMale ? "Mr." : "Mrs.";

console.log(userTitle);