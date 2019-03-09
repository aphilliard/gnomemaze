var N = 25;
var map = Array.apply(null, {length: N}).map(Number.call, Number);

// [NORTH, EAST, SOUTH, WEST]
var mapPath = [];

mapPath[0] = [false, true, true, false];
mapPath[1] = [false, true, false, true];
mapPath[2] = [false, true, true, true];
mapPath[3] = [false, false, false, true];
mapPath[4] = [false, false, true, false];
mapPath[5] = [true, false, false, false];
mapPath[6] = [false, true, false, false];
mapPath[7] = [true, true, true, true];
mapPath[8] = [false, true, false, true];
mapPath[9] = [true, false, true, true];
mapPath[10] = [false, true, true, false];
mapPath[11] = [false, true, false, true];
mapPath[12] = [true, true, true, true];
mapPath[13] = [false, false, true, true];
mapPath[14] = [true, false, true, false];
mapPath[15] = [true, false, true, false];
mapPath[16] = [false, false, true, true];
mapPath[17] = [true, false, true, false];
mapPath[18] = [true, false, true, false];
mapPath[19] = [true, false, true, false];
mapPath[20] = [true, true, false, false];
mapPath[21] = [true, false, false, true];
mapPath[22] = [true, false, false, false];
mapPath[23] = [true, true, false, false];
mapPath[24] = [true, false, false, true];

var mapImg = [];

mapImg[0] = ["esexit.png"];
mapImg[1] = ["weexit.png"];
mapImg[2] = ["wseexit.png"];
mapImg[3] = ["wexit.png"];
mapImg[4] = ["sexit.png"];
mapImg[5] = ["nexit.png"];
mapImg[6] = ["eexit.png"];
mapImg[7] = ["allexit.png"];
mapImg[8] = ["weexit.png"];
mapImg[9] = ["nwsexit.png"];
mapImg[10] = ["esexit.png"];
mapImg[11] = ["weexit.png"];
mapImg[12] = ["allexit.png"];
mapImg[13] = ["wsexit.png"];
mapImg[14] = ["nsexit.png"];
mapImg[15] = ["nsexit.png"];
mapImg[16] = ["sexit.png"];
mapImg[17] = ["nsexit.png"];
mapImg[18] = ["nsexit.png"];
mapImg[19] = ["nsexit.png"];
mapImg[20] = ["neexit.png"];
mapImg[21] = ["wnexit.png"];
mapImg[22] = ["nexit.png"];
mapImg[23] = ["neexit.png"];
mapImg[24] = ["wnexit.png"];


var playerLocation = 12;
var locationImg = "rat.png";

do {
    var cheeseLocation = Math.floor(Math.random() * 25);
    console.log("Cheese " + cheeseLocation);
} while (cheeseLocation === 12 || cheeseLocation === 11 || cheeseLocation === 13 || cheeseLocation === 7 || cheeseLocation === 17);

do {
    var catLocation = Math.floor(Math.random() * 25);
    console.log("Cat " + catLocation);
} while (cheeseLocation === catLocation && catLocation === playerLocation);

function move(direction) {
    

    switch (direction) {
        case "north":
            if (mapPath[playerLocation][0]) {
                playerLocation -= 5;
                updateWalls()
            }
            break;

        case "west":
            if (mapPath[playerLocation][3]) {
            playerLocation--;
            updateWalls()
            }
            break;
        case "east":
            if (mapPath[playerLocation][1]) {
                playerLocation++;
                updateWalls()
            }            
            break;
        case "south":
            if (mapPath[playerLocation][2]) {
                playerLocation += 5;
                updateWalls()
            }            
            break;
    }
    
    updatePlayerPosition()
    checkPosition()

}

function updatePlayerPosition() {
    
    document.getElementById("location").textContent = playerLocation;
    document.getElementById("locationImg").src = mapImg[playerLocation];
}

function updateWalls() {
    var wallImgArray = ["wall1.png", "wall2.png", "wall3.png"];
    var computerSelection = wallImgArray[Math.floor(Math.random() * wallImgArray.length)];
    document.getElementById("wall1").src = computerSelection;
    var computerSelection = wallImgArray[Math.floor(Math.random() * wallImgArray.length)];
    document.getElementById("wall2").src = computerSelection;
}

function checkPosition() {
    if (playerLocation === cheeseLocation) {
        document.getElementById("locationImg").src = "chest.png";
        document.getElementById("footer").textContent = "You found the treasure!";
    }

    if (playerLocation === catLocation) {
        document.getElementById("locationImg").src = "wyvern.png";
        document.getElementById("footer").textContent = "The dragon found you!";
    }

    if (playerLocation > cheeseLocation) {
        document.getElementById("roomDescription").textContent = "You smell gold to the north.";
    }
    else {
        document.getElementById("roomDescription").textContent = "You smell gold to the south.";
    }
}

