
'use strict';

window.addEventListener('load', listarBitacoras);


function imprimirListaBitacoras(plistaBitacoras /*pFiltro*/){
    
    
    let tbody = document.querySelector('#tblListarBitacoras');

    /*if(!pFiltro){
        pFiltro ='';
    }*/

    tbody.innerHTML = '';

    for(let i = 0; i < plistaBitacoras.length; i++){
        if(plistaBitacoras[i]['estado']!=0){
               // if(plistaBitacoras[i]['rol'].toLowerCase().includes(pFiltro.toLowerCase())){
                        let fila = tbody.insertRow();
                                   
                        let primer_nombre_asistente = plistaBitacoras[i]['primer_nombre_asistente'];
                        let segundo_nombre_asistente = plistaBitacoras[i]['segundo_nombre_asistente'];
                        let primer_apellido_asistente = plistaBitacoras[i]['primer_apellido_asistente'];
                        let segundo_apellido_asistente = plistaBitacoras[i]['segundo_apellido_asistente'];
                        let NombreCompleto;

                        let cNombre = fila.insertCell();
                        let cCurso = fila.insertCell();
                        let cConfiguracion = fila.insertCell();
   
                        if (segundo_nombre_asistente != undefined){
                            NombreCompleto = primer_apellido_asistente.concat(' ', segundo_apellido_asistente, ' ', primer_nombre_asistente, ' ', segundo_nombre_asistente);
                        }else{
                            NombreCompleto = primer_apellido_asistente.concat(' ', segundo_apellido_asistente, ' ', primer_nombre_asistente);
                        }
                        
                        cNombre.innerHTML = NombreCompleto;
                        cCurso.innerHTML = plistaBitacoras[i]['curso'];

                        //se crean los componentes para mostrar detalle de bitacora
                        let botonDetalleBitacora = document.createElement('a');
                        botonDetalleBitacora.classList.add('fas');
                        botonDetalleBitacora.classList.add('fa-file-alt');
                        botonDetalleBitacora.classList.add('tooltip');

                        var tooltipdetalle = document.createElement('span');
                        tooltipdetalle.textContent = "Detalle Bitacora";
                        tooltipdetalle.setAttribute('class', 'tooltiptext');
                        botonDetalleBitacora.appendChild(tooltipdetalle);

            
                        //se crean los componentes para modificar
                        let botonModificar = document.createElement('a');
                        botonModificar.classList.add('fas');
                        botonModificar.classList.add('fa-pencil-alt');
                        botonModificar.classList.add('tooltip');

                        let tooltipModificar = document.createElement('span');
                        tooltipModificar.textContent = "Editar";
                        tooltipModificar.setAttribute('class', 'tooltiptext');
                        botonModificar.appendChild(tooltipModificar);
            
                        //se crean los componentes para desactivar
                        let botonDesactivar = document.createElement('a');
                        botonDesactivar.classList.add('fas');
                        botonDesactivar.classList.add('fa-ban');
                        botonDesactivar.classList.add('tooltip');

                        let tooltipDesactivar = document.createElement('span');
                        tooltipDesactivar.textContent = "Desactivar";
                        tooltipDesactivar.setAttribute('class', 'tooltiptext');
                        botonDesactivar.appendChild(tooltipDesactivar);
            
                        //dataset es una 
                        //propiedad que permite definir atributos personalizados
                        //para un elemento de html
                        botonModificar.dataset._id = plistaBitacoras[i]['_id'];
                        botonDesactivar.dataset._id = plistaBitacoras[i]['_id'];
                        botonDetalleBitacora.dataset._id = plistaBitacoras[i]['_id'];
            
                        //un eventListener queda enlazado a la función que llama
                        botonModificar.addEventListener('click', buscar_por_id);
                        botonDesactivar.addEventListener('click', eliminar_bitacora);
                        botonDetalleBitacora.addEventListener('click', mostrar_detalle_bitacora);
            
                        cConfiguracion.appendChild(botonModificar);
                        cConfiguracion.appendChild(botonDesactivar);
                        cConfiguracion.appendChild(botonDetalleBitacora);
            
                //}//fin if
        }//fin if
        
    }//fin for
};


function listarBitacoras(){

        let listaBitacoras = obtenerListaBitacoras();
        imprimirListaBitacoras(listaBitacoras);
};

function buscar_por_id(){
        let _id = this.dataset._id;
        let bitacora = obtener_bitacora_por_id(_id);
        let datosBitacora = [];
        let i = 0;

        console.log(bitacora);
        //binding permite enlazar la función con el contexto que la llama
        //en este caso con el boton Modificar


        datosBitacora[0] = bitacora['curso']; 
        datosBitacora[1] = bitacora['fecha']; 
        datosBitacora[2] = bitacora['hora_inicio']; 
        datosBitacora[3] = bitacora['hora_fin']; 
        datosBitacora[4] = bitacora['descripcion']; 
        datosBitacora[5] = bitacora['_id']; 
        

        setBitacoraParaModificar(datosBitacora);
        cargar_pagina();

};


