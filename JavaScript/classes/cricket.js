class Player {
  name = "";
  role = "";

  constructor(player) {
    this.name = player.name;
    this.role = player.role;
  }
  getDetaiils() {
    return `${this.name} is a ${this.role}`;
  }
}

class Batsman extends Player {
  run = 0;
  matches = 0;
  constructor(player) {
    super(player);
    this.run = player.run;
    this.matches = player.matches;
  }

  getAverage() {
    return (this.run / this.matches).toFixed(2);
  }
}

class Bowler extends Player {
  wickets = 0;
  matches = 0;

  constructor(player) {
    super(player);
    this.wickets = player.wickets;
    this.matches = player.matches;
  }

  getAverage() {
    return (this.wickets / this.matches).toFixed(2);
  }
}

const virat = new Batsman({
  name: "Virat Kohli",
  role: "Batsman",
  run: 13000,
  matches: 275,
});

console.log(virat.getAverage());
console.log(virat.getDetaiils());

const bumrah = new Bowler({
  name: "Jasprit Bumrah",
  role: "Bowler",
  wickets: 400,
  matches: 150,
});

console.log(bumrah.getAverage());
console.log(bumrah.getDetaiils());