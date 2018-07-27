var button_collapse = document.getElementById("button-nav-collapse");

document.getElementById('hamburguer').className = "fas fa-times";

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



var button_dropdown = document.getElementById("toggle-profile-dropdown");

button_dropdown.addEventListener("click", function () {
    /*this.classList.toggle("active");*/

    let panel_profile = document.getElementById('profile-info-dropdown');


    if (panel_profile.className === "profile-info profile-info--hide") {
        panel_profile.className = "profile-info";
    } else {
        panel_profile.className = "profile-info profile-info--hide";
    }


});

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
