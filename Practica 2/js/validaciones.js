//inicializo la funcion para validar
function enviar() {
    //obtengo los valores del formulario
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var fecha_nacimiento = document.getElementById("fechanac");
    var sexo = document.getElementById("sexo");
    var valoracion = document.formulario.valoracion
    var email = document.getElementById("email");
    var comentario = document.getElementById("comentario");

    //expresiones regulares para validar campos
    var regExp1 = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/;
    var regExp2 = /^\d{1,2}\-\d{1,2}\-\d{2,4}$/;
    var regExp3 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (nombre.value == null || nombre.value == "" || !regExp1.test(nombre.value)) {
        alert("Debe ingresar un nombre valido");
        return false;
    } else if (apellido.value == null || apellido.value == "" || !regExp1.test(apellido.value)) {
        alert("Debe ingresar un apellido valido");
        return false;
    } else if (fecha_nacimiento.value == null || fecha_nacimiento.value == "" || !regExp2.test(fecha_nacimiento.value)) {
        alert("Debe ingresar una fecha valida. El formato correcto es 'dd-mm-aaaa'");
        return false;
    } else if (sexo.value == null || sexo.value == "" || !regExp1.test(sexo.value)) {
        alert("Debe ingresar su sexo");
        return false;
    } else if (email.value == null || email.value == "" || !regExp3.test(email.value)) {
        alert("Debe ingresar un mail valido");
        return false;
    } else if (valoracion.value == "Seleccione") {
        alert("Debe seleccionar una valoración")
        return false;
    }

//Muestra los valores al pasar todas las validaciones de campos
    alert("Nombre: " + nombre.value +
        "\nApellido: " + apellido.value +
        "\nFecha de Nacimiento: " + fecha_nacimiento.value +
        "\nSexo: " + sexo.value +
        "\nEmail: " + email.value +
        "\nComentario: " + comentario.value +
        "\nValoracion: " + valoracion.value);
}

//Click en restablecer: limpiar formulario

$(document).on('click', '#restablecer', function () {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fechanac").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("valoracion").value = "Seleccione";
    document.getElementById("email").value = "";
    document.getElementById("comentario").value = "";
});

//Click en cancelar: Volver al inicio

$(document).on('click', '#cancelar', function () {
    var elegir = confirm("¿Seguro que desea volver a la pagina anterior?");
    if(elegir == true){
        window.history.back();
    }
    else{
        window.location.href='encuesta.html';
    }
});

