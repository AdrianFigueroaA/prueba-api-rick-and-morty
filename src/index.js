import rickMorty from './Personajes'
import $ from 'jquery'




rickMorty.then((personajes) => {
    const person  = document.getElementById('personajes')
    personajes.forEach(e => {
        person.innerHTML +=  `
        
                                <div class="card" ;">
                                <img id="${e.id}" src="${e.imagen}" class="card-img imagen" alt="image">
                                <div class="card-body  mostrar  ${e.id}" ">
                                <h5 class="card-title">${e.nombre}</h5>
                                <p class="card-text">${e.genero}</p>
                                <p class="card-text"><small class="text-muted">${e.especies}</small></p>
                                <p class="card-text"><small class="text-muted">${e.estado}</small></p>
                                </div>
                            </div>`
        
    });
    
    // $('.imagen').click((e)=>{
    //    $(`.${e.target.id}`).css('display', 'none')
    // });
    
//         $('.imagen').click((e)=>{
// console.log(e.target)
//         //    if (e.target){
//         //       $(`.${e.target.id}`).css("display", "block");
//         //    }else{
//         //       $(`.${e.target.id}`).css("display", "none");
//         //    }
//         });
     


// $('.imagen').click((e)=>{
//     $(`.${e.target.id}`).css("display", "none");
//   });

// $('.imagen').click((e)=>{
//     $(`.${e.target.id}`).css("display", "block");
//   });
  



    // $('.imagen').click(function(e){
    //   $(`.${e.target.id}`).hide();
    // });

    $('.imagen').click(function(e){
        $(`.${e.target.id}`).show();
      });


  
   


}).catch((error) => console.log(error))
