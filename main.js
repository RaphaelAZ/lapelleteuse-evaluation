import boxManager from './BoxManager.js';
import MachineFactory from './MachineFactory.js';
import Box from './Box.js';
import MachineListObserver from './MachineListObserver.js';

//Création des box + ajout dans le manager
const box1 = new Box('Box primaire');
const box2 = new Box('Box secondaire');

boxManager.addBox(box1);
boxManager.addBox(box2);


// Design Pattern Observer pour notifs sur ajout de machines dans un box
const machineListObserver = new MachineListObserver();

box1.addObserver(machineListObserver);
box2.addObserver(machineListObserver);

// Ajout des machines dans un box avec Factory
const machinesTypes = ['Pelleteuse','Tractopelle','Nacelle','Bulldozer','RouleauCompresseur'];
const machines = [];

for(let i = 0; i < 17; i++) {
    const randomType = Math.floor(Math.random() * 5);
    machines.push(MachineFactory.createMachine(machinesTypes[randomType]));
}

//Test pour une machine inconnue
// machines.push(MachineFactory.createMachine('CRASH_TEST'));

machines.forEach(machine => {
  const box = boxManager.findBox(machine.type);
  if (!box) {
    console.error(`Impossible d'ajouter la machine ${machine.type} car aucun box n'est disponible.`);
    return;
  } else {
    box.addMachine(machine);
  }
});


console.log('--------------------------------');
console.log(boxManager.displayBoxesAndContent());
