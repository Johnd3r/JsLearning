class Egreso extends Dato {
    static registroEgreso = 0;

    constructor(tipo, valor){
        super(tipo, valor);
        this._id = ++Ingreso.registroEgreso;
    }

    get id(){
        return this._id;
    }
}