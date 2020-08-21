
import axios from "axios";

class Personajes {
    constructor(nombre, id, genero, especies,estado,imagen) {

        this.nombre = nombre
        this.id = id
        this.genero = genero
        this.especies = especies
        this.estado = estado
        this.imagen = imagen

    }
}

const rickMorty = (() => {
    return new Promise(async (resolve, reject) => {
        try {
            const apiUrl = await axios.get("https://rickandmortyapi.com/api/character");
            let datos = apiUrl.data.results
            let personajes = []
            datos.forEach(e => {
                personajes.push(new Personajes(e.name,e.id,e.gender,e.species,e.status,e.image))
                
            });
            
            resolve(personajes)
        } catch (error) {
            reject(`Algo salio mal en la Promesa de rickMorty): ${error}`)
        }

        
    })
})();

export default rickMorty

  