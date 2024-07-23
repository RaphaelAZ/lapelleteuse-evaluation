class BoxManager {
    constructor() {
      if (!BoxManager.instance) {
        this.boxes = [];
        BoxManager.instance = this;
      }
      return BoxManager.instance;
    }
  
    addBox(box) {
      this.boxes.push(box);
    }
  
    findBox(machineType) {
      let boxMissingType = this.boxes.find(box => !box.getMachines().some(machine => machine.type === machineType));
      
      if (boxMissingType) {
          return boxMissingType;
      } else {
        const boxesNotFull = this.boxes.filter(box => !box.fullBox());
        if(boxesNotFull.length > 0) {
          return boxesNotFull.reduce((minBox, currentBox) => 
            currentBox.getMachines().length < minBox.getMachines().length ? currentBox : minBox
          );
        } else {
          return null;
        }
      }
    }

    displayBoxesAndContent() {
      this.boxes.forEach(box => {
        console.log(`Box -> ${box.name}:`);
        box.displayContent();
        console.log('');
      });
    }
}

// Singleton de la classe BoxManager
const boxManager = new BoxManager();
Object.freeze(boxManager);

export default boxManager;