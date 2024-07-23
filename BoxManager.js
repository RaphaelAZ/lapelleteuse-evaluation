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
  
    findBoxNotFull() {
      return this.boxes.find(box => !box.fullBox());
    }
  
    findBoxMissingType() {
      return this.boxes.find(box => !box.allTypes());
    }
}

// Singleton de la classe BoxManager
const boxManager = new BoxManager();
Object.freeze(boxManager);

export default boxManager;