// test(description, work)

test('basic test', () => {
    const result = 4;
    expect(result).toBe(4);
});

// const { calculateTotal } = require('../src/calculate.js') // для module.exports

import { calculateTotal } from '../calculate.js'

test('calculateTotal sum without discount', () => {
    const list = [
        {
            id: 333,
            name: 'Война и мир',
            count: 3,
            price: 400
        },
        {
            id: 777,
            name: 'Колобок',
            count: 1,
            price: 100000
        }
    ];

    const result = calculateTotal(list)
    expect(result).toBe(101200);
})

test('calculateTotal sum with discount', () => {
    const list = [
        {
            id: 333,
            name: 'Война и мир',
            count: 3,
            price: 400
        },
        {
            id: 777,
            name: 'Колобок',
            count: 1,
            price: 100000
        }
    ];

    const result = calculateTotal(list, true)
    expect(result).toBe(101200/2);
})

