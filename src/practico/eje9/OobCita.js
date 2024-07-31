export class OobCita {
    constructor(nombreMascota, nombreDueño, fecha, hora,selectCita,detalle) {
      this.id = self.crypto.randomUUID();
      this.nombreMascota = nombreMascota;
      this.nombreDueño = nombreDueño;
      this.fecha = fecha;
      this.hora = hora;
      this.selectCita = selectCita
      this.detalle = detalle
    }
  }