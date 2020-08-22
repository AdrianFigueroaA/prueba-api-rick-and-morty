import rickMorty from './Personajes'
import $ from 'jquery'




rickMorty.then((personajes) => {
    const print  = document.getElementById('personajes')
personajes.forEach(e => {
        print.innerHTML +=  `<div class="card ocultar" id="${e.id}">
                             <img  src="${e.imagen}" class="card-img imagen" alt="image">
                                <div class="card-body">
                                <h5 class="card-title"id="${e.id}"> ${e.nombre}</h5>
                                <p class="card-text">Gender: ${e.genero}</p>
                                <p class="card-text">specie: ${e.especies}</p>
                                <p class="card-text">status: ${e.estado}</p>
                                </div>
                            </div>`
        
    });



    $('.card').click((e)=>{
        console.log(e.target)
        
        if ( $(`#${e.target.id}`).hasClass("ocultar")) {

            $(`#${e.target.id}`).removeClass("ocultar")
            $(`#${e.target.id}`).addClass("mostrar")

        } else {

            $(`#${e.target.id}`).removeClass("mostrar")
            $(`#${e.target.id}`).addClass("ocultar")
        }
       

        
     });
    


   

}).catch((error) => console.log(error))
