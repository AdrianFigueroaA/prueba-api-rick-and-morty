import rickMorty from './Personajes'
import $ from 'jquery'




rickMorty.then((personajes) => {
    const print  = document.getElementById('personajes')
personajes.forEach(e => {
        print.innerHTML +=  `<div class="card " id="${e.id}">
                             <img  src="${e.imagen}" class="card-img imagen" alt="image">
                                <div class="card-body ocultar ">
                                <h5 class="card-title"id="${e.id}">${e.nombre}</h5>
                                <p class="card-text">${e.genero}</p>
                                <p class="card-text"><small class="text-muted">${e.especies}</small></p>
                                <p class="card-text"><small class="text-muted">${e.estado}</small></p>
                                </div>
                            </div>`
        
    });



    $('.card').click((e)=>{
        console.log(e.target)
        
        if ( $(`#${e.target.id} .card-body`).hasClass("ocultar")) {

            $(`#${e.target.id} .card-body`).removeClass("ocultar")
            $(`#${e.target.id} .card-body`).addClass("mostrar")
            
        } else {

            $(`#${e.target.id} .card-body`).removeClass("mostrar")
            $(`#${e.target.id} .card-body`).addClass("ocultar")
        }
       

        
     });
    


   
//     let seleccion = document.getElementsByClassName("card");


//     for(let a of seleccion) {
//         a.addEventListener("click", elegir(a.id))
//       }
    
      

// function elegir(a){

// console.log(a)
//     // document.getElementById(a).getElementsByClassName( 'card-body').addClass("mostrar");

// }




// document.getElementsByClassName("card").addEventListener("click", function(e)
    
// // document.getElementById(e.target.id ).getElementsByClassName( 'card-body').addClass("mostrar");

// });



    

    //   $('.imagen').click(function(e){

    //     if ('ocultar') {
            
    //         $('.card-body').addClass("mostrar");
    //       } else {
    //         $('.card-body').addClass("ocultar");
    //       }
    //   });

   

}).catch((error) => console.log(error))
