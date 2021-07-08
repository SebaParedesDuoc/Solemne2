$(document).ready(function(){
    console.log("Dom cargado")

    $('#Nombres').blur(function() {
        if ($(this).val() == "") {
            console.log("Por favor ingrese su nombre completo");

            $('#alert').fadeIn('slow').text('Debe llenar campo de nombre')
        } else {
            console.log("dejó el input " + $(this).val());
            $('#alert').fadeOut('slow')
        }
    });

    $('#Email').blur(function() {
        if ($(this).val() == "") {
            console.log("Por favor ingrese su correo electronico");

            $('#alert').fadeIn('slow').text('Debe llenar campo correo electronico ')
        } else {
            console.log("dejó el input " + $(this).val());
            $('#alert').fadeOut('slow')
        }
    });

    $('#selectIdentificación').blur(function() {
        if ($(this).val() == 11) {
            console.log("El rut debe tener 11 caracteres");

            $('#alert').fadeIn('slow').text('Debe llenar campo de identificación')
        } else {
            console.log("dejó el input " + $(this).val());
            $('#alert').fadeOut('slow')
        }
    });

    $('#Telefono').blur(function() {
        if ($(this).val() == "") {
            console.log("Por favor ingrese su telefono");

            $('#alert').fadeIn('slow').text('Debe llenar campo de teléfono')
        } else {
            console.log("dejó el input " + $(this).val());
            $('#alert').fadeOut('slow')
        }
    });

    $('#Cuidad').blur(function() {
        if ($(this).val() == "") {
            console.log("Por favor ingrese cuidad en la que reside");

            $('#alert').fadeIn('slow').text('Debe llenar campo de cuidad')
        } else {
            console.log("dejó el input " + $(this).val());
            $('#alert').fadeOut('slow')
        }
    });

    $('#Mensaje').blur(function() {
        if ($(this).val() == 50) {
            console.log("Su mensaje debe tener más de 50 caracteres ");

            $('#alert').fadeIn('slow').text('Debe llenar campo de mensaje')
        } else {
            console.log("dejó el input " + $(this).val());
            $('#alert').fadeOut('slow')
        }
    });


    $('#Nombres').change(function(){
        console.log("Se modifico el contenido");
    });

    $('#Email').change(function(){
        console.log("Se modifico el contenido");
    });

    $('#selectIdentificación').change(function(){
        console.log("Se modifico el contenido");
    });

    $('#Telefono').change(function(){
        console.log("Se modifico el contenido");
    });

    $('#Cuidad').change(function(){
        console.log("Se modifico el contenido");
    });

    $('#Mensaje').change(function(){
        console.log("Se modifico el contenido");
    });


    $('#Formulario').submit(function() {
        if ($('#Nombres').val() == "") {
            event.preventDefault();
            console.log("Se frenó el envio del formulario")
            $('#alert').text("Porfavor llenar nombres")
            $('#alert').fadeIn('slow')
        } else {
            console.log("El formulario se envio correctamente")
        }
        
    })
})