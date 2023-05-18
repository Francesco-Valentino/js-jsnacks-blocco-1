let userNumber = prompt("Inserisci qui il tuo numero A QUATTRO CIFRE.");

if (userNumber.length === 4 && isNaN(userNumber) === false) {
    console.log(userNumber)
    console.log("Calcolando la somma...")
} else {
    console.log("Input non valido!")
}



