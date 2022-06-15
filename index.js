const fs = require('fs');
const os = require('os')

var texto = 'Informacion de mi computador\n';
texto += Capacidad_Memoria()+'\n';
texto += Vercion_Sistema_Operativo()+'\n';
texto += Nombre_computador()+'\n';
texto += Nombre_sistema()+'\n';
texto += Cadena_endianness()+'\n';
texto += Tiempo_activo()+'\n';
texto += Plataforma_sistema()+'\n';
texto += Promedios_carga()+'\n';
texto += Ruta_directorio()+'\n';
texto += Arquitectura_cpu()+'\n';
texto += Fin_linea()+'\n';
texto += Cadena_sistema()+'\n';

fs.writeFile("archivo.txt",texto,function(error){
    if(error){ "Eror al crear el archivo"
    }else{
        console.log("El archivo fue creado");
    }
})
//devuelve la cantidad total de memoria del sistema operativo en bytes
function Capacidad_Memoria(){
    var memoria = 'Memoria_total : '+ os.totalmem();
    return memoria;
}
//devuelve el sistema operativo como una cadena
function Vercion_Sistema_Operativo(){
    var version = 'Version del sistema Operativo : ' + os.release();
    return version;
}
//devuelve el nombre de host del sistema operativo 
function Nombre_computador(){
    var nombre = 'Nombre del computador : ' + os.hostname()
    return nombre;
}
//devuelve una cadena de endianness de la CPU: BE-big endian, LE-little endian
function Cadena_endianness(){
    var entidad = 'endianness de la cpu : ' + os.endianness()
    return entidad
}
//devuelve el nombre del sistema operativo 
function Nombre_sistema(){
    var sistem = 'Nombre del sistema operativo : ' + os.type()
    return sistem
}
//devuelve el tiempo de actividad del sistema en numero de segundos 
function Tiempo_activo(){
    var time = 'tiempo del sistema encendido : ' + os.uptime()
    return time
}
//identifica la plataforma del sistema operativo para la que se compilo
function Plataforma_sistema(){
    var plataform = 'plataforma para el sistema de compilacion : ' + os.platform()
    return plataform
}
//contiene los promedios de carga de 1,5 y 15 minutos
function Promedios_carga(){
    var carga = 'promedio de carga del pc : ' + os.loadavg()
    return carga
}
//devuelve la rua de la cadena del directorio de iniciodel usuario
function Ruta_directorio(){
    var ruta = 'ruta de la cadena del directorio : ' + os.homedir()
    return ruta
}
//muestra la arquitectura de la CPU del sistema operativo que se a compilado 
function Arquitectura_cpu(){
    var arquitectura = 'arquitectura de la CPU  del sistema operatvo : ' + os.arch()
    return arquitectura
}
//marcador del fin de linea del sistema operativo
function Fin_linea(){
    var marcado = 'fin de linea del sistema : ' + os.EOL
    return marcado
}
//devuelve el sistema operativo como una cadena
function Cadena_sistema(){
    var cadenasistem = 'sistema operativo como una cadena : ' + os.release()
    return cadenasistem
}