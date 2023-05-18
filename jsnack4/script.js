let userNumber = prompt("Inserisci qui il tuo numero A QUATTRO CIFRE.");

if (userNumber.length === 4 && isNaN(userNumber) === false) {
    console.log(userNumber)
    console.log("Calcolando la somma...")
    console.log(parseInt(userNumber.charAt(1)) + parseInt(userNumber.charAt(2)) + parseInt(userNumber.charAt(3)) + parseInt(userNumber.charAt(4)));
} else {
    console.log("Input non valido!");
};



