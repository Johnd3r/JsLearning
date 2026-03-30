console.log('Cargando personajs'); //confirmando si inicia la clase desde la consola 

class Persona {
    //reminder (Los constructores se crean simples, pasa como parametros los atributos que quieres tener dentro de el, en este caso 'Nombre y apellido')
    constructor (nombre, apellido){
        this.nombre = nombre; //el this dentor de los constructores es como decirlo en otras palabras "quiero que ESTE(this) atributo que nombré 'nombre' se asigne al atributo de nombre 'nombre' siempre, algo asi lo doy por entendido xD"
        this.apellido = apellido;
    }
    //reminder (los getters son simple de nombrar, en este caso se dice obtener el atributo nombre, no se le pasan parametros ya que vas a obtenerlo sin mas, de ahi retornas el nombre que fue asignado a ese atributo recalcando ESTE y el nombre)
    get nombre(){
        return this._nombre;
    }
    //reminder (los setters son algo mas estructurados que los getters pero no tan complicados, en este caso pasa como parametro el mismo atributo ya que esta obteniendo su valor anterior para luego decirle que ESTE atributo va actualizar su valor por el nuevo valor de nombre, pdt: despues intentare mej0orar esta redacción xd)
    set nombre(nombre){
        this._nombre =nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}