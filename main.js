import boxManager from './BoxManager.js';
import MachineFactory from './MachineFactory.js';
import Box from './Box.js';

const box1 = new Box('Box primaire');
const box2 = new Box('Box secondaire');

boxManager.addBox(box1);
boxManager.addBox(box2);

const machinesTypes = ['Pelleteuse','Tractopelle','Nacelle','Bulldozer','RouleauCompresseur'];
const machines = [];

for(let i = 0; i < 16; i++) {
    const randomType = Math.floor(Math.random() * 5);
    machines.push(MachineFactory.createMachine(machinesTypes[randomType]));
}

// machines.push(MachineFactory.createMachine('CRASH_TEST'));
//Test pour une machine inconnue

machines.forEach(machine => {
  const box = boxManager.findBoxMissingType() || boxManager.findBoxNotFull();
  if (!box) {
    console.error(`Impossible d'ajouter la machine ${machine.type} car aucun box n'est disponible.`);
    return;
  } else {
    box.addMachine(machine);
  }
});

// console.log(boxManager);
