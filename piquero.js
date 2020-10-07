import { Humano } from './index'

class Piquero extends Humano {
  nombre = 'Piquero';
  ataque = 50;

  atacarConLanza() {
    console.log('atacar con lanza')
  }
}

let piquero = new Piquero();

piquero.atacar();
piquero.atacarConLanza();