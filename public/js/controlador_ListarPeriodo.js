/*
Responsabilidades del controlador
    - Leer datos de la interfaz
    - Imprimir datos dentro de la interfaz
    - Validar datos (formularios)
    - Responder a eventos (click, change, keyup...)
    - Se comunica con el servicio, cuando se requiera algún procesamiento de datos
*/

'use strict';

window.addEventListener('load', listarPeriodos);

function imprimirListaPeridodos(plistaPeriodos){
    
    let tbody = document.querySelector('#tblListarPeriodos');
    /* let input_NombreP = document.querySelector('#txtNombrePeriodo'); 
    let input_EstadoP = document.querySelector('#txtEstadoPeriodo');  */
   
    tbody.innerHTML = '';

    for(let i = 0; i < plistaPeriodos.length; i++){

            let fila = tbody.insertRow();
            let cnombre_periodo = fila.insertCell();
            let cestado_periodo = fila.insertCell();
            
            let cConfiguracion = fila.insertCell();  // se crea esta variable para asignarle el boton
                
            cnombre_periodo.innerHTML = plistaPeriodos[i]['nombre_periodo'];
            cestado_periodo.innerHTML = plistaPeriodos[i]['estado_periodo'];


            //se crean los componentes para actualizar:

            let botonModificar = document.createElement('a');  //agrega el link para modficar
            botonModificar.classList.add('fas');  // clase de fontawsome para agregar el lapiz
            botonModificar.classList.add('fa-pencil-alt'); // clase de fontawsome para agregar el lapiz

            botonModificar.dataset._id = plistaPeriodos[i]['_id'];  //para que el lapiz pueda obetner el id de la linea

            botonModificar.addEventListener('click', buscar_por_id); // funcion declarada mas abajo del controlador 

            cConfiguracion.appendChild(botonModificar); // agrega el lapiz al html



            
            /*

            

            let botonEliminar = document.createElement('a');
            botonEliminar.classList.add('fas');
            botonEliminar.classList.add('fa-trash-alt');

            botonEliminar.dataset._id = plistaPeriodos[i]['_id'];

            botonEliminar.addEventListener('click', remover_usuario);

            cConfiguracion.appendChild(botonModificar);
            cConfiguracion.appendChild(botonEliminar);  */


    }
};

function listarPeriodos(){

        let listaPeriodos = obtenerListaPeriodos();
        console.log('entra a listar periodos');
        imprimirListaPeridodos(listaPeriodos);
};


function buscar_por_id(){  //funcion que se ejecuta en el servicio
    //binding -> permite que una funcion quede enlazada al componente que la llama
    let _id = this.dataset._id;
    let periodo = obtener_periodo_por_id(_id);

  /*  input_NombreP.value = periodo['input_NombreP'];
    input_EstadoP.value = periodo['estado_periodo'];   */
 
    
    console.log(periodo);



};

