import express from 'express';
import { service } from './service';
import expressjsonschema from 'express-jsonschema';
const validate = expressjsonschema.validate;
// equivaut à export { validate } from 'express-jsonschema';
import {movieSchema} from './validation'
import { io } from './socket'

const router = express.Router(); //création du router

router.get('/movies' , (request,response) => {
    /*response.send ('pong router') créer une route ping à l'intérieur du router pour savoir si je ping bien le router et non l'application
a ce stade app.js ne connait pas le router -> on l'import dans fichier app*/
response.send(service.getAllMovies())
})

router.post('/movies', validate({body: movieSchema}), (request,response) => {
    const movie=service.addAMovie(request.body)
    response.send(movie)
    io.emit('movie-added', movie)
})

router.get('/movie/:id' , (request,response) => {    // /:id créé un paramètre dans movie
const movie = service.getMovieById(request.params.id)
if(movie){
    response.send(movie)
}
else{
    response.status(404)
    .send(`Movie of id ${request.params.id} is not found`)
}
})

router.put('/movie/:id' , validate({body: movieSchema}),(request,response) => { 
    const movie = service.updateMovieById(request.params.id, request.body)
    if(movie){
        response.send(movie)
        io.emit('movie-update', movie)
    }
    else{
        response.status(404)
        .send(`Movie of id ${request.params.id} is not found`)
    }
})

router.delete('/movie/:id' , (request,response) => { 
    response.send(service.removeMovieById(request.params.id))
    io.emit('movie-delete', request.params.id)
})




export { router }//on fait un export nommé % de export default router