import express from 'express'
import { setTimeout } from 'timers';

const app = express()

app.use(express.json())

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

app.post('/movie', (request,response) => {
    console.log(request.body);
    response.sendStatus(204)

})

app.listen(5000,() => console.log('server listening on port 5000'))