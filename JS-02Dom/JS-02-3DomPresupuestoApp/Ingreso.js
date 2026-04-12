class Ingreso extends Dato {
    static registroIngreso = 0;

    constructor(tipo, valor){
        super(tipo, valor);
        this._id = ++Ingreso.registroIngreso;
    }

    get id(){
        return this._id;
    }
}