function setBitacoraParaModificar(infoBitacora) {
        localStorage.setItem("bitacoraParaModificar", JSON.stringify(infoBitacora));
        console.log(JSON.parse(localStorage.getItem("bitacoraParaModificar")));
};


function eliminar_bitacora(){
        let _id = this.dataset._id; //SE SALVA EL ID DE LO QUE SE DESEA BORRAR
        let estado = 0;
        swal({
            title: '¿Está seguro?',
            text: "La bitácora se desactivará permanentemente",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Desactivar'
          }).then((result) => {
            if (result.value) {
                desactivar_bitacora(_id, estado); 
                listarBitacoras();
                swal(
                        '¡Desactivada!',
                        'La bitácora ha sido desactivada con éxito',
                        'success'
                )
              
            }
        });
};

function obtener_bitacora_id(){
    let _id = this.dataset._id;
    let bitacora = obtener_bitacora_por_id(_id);
    return bitacora;
};


function mostrar_detalle_bitacora(){
    let _id = this.dataset._id;
    let bitacora = obtener_bitacora_id(_id);
    let mostrarDetalleBitacora = [];

    mostrarDetalleBitacora[0] = bitacora['cedula_profesor'];    
    mostrarDetalleBitacora[1] = bitacora['primer_nombre_asistente'];
    mostrarDetalleBitacora[2] = bitacora['segundo_nombre_asistente'];
    mostrarDetalleBitacora[3] = bitacora['primer_apellido_asistente'];
    mostrarDetalleBitacora[4] = bitacora['segundo_apellido_asistente'];
    mostrarDetalleBitacora[5] = bitacora['curso'];
    mostrarDetalleBitacora[6] = bitacora['grupo'];
    mostrarDetalleBitacora[7] = bitacora['registros'];

    let tbody = document.querySelector('#tblDetalleBitacora');
    

    let NombreCompleto;
    if (segundo_nombre_asistente != undefined){
        NombreCompleto = primer_apellido_asistente.concat(' ', segundo_apellido_asistente, ' ', primer_nombre_asistente, ' ', segundo_nombre_asistente);
    }else{
        NombreCompleto = primer_apellido_asistente.concat(' ', segundo_apellido_asistente, ' ', primer_nombre_asistente);
    }

    let filaProfesor = tbody.insertRow();
    let filaAsistente  = tbody.insertRow();
    let filaCurso  = tbody.insertRow();
    let filaGrupo  = tbody.insertRow();


    filaProfesor.insertCell().innerHTML = 'Profesor';
    filaAsistente.insertCell().innerHTML = 'Asistente';
    filaCurso.insertCell().innerHTML = 'Curso';
    filaGrupo.insertCell().innerHTML = 'Grupo';


    let sProfesor = filaProfesor.insertCell();
    sProfesor.innerHTML = mostrarDetalleBitacora[0];

    let sAsistente = filaAsistente.insertCell();
    sAsistente.innerHTML = mostrarDetalleBitacora[0];

    let sCurso = filaCurso.insertCell();
    sCurso.innerHTML = mostrarDetalleBitacora[0];

    let sGrupo = filaGrupo.insertCell();
    sGrupo.innerHTML = mostrarDetalleBitacora[0];


    for(let i = 0; i < mostrarDetalleBitacora[7].length; i++){
        let filaFecha = tbody.insertRow();
        let filaHoraInicio  = tbody.insertRow();
        let filaHoraFin  = tbody.insertRow();
        let filaDescripcion  = tbody.insertRow();


        filaFecha.insertCell().innerHTML = 'Fecha';
        filaHoraInicio.insertCell().innerHTML = 'Hora inicio';
        filaHoraFin.insertCell().innerHTML = 'Hora fin';
        filaDescripcion.insertCell().innerHTML = 'Descripción';


        let sFecha = filaFecha.insertCell();
        sFecha.innerHTML = mostrarDetalleBitacora[7][i];

        let sHoraInicio = filaHoraInicio.insertCell();
        sHoraInicio.innerHTML = mostrarDetalleBitacora[7][i];

        let sHoraFin = filaHoraFin.insertCell();
        sHoraFin .innerHTML = mostrarDetalleBitacora[7][i];

        let sDescripcion = filaDescripcion.insertCell();
        sDescripcion.innerHTML = mostrarDetalleBitacora[7][i];

    }

    levantarModal();
};

