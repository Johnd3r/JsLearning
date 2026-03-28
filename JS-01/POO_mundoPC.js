//Clase 1
class DispositivosEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }
  get marca() {
    return this._marca;
  }

  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }
  set marca(marca) {
    this._marca = marca;
  }

}

//Clase 2 Hija de 1
class Raton extends DispositivosEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  get idRaton() {
    return this._idRaton;
  }

  toString() {
    return `Raton [ID: ${this._idRaton}, Marca: ${this._marca}]`;
  }
}

//Clase 3 Hija de 1
class Teclado extends DispositivosEntrada {
  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  get idTeclado() {
    return this._idTeclado;
  }

  toString() {
    return `Teclado [ID: ${this._idTeclado}, ${this._marca}]`;
  }
}
//Clase 4
class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamaño) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamaño = tamaño;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  get marca() {
    return this._marca;
  }
  get tamaño() {
    return this._tamaño;
  }
//Setters
  set marca(marca) {
    return this._marca = marca;
  }
  set tamaño(tamaño) {
    return this._tamaño = tamaño;
  }

  toString() { 
    return `Monitor [ID: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`; 
  } 

}
// Ejemplo de uso Familia 1
const raton1 = new Raton("USB", "Logitech");
console.log(raton1.toString());

const teclado1 = new Teclado("Bluetooth", "Microsoft");
console.log(teclado1.toString());

const monitor1 = new Monitor("Samsung", "27'");
console.log(monitor1.toString());

class Computadora {
  static contadorComputadora = 0;

  constructor (nombre, monitor, teclado, raton){
    this._idComputadora = ++Computadora.contadorComputadora;
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton
  }

   //Getters
  get nombre(){
    return this._nombre;
  }
    get monitor(){
    return this._monitor;
  }
    get teclado(){
    return this._teclado;
  }
    get raton(){
    return this._raton;
  }
  //Setters
  set nombre(nombre){
    this._nombre = nombre;
  }  
  set monitor(monitor){
    this._monitor = monitor;
  }
  set teclado(teclado){
    this._teclado = teclado;
  }
  set raton(raton){
    this._raton = raton;
  }

  toString (){ 
  return `Computadora [ID: ${this._idComputadora}, Nombre: ${this._nombre}] ${this._monitor.toString()} ${this._teclado.toString()} ${this._raton.toString()}`
  }

}

const PCNO1 = new Computadora ("PC Gamer1", monitor1, teclado1, raton1);

console.log(PCNO1.toString());

//Class 5 FINAL BOSS
class Orden {
  static contadorOrden = 0;

  constructor(){
    this.idOrden = ++Orden.contadorOrden;
    this.computadoras = [];
    /* this.computadoras = computadoras[Computadora]; */
  }
  //getters
  get idOrden(){
    return this.idOrden;
  }

  agregarComputadora (Computadora) {
    this.computadoras.push(Computadora);
  }
  /* agregarComputadora (Computadora) {
    for ( compu = 1; Computadora; Compu++) {
      return this.computadoras;
    };
  } */
  mostrarOrden(){
    let computadorasOrden = "";
    for (let computadora of this.computadoras) {
      computadorasOrden += `\n${computadora.toString()}`;
    }
    console.log(`Orden [ID: ${this.idOrden}, Computadoras: ${computadorasOrden}]`);
  }
}

let orden1 = new Orden();
orden1.agregarComputadora(PCNO1);