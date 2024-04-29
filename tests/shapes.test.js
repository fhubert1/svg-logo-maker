const {Circle, Square, Triangle, Shapes} = require('../lib/shapes.js');

describe('Shapes', () => {
    test('Shapes constructor should set properties correctly', () => {
        const shape = new Shapes('purple', 'Test Shape', 'white');
        expect(shape.color).toBe('purple');
        expect(shape.text).toBe('Test Shape');
        expect(shape.textColor).toBe('white');
    });

    test('Shapes render should throw an error', () => {
        const shape = new Shapes('purple', 'Test Shape', 'white');
        expect(() => shape.render()).toThrow('renderSvg method must be implemented on the child class');
    });
});