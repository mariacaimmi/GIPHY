

const buscarGift = () => {
    var valor = $("#palabra").val();
    var clave_api = "L0lHJDnId1r1HT4RbQcGAWWFlpM4UPyG";

    $.get(`https://api.giphy.com/v1/gifs/search?api_key=L0lHJDnId1r1HT4RbQcGAWWFlpM4UPyG&q=${valor}&limit=25&offset=0&rating=g&lang=en`, (respuesta) => {
        let gft = $('#listGft');
        gft.empty();
        for (let index = 0; index < respuesta.data.length; index++) {
            var itemGitft = respuesta.data[index];
            console.log(itemGitft);
            gft.append(`<div > 
           <img src="${itemGitft['images']['original']['url']}" class="card-img-top" alt="${itemGitft.title}">
           
             <h5 class="card-title">${itemGitft.title}</h5>
           </div>`);




        };

    })
};

const enviarContacto = () => {
    let name = $("#nombre").val();
    let apellido = $("#apellido").val();
    let email = $("#email").val();
    let telefono = $("#telefono").val();
    let detalle = $("#detalle").val();

    let data = {
        type: "POST",
        url: "https://reqres.in/api/users",
        data: {
            first_name: name,
            last_name: apellido,
            email: email,
            telefono: telefono,
            detalle: detalle
        },
        dataType: "json",
        success: (respuesta) => {
            let listaUsuarios = $("#listaUsuarios");
            $("form").empty();
            listaUsuarios.append(`<div class="card-title"><p> nombre:${respuesta.first_name}</p>
            <p>apellido:${respuesta.last_name}</p> 
            <p>email:${respuesta.email}</p>
            <p>telefono:${respuesta.telefono}</p>
            <p>detalle:${respuesta.detalle}</p>  
            </div>`);
        },
        error: () => {
            console.log("Error al llamar a la API");
        }
    };
    $.ajax(data);
}

