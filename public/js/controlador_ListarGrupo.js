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
        
        let cSede = fila.insertCell();
        let cCarrera = fila.insertCell();
        let cCurso = fila.insertCell();
        let cLaboratorio = fila.insertCell();
        let cEstudiantes = fila.insertCell();
        let cNombre = fila.insertCell();


        
        cSede.innerHTML = listaGrupos[i]['sedeGrupo'];
        cCarrera.innerHTML = listaGrupos[i]['carreraGrupo'];
        cCurso.innerHTML = listaGrupos[i]['cursoGrupo'];
        cLaboratorio.innerHTML = listaGrupos[i]['laboratorio'];
        cEstudiantes.innerHTML = listaGrupos[i]['cantidad_de_estudiantes'];
        cNombre.innerHTML = listaGrupos[i]['nombre'];
        
        
    }

};
