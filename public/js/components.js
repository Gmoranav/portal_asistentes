validacion_rol();



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



function  validacion_rol () {

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
        document.getElementById('hide-usuario').classList.add("hidden");
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


