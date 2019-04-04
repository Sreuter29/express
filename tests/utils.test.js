import { add } from "../src/utils";

describe('utils.js', () =>{   //describe pour déclarer  un groupe ou une suite de test
    test('add', () =>{          // je donne le nom que je veux au test
        expect(add(1,1)).toEqual(2)
    })
})

import { dayTime } from "../src/utils";

/*describe('utils.js', () =>{   //describe pour déclarer  un groupe ou une suite de test
    test('dayTime', () =>{          // je donne le nom que je veux au test
        //expect(dayTime(-1))  //crééra des erreurs et c'est normal
        expect(dayTime(5))
        expect(dayTime(10))
        expect(dayTime(14))
        expect(dayTime(20))
    })
})*/
describe ('dayTime', () =>{
    test('OK', () =>{
        expect(dayTime(0)).toBe('night')
        expect(dayTime(7)).toBe('morning')
        expect(dayTime(13)).toBe('afternoon')
        expect(dayTime(19)).toBe('evening')
    })
    test('exception', () =>{
        expect(() =>dayTime(-1)).toThrow(/invalid hour/) //Reggex
        expect(() =>dayTime(24)).toThrow(/invalid hour/) //Reggex

    })
})