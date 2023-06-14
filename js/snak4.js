/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
*/

const teams = [
  {
    name: "inter",
    points: 0,
    foul: 0,
  },
  {
    name: "Milan",
    points: 0,
    foul: 0,
  },
  {
    name: "Juventus",
    points: 0,
    foul: 0,
  },
  {
    name: "Torino",
    points: 0,
    foul: 0,
  },
  {
    name: "Fiorentina",
    points: 0,
    foul: 0,
  },
  {
    name: "Empoli",
    points: 0,
    foul: 0,
  },
];

/*
Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

for (const team of teams) {
  const randomPoints = Math.floor(Math.random() * 10) + 1;
  const randomFoul = Math.floor(Math.random() * 10) + 1;
  team.points = randomPoints;
  team.foul = randomFoul;
}
/*
for (let i = 0; i < teams.length; i++) {
  const randomPoints = Math.floor(Math.random() * 10) + 1;
  const randomFoul = Math.floor(Math.random() * 10) + 1;
  teams[i].points = randomPoints;
  teams[i].foul = randomFoul;
}
*/
const newTeams = teams.map(({ name, foul }) => ({ name, foul }));
console.log(teams, newTeams);
