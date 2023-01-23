//chiedere quantita' di km da percorrere
//chiedere l'eta' del passeggero
//calcolo del prezzo in base ai km
//creazione di un if con le fasce d'eta'
//per approssimare e per arrotondare i decimali usa il .toFixed(0-1-2-3-4-5)

//chiedere quantita' di km da percorrere


let KmPercorsi = prompt("quanti chilometri percorrerai?");

console.log(KmPercorsi);
console.log(typeof KmPercorsi);

//chiedere l'eta' del passeggero

let ClientAge = parseFloat(prompt("quanti anni hai?"));

console.log(ClientAge);
console.log(typeof ClientAge);

//calcolo del prezzo in base ai km

const EuroPerTratta = parseFloat(KmPercorsi * 0.21);

console.log(EuroPerTratta);
console.log(typeof EuroPerTratta);

//creazione di un if con le fasce d'eta'
let ScontoMinorenni = ((EuroPerTratta * 20) / 100)
console.log(ScontoMinorenni)


if (ClientAge < 18) {
    EuroPerTratta == ScontoMinorenni
}


