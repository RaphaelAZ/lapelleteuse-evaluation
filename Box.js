class Box {
    constructor(name) {
      this.machinesList = [];
      this.name = name;
      this.observers = [];
    }
  
    // Ajout d'une machine dans un box si le box n'est pas full + notif
    addMachine(machine) {
      if (this.fullBox()) {
        console.log('Le box est plein !');
        return;
      }
      this.machinesList.push(machine);
      console.log(`La machine ${machine.type} a été ajoutée au box ${this.name}`);
      this.notifyObservers();
    }
  
    // Détecte si le box est plein
    fullBox() {
      return this.machinesList.length === 8;
    }
  
    //Détecte si le box contient tous les types
    allTypes() {
        const types = new Set();
        for (const machine of this.machinesList) {
          types.add(machine.type);
        }    
        return types.size === 5;
    }

    addObserver(observer) {
      this.observers.push(observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update(this));
    }

    getMachines() {
      return this.machinesList;
    }

    displayContent() {
        for (const machine of this.machinesList) {
            console.log(`- ${machine.type}`);
        }
    }
}

export default Box;