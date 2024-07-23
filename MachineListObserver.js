class MachineListObserver {
    update(box) {
        console.log('--------------------------------');
        console.log(`Liste des machines dans le box ${box.name} :`);
        box.getMachines().forEach(machine => {
            console.log(`- ${machine.type}`);
        });
        console.log('--------------------------------');
        console.log();
    }
}

export default MachineListObserver;
