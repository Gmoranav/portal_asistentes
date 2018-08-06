'use strict';

window.addEventListener('load', imprimirListaLaboratorios);

function imprimirListaLaboratorios(){
    
    let listaLaboratorios = obtenerListaLaboratorios();
    let tbody = document.querySelector('#tblLaboratorio');//Cambiar Examples por lo que se vaya a listar, usar nombre en plural
                                                            //(ejemplo: cursos, sedes...)
    /*if(!pFiltro){
        pFiltro = '';
    }*/
    //tbody.innerHTML = '';


    //Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)
    for(let i = 0; i < listaLaboratorios.length; i++){

        /*los nombres que están entre corchetes y comillas simples
        deben ser los mismos que están en la función registrarExamples del archivo servicio.
        Están en la sección data{}.  NO los que vienen por parámetro sino lo que se declaran en
        la función.  Se deben colocar en el mismo orden*/
        let fila = tbody.insertRow();
        
        let cSede = fila.insertCell();
        let cNombreLaboratorio = fila.insertCell();
        let cCantEspacios = fila.insertCell();

        
        cSede.innerHTML = listaLaboratorios[i]['sede_laboratorio'];
        cNombreLaboratorio.innerHTML = listaLaboratorios[i]['nombre_laboratorio'];
        cCantEspacios.innerHTML = listaLaboratorios[i]['cantidad_espacios'];
        
        
    }

};

