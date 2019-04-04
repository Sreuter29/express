import lowdb from 'lowdb' // va le chercher dans le fichier node module (c'est le cas  à chaque fois que l'on ne précède pas de ./)
import FileSync from 'lowdb/adapters/FileSync' // l'adapter pour pouvoir écrire dans un fichier de façon synchrone et ne pas utiliser wait par ex

const adapter = new FileSync ('data/movies.json') //crée l'adapter qui va utiliser ficher json va chercher json depuis la racine du projet
const db = lowdb(adapter) //va chercher ce qu'il y a dans json et crée une base de donnée
db.defaults({ // je donne par défault le fichier qui suit au cas où ma base de donnée n'existe pas ou n'est pas trouvée; il crée ce fichier
    movies:[]
}).write() //préciser si on écrit ou si on lit = a créé un fichier json vide avec movies[] dans dossier data

export { db }
export const service = { //idem que crée const service = et de export default à la fin ecriture condensée
    getAllMovies(){ //on fait un méthode qui renvoie tte la liste des film grâce au json
        return db.get('movies').value() // on veut les value de la clé movies de notre json
    },
    addAMovie(movie){
        movie.id = Date.now() // donne à l'id la date à la miliseconde à laquelle on poste
        db.get('movies')
        .push(movie)
        .write()
        return movie
    },
    getMovieById(id){
        return db.get('movies')
        .find({id:parseInt(id)}) // un film qui a comme attribut un id de valeur id
        .value()
    },
    
    updateMovieById(id, movie){ 
        const dbMovie = db.get('movies')
        .find({id:parseInt(id)})
        if (dbMovie.value()){
        dbMovie.assign(movie)
        .write()
        return Object.assign({id},movie)
        }
    },

    removeMovieById(id){ 
        db.get('movies')
        .remove({ id : parseInt(id)})
        .write()
    }
}

//puis importer le service dans le router qui pourra appeler le service, l'appli ne connapit que le router