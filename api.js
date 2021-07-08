$(document).ready(function() {

    $('#traer-personajes').click(function() {
        $.get({
            url: 'http://hp-api.herokuapp.com/api/characters',
            success: function(listado) {
    
                var contenedor = $('#cards-container')
                contenedor.empty()
    
                $.each(listado, function(i, personaje) {
                    contenedor.append("<div class='card'>" +
                        "<img src='" + personaje.image + "' class='card-img-top' alt='" + personaje.name + "'>" +
                        "<div class='card-body'>"+
                        "<h5 class='card-title'>" + personaje.name + "</h5>" +                      
                        "<p class='card-text'><b>Especie: </b>" + personaje.species + 
                        "</p><p><b>Casa: </b>" + personaje.house + "</p>" +
                        "</p><p><b>Actor/a: </b>" + personaje.actor + "</p>" +
                    "</div></div>")
    
                    console.log(personaje)
                });
                
            },
            error: function(e) {
                console.error(e)
            }
        });
    })
    
    
    $('#traer-casas').click(function() {
        $.get({
            url: 'http://hp-api.herokuapp.com/api/characters/house/gryffindor',
            success: function(listado) {
    
                var contenedor = $('#cards-container')
                contenedor.empty()
    
                $.each(listado, function(i, casa) {
                    contenedor.append("<div class='card'>" +
                        "<img src='" + casa.image + "' class='card-img-top' alt='" + casa.name + "'>" +
                        "<div class='card-body'>"+
                        "<h5 class='card-title'>" + casa.name + "</h5>" +                      
                        "<p class='card-text'><b>Especie: </b>" + casa.species + 
                        "</p><p><b>Casa: </b>" + casa.house + "</p>" +
                        "</p><p><b>Actor/a: </b>" + casa.actor + "</p>" +
                    "</div></div>")
    
                    console.log(casa)
                });
                
            },
            error: function(e) {
                console.error(e)
            }
        });
    })
    
    $('#traer-estudiantes').click(function() {
        $.get({
            url: 'http://hp-api.herokuapp.com/api/characters/students',
            success: function(listado) {
    
                var contenedor = $('#cards-container')
                contenedor.empty()
    
                $.each(listado, function(i, estudiante) {
                    contenedor.append("<div class='card'>" +
                        "<img src='" + estudiante.image + "' class='card-img-top' alt='" + estudiante.name + "'>" +
                        "<div class='card-body'>"+
                        "<h5 class='card-title'>" + estudiante.name + "</h5>" +                      
                        "<p class='card-text'><b>Especie: </b>" + estudiante.species + 
                        "</p><p><b>Casa: </b>" + estudiante.house + "</p>" +
                        "</p><p><b>Actor/a: </b>" + estudiante.actor + "</p>" +
                    "</div></div>")
    
                    console.log(estudiante)
                });
                
            },
            error: function(e) {
                console.error(e)
            }
        });
    })
    
    
    
    })