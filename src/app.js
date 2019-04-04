import express from 'express'
import { setTimeout } from 'timers'
import {router} from './rooter'
import cors from 'cors'

const app = express() //création d'une application

app.use(cors({
    origin: 'http://localhost:8081'
}))

app.use(express.json()) //parse en json

app.use((request,response, next) =>{
    console.log('je suis le premier middleware temporisé');
    setTimeout(() =>{
        next()
    },1500)
    /* équivaut à
    setTimeout(next,1500)
    Car next est de type fonction et que setTimeout attends en 1er argument un callback*/
})

app.get('/ping', (request,response) =>{
    response.send('pong')
})

/*app.post('/movie', (request,response) => {
    console.log(request.body);
    response.sendStatus(204)

})*/

app.use('/api' ,router) //pour utiliser le router en tant que middleware et le préfixer avec api pour lui donner un route

app.use(function(err, req, res, next) {
 
    if (err.name === 'JsonSchemaValidation') {
        // Set a bad request http response status or whatever you want
        res.status(400).send(err.validations);
    }else{
        res.status(500).send(err.message)

    }
});


export {app}