class Dato {
    constructor(tipo, valor){
        this._tipo = tipo;
        this._valor = valor;
    }

    get tipo (){
        return this._tipo;
    }
    get valor (){
        return this._valor;
    }
    set tipo (tipo){
        this._tipo = tipo;
    }
    set valor (valor){
        this._valor = valor;
    }        
}