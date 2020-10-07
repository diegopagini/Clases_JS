export class Humano {
  vida = 100;
  ataque = 10;

  constructor(){}

  atacar() {
    console.log(`${this.nombe} te esta atacando con ${this.ataque}`)
  }

}

let aldeano = new Humano();

aldeano.atacar()

