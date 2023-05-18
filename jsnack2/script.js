const guestList = ["Franco Franchi", "Sandro Pertini", "Vincenzo Salemme", "Richard Benson", "Red Canzian", "Tiburzio Fraudolenti", "Franchino er Criminale", "Antonio Sagoleo", "Titi Kaka"];

let isInvited = false;

const guestName = prompt("Insert your name here!");

for (let i = 0; i < guestList.length; i++){
    if (guestName === guestList[i]) {
        console.log("You were invited to the party! Come on in.")
    } else {
        console.log("You were not invited to the party. Go away now.")
    }
};