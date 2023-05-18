let potentialOdd = [];

for (let i = 0; i < 6; i++){
    const userNum = parseInt(prompt("Type a number here."));

    if(userNum % 2 !== 0){
        potentialOdd.push(userNum);
    }
};

console.log(potentialOdd);