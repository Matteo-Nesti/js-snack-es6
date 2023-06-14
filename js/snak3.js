/* 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e weight.
Stampare in console la bici con peso minore utilizzando il destructuring
*/

const bikes = [
  {
    name: "bici 1",
    weight: 25,
  },
  {
    name: "bici 2",
    weight: 30,
  },
  {
    name: "bici 3",
    weight: 20,
  },
  {
    name: "bici 4",
    weight: 10,
  },
  {
    name: "bici 5",
    weight: 35,
  },
];

const minorWeight = bikes.reduce((previous, current) => {
  if (current.weight < previous.weight) {
    return current;
  } else {
    return previous;
  }
});
console.log(minorWeight);
