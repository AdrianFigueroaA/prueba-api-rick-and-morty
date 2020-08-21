import rickMorty from './Personajes'
import $ from 'jquery'




rickMorty.then((personajes) => {
    const person  = document.getElementById('personajes')
    personajes.forEach(element => {
        person.innerHTML +=  `
        
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img id="${element.id}" src="${element.imagen}" class="card-img imagen" alt="image">
      </div>
      <div class="col-md-8">
        <div class="card-body ${element.id}" ">
          <h5 class="card-title">${element.nombre}</h5>
          <p class="card-text">${element.genero}</p>
          <p class="card-text"><small class="text-muted">${element.especies}</small></p>
          <p class="card-text"><small class="text-muted">${element.estado}</small></p>
        </div>
      </div>
    </div>
  </div>  `
        
    });
    
    $('.imagen').click((e)=>{
       $(`.${e.target.id}`).css('display', 'block')
    });
    console.log(personajes)

}).catch((error) => console.log(error))
