'use strict';

//Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)
window.addEventListener('load', imprimirListaGrupos);

function imprimirListaGrupos(){
    
    let listaGrupos = obtenerListaGrupos();
    let tbody = document.querySelector('#tblgrupos');//Cambiar Examples por lo que se vaya a listar, usar nombre en plural
                                                            //(ejemplo: cursos, sedes...)
    /*if(!pFiltro){
        pFiltro = '';
    }*/
    //tbody.innerHTML = '';


    //Cambiar Examples por lo que se vaya a listar, usar nombre en plural (ejemplo: cursos, sedes...)
    for(let i = 0; i < listaGrupos.length; i++){

        /*los nombres que están entre corchetes y comillas simples
        deben ser los mismos que están en la función registrarExamples del archivo servicio.
        Están en la sección data{}.  NO los que vienen por parámetro sino lo que se declaran en
        la función.  Se deben colocar en el mismo orden*/
        let fila = tbody.insertRow();
                    
        let cNombre = fila.insertCell();
        let cLaboratorio = fila.insertCell();
        let cProfesor = fila.insertCell();
        let cEstudiantes = fila.insertCell();
        let cHorario = fila.insertCell();
        
        
        cNombre.innerHTML = listaGrupos[i]['nombre'];
        cLaboratorio.innerHTML = listaGrupos[i]['laboratorio'];
        cProfesor.innerHTML = listaGrupos[i]['profesor'];
        cEstudiantes.innerHTML = listaGrupos[i]['cantidad_de_estudiantes'];
        cHorario.innerHTML = listaGrupos[i]['horario'];
        
        
    }

};

