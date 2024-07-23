import Pelleteuse from './Machines/Pelleteuse.js';
import RouleauCompresseur from './Machines/RouleauCompresseur.js';
import Nacelle from './Machines/Nacelle.js';
import Bulldozer from './Machines/Bulldozer.js';
import Tractopelle from './Machines/Tractopelle.js';

// La Factory permet de renvoyer une instance du type de machine que l'on créer pour pouvoir ajouter les méthodes que l'on veut
class MachineFactory {
  createMachine(type) {
    switch (type) {
      case 'Pelleteuse':
        return new Pelleteuse(type);
      case 'Tractopelle':
        return new Tractopelle(type);
      case 'Nacelle':
        return new Nacelle(type);
      case 'Bulldozer':
        return new Bulldozer(type);
      case 'RouleauCompresseur':
        return new RouleauCompresseur(type);
      default:
        throw new Error('Machine '+type+' inconnue');
    }
  }
}

export default new MachineFactory();
