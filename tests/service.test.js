import {
    service,
    db
} from "../src/service";

describe('service.js', () => {
    test('getAllMovies', () => {
        // const getMock = jest.fn()
        /* getMock.mockImplementationOnce(() => {
            return {
                value() {
                    return [{
                        id: 42,
                        title: 'titre',
                        description: 'synopsys',
                        poster: 'url poster'
                    }]

                }
            }
        })
        jest.spyOn(db, 'get').mockImplementationOnce(getMock)

        expect(service.getAllMovies()).toEqual([{
            id: 42,
            title: 'titre',
            description: 'synopsys',
            poster: 'url poster'
        }])
        expect(getMock).toHaveBeenNthCalledWidth(1, 'movies)
    })
})
*/
        jest.spyOn(db, 'get').mockImplementationOnce(() => {
            return {
                value() {
                    return [{
                        id: 42,
                        title: 'titre',
                        description: 'synopsys',
                        poster: 'url poster'
                    }]

                }
            }
        })
        expect(service.getAllMovies()).toEqual([{
            id: 42,
            title: 'titre',
            description: 'synopsys',
            poster: 'url poster'
        }])
    })
    test('removeMovieById', () => {
        const writeMock = jest.fn()
        const removeMock = jest.fn().mockImplementationOnce(() => {
            return {
                write: writeMock
            }
        })
        const getMock = jest.fn().mockImplementationOnce(() => {
            return {
                remove: removeMock
            }
        })
        jest.spyOn(db, 'get').mockImplementationOnce(getMock)
        service.removeMovieById('42')
        expect(getMock).toHaveBeenNthCalledWith(1, 'movies')
        expect(removeMock).toHaveBeenNthCalledWith(1, {
            id: 42
        })
        expect(writeMock).toHaveBeenCalledTimes(1)
    })
    test('getMovieById', () => {
        const findMock = jest.fn()
        findMock.mockImplementationOnce(() => {
            return {
                value() {
                    return [{
                        id: 42,
                        title: 'titre',
                        description: 'synopsys',
                        poster: 'url poster'
                    }]
                }
            }
        })
        const getMock = jest.fn()
        getMock.mockImplementationOnce(() => {
            return {
                find: findMock
            }
        })
        jest.spyOn(db, 'get').mockImplementationOnce(getMock)
        service.getMovieById('42')
        expect(getMock).toHaveBeenNthCalledWith(1, 'movies')
        expect(findMock).toHaveBeenNthCalledWith(1, {
            id: 42
        })
    })
    test('addMovie', () => {
        const writeMock = jest.fn()
        const pushMock = jest.fn().mockImplementationOnce(() => {
            return {
                write: writeMock
            }
        })
        const getMock = jest.fn().mockImplementationOnce(() => {
            return {
                push: pushMock
            }
        })
        jest.spyOn(db, 'get').mockImplementationOnce(getMock)
        jest.spyOn (Date, 'now').mockImplementationOnce(() => 42 )
        const movie ={
            title: 'titre',
            description: 'synopsys',
            poster: 'url poster'
        }
        expect(service.addAMovie(movie)).toEqual({
            id: 42,
            title: 'titre',
            description: 'synopsys',
            poster: 'url poster'
        })

        expect(getMock).toHaveBeenNthCalledWith(1, 'movies')
        expect(pushMock).toHaveBeenNthCalledWith(1, {
            id: 42,
            title: 'titre',
            description: 'synopsys',
            poster: 'url poster'
        })
        expect(writeMock).toHaveBeenCalledTimes(1)
    })
    test('updateMovieById', () => {
        const writeMock = jest.fn()
        const assignMock = jest.fn().mockImplementationOnce(() => {
            return {
                write: writeMock
            }
        })
        const findMock = jest.fn()
        findMock.mockImplementationOnce(() => {
            return {
                value() {
                    return [{
                        id: 42,
                        title: 'titre',
                        description: 'synopsys',
                        poster: 'url poster'
                    }]
                },
                assign: assignMock
            }
        })
        const getMock = jest.fn()
        getMock.mockImplementationOnce(() => {
            return {
                find: findMock
            }
        })
        jest.spyOn(db, 'get').mockImplementationOnce(getMock)
        service.updateMovieById('42')
        expect(getMock).toHaveBeenNthCalledWith(1, 'movies')
        expect(findMock).toHaveBeenNthCalledWith(1, {
            id: 42
        })
        expect(writeMock).toHaveBeenCalledTimes(1)
    })
})