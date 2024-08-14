import { contador } from "./ejercicio1"

class Contador {
  // Inserte el código aquí
valor=0
  siguiente() {
   return this.valor++;
  }
}
const instancia = new Contador()
// Inserte el código aquí

export { instancia }