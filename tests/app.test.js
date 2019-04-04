import {app} from "../src/app";
import supertest from 'supertest'

describe('app.js', ()=>{
    test('GET /ping', done =>{
        supertest(app)
            .get('/ping')
            .expect(200, 'pong')
            .end(done)
    })
})