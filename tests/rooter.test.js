import {app} from "../src/app";
import supertest from 'supertest'
import { service } from '../src/service'

describe('rooter.js', ()=>{
    test('DELETE /api/movie/:id', done =>{
        const removeMock = jest.fn()
        jest.spyOn(service, 'removeMovieById').mockImplementationOnce(removeMock)
        supertest(app)
            .delete('/api/movie/42')
            .expect(200)
            .expect (() =>{
                expect(removeMock).toHaveBeenNthCalledWith(1,'42')
            })
            .end(done)
    })
    test('PUT /api/movie/:id', done =>{
        const putMock = jest.fn()
        jest.spyOn(service, 'updateMovieById').mockImplementationOnce(putMock)
        supertest(app)
            .put('/api/movie/42')
            .expect(200)
            .expect (() =>{
                expect(putMock).toHaveBeenNthCalledWith(1,'42')
            })
            .end(done)
    })
    test('GET /api/movie/:id', done =>{
        const getMovieMock = jest.fn()
        jest.spyOn(service, 'getMovieById').mockImplementationOnce(getMovieMock)
        supertest(app)
            .get('/api/movie/42')
            .expect(200)
            .expect (() =>{
                expect(getMovieMock).toHaveBeenNthCalledWith(1,'42')
            })
            .end(done)
    })
    test('POST /api/movies', done =>{
        const addAMovieMock = jest.fn()
        jest.spyOn(service, 'addAMovie').mockImplementationOnce(addAMovieMock)
        supertest(app)
            .post('/api/movies')
            .send({title:'Hello',
                    poster: 'kfdjf',
                    descripton: 'jfofo'})
            .set('Content-Type','application/json')
            .expect(200)
            .expect (() =>{
                expect(addAMovieMock).toHaveBeenCalledTimes(1)
            })
            .end(done)
    })
    test('GET /api/movies', done =>{
        const getAllMoviesMock = jest.fn()
        jest.spyOn(service, 'getAllMovies').mockImplementationOnce(getAllMoviesMock)
        supertest(app)
            .get('/api/movies')
            .expect(200)
            .expect (() =>{
                expect(getAllMoviesMock).toHaveBeenCalledTimes(1)
            })
            .end(done)
    })
    
})