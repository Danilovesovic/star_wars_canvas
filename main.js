var allHumans = [];
var allOrks = [];
var allArrows = [];


function setup() {
    createCanvas(600, 600);
    createHumans();
    createOrks();
    frameRate(20);
}

function draw() {
    background(51);

    for (var i = allHumans.length - 1; i >= 0; i--) {
        allHumans[i].show();
        allHumans[i].fight()
        if (allHumans[i].life == false) {
            allHumans.splice(i, 1);
        };
    };
    for (var i = allOrks.length - 1; i >= 0; i--) {
        allOrks[i].show();
        allOrks[i].fight()
        if (allOrks[i].life == false) {
            allOrks.splice(i, 1);
        };
    };
    for (var i = allArrows.length - 1; i >= 0; i--) {
        allArrows[i].show();
        if (!allArrows[i].life) {
            allArrows.splice(i, 1);
        };
    };


}

function createHumans() {
    for (var i = 1; i < 19; i++) {
        allHumans.push(new Human(i * 31, height - 20, 10))
    };
    for (var i = 1; i < 19; i++) {
        allHumans.push(new Human(i * 31, height - 60, 10))
    };
}


function createOrks() {
    for (var i = 1; i < 19; i++) {
        allOrks.push(new Ork(i * 31, 20, 10))
    };
    for (var i = 1; i < 19; i++) {
        allOrks.push(new Ork(i * 31, 60, 10))
    };
}