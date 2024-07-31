export class OobColor {
  constructor(nombre, color) {
    this.id = self.crypto.randomUUID();
    this.nombre = nombre;
    this.color = color;
  }
}