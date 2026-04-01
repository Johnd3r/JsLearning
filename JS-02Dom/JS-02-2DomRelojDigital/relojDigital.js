const obtenerFecha = () => { //funcion flecha normal sin parametros requeridos
    //creamos un objeto 'fechaEl' ([El] significa elemento) que obtendrá las propiedades del objeto Date
    let fechaEl = new Date(); 

    //formatoHora es una funcion que se crea mas adelante para darle el formato de (01,02,03...) y no se vea maluco solo con (1,2,3...)se invoca primero este parametro, y le pasa como parametro la obtencion de los parametros de horas del objeto creado
    let hr = formatoHora(fechaEl.getHours()); //hr obtendrá con getHours la hora actual desde el objeto creado fechaEl que tiene las propiedades de Date
    let mn = formatoHora(fechaEl.getMinutes());//lo mismo que se explicó arriba pero con minutos
    let sc = formatoHora(fechaEl.getSeconds());//lo mismo que se explicó arriba pero con segundos
    //extraemos con el DOM lo que hay en la id 'hora' y se inyecta los parametros(hora, minuto, segundo) extraidos del objeto fechaEl
    document.getElementById('hora').innerHTML = `${hr}:${mn}:${sc}`;
    //-------------------------------------------------------------------------------------------------------------------------------
    //
    let monthEls = ['January','February','March','April','May','June','July','August','September','October','November','December'];//Se crea lista que tendra por cada posicion un mes del año de 0 a 11 para completar los 12
    let weekDayEls = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];//Se crea una lista que tendra los dias de la semana por cada posicion de 0 a 6 para completar los 7, se pone Domingo de primero porque se registra como el primer dia de la semana
    let monthEl = monthEls[fechaEl.getMonth()]; //variable que obtendra el mes de la lista monthEls, se extrae el valor numerico para darle una posicion dentro de la lista por medio del metodo getMonth que obtendra el valor numerico del mes del año Ejm: 02, ese valor se lo pasa a lista de meses, y por ende al estar el posicion da referencia a marzo, ya dado el recorrido pasa el string de la lista al monthEl
    let dayEl = fechaEl.getDate(); //lo mismo de arriba solo que con dia
    let weekDayEl = weekDayEls[fechaEl.getDay()]; //lo mismo de arriba pero con dia de la semana
    //extraemos con el DOM lo que hay en la id 'fecha' y se inyecta los parametros(mes, dia del mes, dia de la semana) extraidos del objeto fechaEl
    document.getElementById('fecha').innerHTML = `${monthEl} ${dayEl}, ${weekDayEl}`;
}
//formato que ayudara a una mejor experiencia de usuario para que no se visualicen valores de un digito cuando se es menor a 10 (1,2,3... <<< 01,02,03)
const formatoHora = (hora) => { //para ejecutar esta funcion necesitamos un parametro de la hora a evaluar, sea hora, minuto o sec
    if (hora < 10){ //le decimos que si el parametro que se trajo es menor a 10 (01...09) ejecute la siguiente logica:
        hora = '0' + hora; //Extraemos el parametro ejm: 7, al cual le concatenaremos al incio de este mismo un 0 para que tenga nuevo valor de 09, y ese nuevo valoro se le asigna al parametro cambiandolo asi a un mejor formato
        return hora; //retornamos el valor nuevo como parametro
    }
    else{
        return hora; //si no es mayor a 10 solo ignora y ya xD
    }
}

setInterval(obtenerFecha, 1000); //Esto es para darle el dinamismo de que se ejecute la funcion de fecha cada segundo y sea reactiva la interfaz.