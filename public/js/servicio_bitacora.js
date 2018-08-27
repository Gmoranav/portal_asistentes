'use strict';



function registrar_bitacora(scedula_profesor, scedula_asistente, sprimer_nombre, ssegundo_nombre, sprimer_apellido, ssegundo_apellido, scurso, sgrupo, sestado){
    let respuesta = '';
    let peticion = $.ajax({
    

        url : 'http://localhost:4000/api/registrar_bitacora',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            cedula_profesor : scedula_profesor,
            cedula_asistente  : scedula_asistente,
            primer_nombre_asistente : sprimer_nombre,
            segundo_nombre_asistente : ssegundo_nombre,
            primer_apellido_asistente : sprimer_apellido,
            segundo_apellido_asistente : ssegundo_apellido,
            curso : scurso,
            grupo : sgrupo,
            estado : sestado
        }
    });
        
        peticion.done(function(response){
            respuesta = response;
        });
        
        peticion.fail(function(response){
            respuesta = response;
        });
    
        return respuesta;  
};

    //esto va en el controlador de registrar la solicitud de asistente
    /*let infoBitacoraGenerada = [];

    infoBitacoraGenerada [0] = sCedula_profesor;
    infoBitacoraGenerada [1] = sCedula_Asistente;
    infoBitacoraGenerada [2] = sPrimerNombre;
    infoBitacoraGenerada [3] = sSegundoNombre;
    infoBitacoraGenerada [4] = sPrimerApellido;
    infoBitacoraGenerada [5] = sSegundoApellido;
    infoBitacoraGenerada [6] = scurso;
    infoBitacoraGenerada [7] = sgrupo;
    infoBitacoraGenerada [8] = 1;

    setinfoBitacoraGenerada(infoBitacoraGenerada);*/
    
function setinfoBitacoraGenerada(infoBitacoraGenerada) {
        localStorage.setItem("infoBitacoraGenerada", JSON.stringify(infoBitacoraGenerada));
        console.log(JSON.parse(localStorage.getItem("infoBitacoraGenerada")));
};

//------------------------------------------------

//esto va donde se aprueba la solicitud de asistente
function generar_bitacora(){

    let bitacora = [];

    bitacora = getinfoBitacoraGenerada();

    let scedula_profesor : bitacora[0];
    let scedula_asistente  : bitacora[1];
    let sprimer_nombre : bitacora[2];
    let ssegundo_nombre : bitacora[3];
    let sprimer_apellido : bitacora[4];
    let ssegundo_apellido : bitacora[5];
    let scurso : bitacora[6];
    let sgrupo : bitacora[7];
    let sestado : bitacora[8];

    registrar_bitacora(scedula_profesor, scedula_asistente, sprimer_nombre, 
        ssegundo_nombre, sprimer_apellido, ssegundo_apellido, scurso, sgrupo, sestado)
};

function getinfoBitacoraGenerada() {
    return JSON.parse(localStorage.getItem("infoBitacoraGenerada"));
};

//---------------------------------------------------------------