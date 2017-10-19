function Ork(x, y, r) {
    this.radius = r;
    this.health = random(700, 1000);
    this.armor = random(30, 100);
    this.demage = random(100, 200);
    this.col = "tomato";
    this.location = createVector(x, y);
    this.life = true;

    this.show = function() {
        fill(this.col);
        ellipse(this.location.x, this.location.y, this.radius * 2);
    }
    this.fight = function() {
        var rand = random(0, 100);
        if (rand > 98) {
            allArrows.push(new OrkArrow(this));
        };
    }
}


function OrkArrow(ork) {
    this.ork = ork;
    this.location = createVector(ork.location.x, ork.location.y);
    this.vel = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.enemie = allHumans[Math.floor(Math.random() * allHumans.length)];
    this.life = true;
    this.target;;

    this.show = function() {
        fill("yellow");
        ellipse(this.location.x, this.location.y, 5);
        this.seek()
    }

    this.seek = function() {
        console.log(this.enemie);
        this.target = createVector(this.enemie.location.x, this.enemie.location.y);
        this.target.sub(this.location);
        this.target.setMag(0.5);
        this.acceleration = this.target;
        this.vel.add(this.acceleration);
        this.location.add(this.vel);
        this.vel.limit(15)

        if (this.location.y > this.enemie.location.y) {
            this.life = false;
            if (this.enemie.radius > 5) {
                this.enemie.radius--;
                this.ork.radius++;
            } else {
                this.enemie.life = false;
            };
        };

    }
}