validacion_rol_dashboard();
validacion_rol_nav();

var button_collapse = document.getElementById("button-nav-collapse");

button_collapse.addEventListener("click", function () {
    /*this.classList.toggle("active");*/

    let panel_menu = document.getElementById('panel-menu');

    let icon_menu = document.getElementById('hamburguer');

    if (panel_menu.className === "panel-menu panel-menu--hide") {
        panel_menu.className = "panel-menu";
    } else {
        panel_menu.className = "panel-menu panel-menu--hide";
    }

    if (icon_menu.className === "fas fa-bars") {
        icon_menu.className = "fas fa-times";
    } else {
        icon_menu.className = "fas fa-bars";
    }

});




let button_dropdown = document.getElementById("toggle-profile-dropdown");

button_dropdown.addEventListener("click", function () {
    /*this.classList.toggle("active");*/

    let panel_profile = document.getElementById('profile-info-dropdown');


    if (panel_profile.className === "profile-info profile-info--hide") {
        panel_profile.className = "profile-info";
    } else {
        panel_profile.className = "profile-info profile-info--hide";
    }


});

let boton_salirPortal = document.querySelector('#boton_salir');
boton_salirPortal.addEventListener('click', salir);

function salir(){

    window.location.href = "inicioSesion.html";  
}

   


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});

function validacion_rol_dashboard (){
    let tipoAcceso = JSON.parse(localStorage.getItem('tipoDeRol'));
    console.log(tipoAcceso);

    let button_usuario = document.getElementById('button-usuario');
    let button_solicitud = document.getElementById('button-solicitud');
    let button_sede = document.getElementById('button-sede');
    let button_carrera = document.getElementById('button-carrera');
    let button_curso = document.getElementById('button-curso');
    let button_periodo = document.getElementById('button-periodo');
    let button_grupo = document.getElementById('button-grupo');
    let button_laboratorio = document.getElementById('button-laboratorio');

    let link_usuario = document.getElementById('link-usuario');
    let link_solicitud = document.getElementById('link-solicitud');
    let link_sede = document.getElementById('link-sede');
    let link_carrera = document.getElementById('link-carrera');
    let link_curso = document.getElementById('link-curso');
    let link_periodo = document.getElementById('link-periodo');
    let link_grupo = document.getElementById('link-grupo');
    let link_laboratorio = document.getElementById('link-laboratorio');

    if(tipoAcceso === 'Rectoría' || tipoAcceso === 'Decanatura'){
        button_usuario.className = "hidden";
        link_usuario.className = "hidden";
    }

    if(tipoAcceso === 'AsistenteDecanatura'){
        button_usuario.className = "hidden";
        link_usuario.className = "hidden";
    }

    if(tipoAcceso === 'Profesor'){
        button_usuario.className = "hidden";
        link_usuario.className = "hidden";

        button_sede.className = "hidden";
        link_sede.className = "hidden";

        button_carrera.className = "hidden";
        link_carrera.className = "hidden";

        button_curso.className = "hidden";
        link_curso.className = "hidden";

        button_periodo.className = "hidden";
        link_periodo.className = "hidden";

        button_grupo.className = "hidden";
        link_grupo.className = "hidden";

        button_laboratorio.className = "hidden";
        link_laboratorio.className = "hidden";
    }

    if(tipoAcceso === 'AsistenteProfesor'){
        button_usuario.className = "hidden";
        link_usuario.className = "hidden";

        button_solicitud.className = "hidden";
        link_solicitud.className = "hidden";

        button_sede.className = "hidden";
        link_sede.className = "hidden";

        button_carrera.className = "hidden";
        link_carrera.className = "hidden";

        button_curso.className = "hidden";
        link_curso.className = "hidden";

        button_periodo.className = "hidden";
        link_periodo.className = "hidden";

        button_grupo.className = "hidden";
        link_grupo.className = "hidden";

        button_laboratorio.className = "hidden";
        link_laboratorio.className = "hidden";
    }
};


function  validacion_rol_nav () {

    let tipoDeAcceso = JSON.parse(localStorage.getItem('tipoDeRol'));
    console.log(tipoDeAcceso);

    let menu_option_usuario = document.getElementById('hide-usuario');
    let menu_option_solicitud = document.getElementById('hide-solicitud');
    let menu_option_sede = document.getElementById('hide-sede');
    let menu_option_carrera = document.getElementById('hide-carrera');
    let menu_option_curso = document.getElementById('hide-curso');
    let menu_option_periodo = document.getElementById('hide-periodo');
    let menu_option_grupo = document.getElementById('hide-grupo');
    let menu_option_laboratorio = document.getElementById('hide-laboratorio');
    let menu_option_info_academica = document.getElementById('hide-info-academica');
    

    if(tipoDeAcceso === 'Rectoría' || tipoDeAcceso === 'Decanatura'){
        menu_option_usuario.className = "hidden";
    }

    if(tipoDeAcceso === 'AsistenteDecanatura'){
        menu_option_usuario.className = "hidden";
    }

    if(tipoDeAcceso === 'Profesor'){
        menu_option_usuario.className = "hidden";
        menu_option_sede.className = "hidden";
        menu_option_carrera.className = "hidden";
        menu_option_curso.className = "hidden";
        menu_option_periodo.className = "hidden";
        menu_option_grupo.className = "hidden";
        menu_option_laboratorio.className = "hidden";
        menu_option_info_academica.className = "hidden";
    }

    if(tipoDeAcceso === 'AsistenteProfesor'){
        menu_option_usuario.className = "hidden";
        menu_option_sede.className = "hidden";
        menu_option_carrera.className = "hidden";
        menu_option_curso.className = "hidden";
        menu_option_periodo.className = "hidden";
        menu_option_grupo.className = "hidden";
        menu_option_laboratorio.className = "hidden";
        menu_option_solicitud.className = "hidden"
        menu_option_info_academica.className = "hidden";
    }
};


