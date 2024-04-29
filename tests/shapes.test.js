const {Circle, Square, Triangle, Shapes} = require('../lib/shapes.js');

// Test Shapes class 
// test constructor passing valid data
// test render - should fail because render must be overridden by the child classes
describe('Shapes', () => {
    test('Shapes constructor should set properties correctly', () => {
        const myShape = new Shapes('purple', 'Test Shape', 'white');
        expect(myShape.color).toBe('purple');
        expect(myShape.text).toBe('Test Shape');
        expect(myShape.textColor).toBe('white');
    });

    // test render
    test('Shapes render should throw an error', () => {
        const myShape = new Shapes('purple', 'Test Shape', 'white');
        expect(() => myShape.render())
            .toThrow('render method must be implemented on the child class');
    });
});

// Test Circle class 
// test constructor passing valid data
// render should produce a valid svg based on the data based to the constructor
describe('Circle', () => {
    test('Circle constructor should set properties correctly', () => {
        const myCircle = new Circle('purple', 'Test Circle', 'white', 50);
        expect(myCircle.color).toBe('purple');
        expect(myCircle.text).toBe('Test Circle');
        expect(myCircle.textColor).toBe('white');
        expect(myCircle.radius).toBe(50);
    });

    test('Circle render should generate valid SVG', () => {
        const myCircle = new Circle('purple', 'Test Circle', 'white', 50);
        const expectedRenderedSvg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="50" fill="purple" />
            <text x="150" y="100" fill="white" font-size="40" text-anchor="middle" alignment-baseline="middle">Test Circle</text>
        </svg>`;
        expect(myCircle.render()).toBe(expectedRenderedSvg.trim());
    });
});

// Test Square class 
// test constructor passing valid data
// render should produce a valid svg based on the data based to the constructor
describe('Square', () => {
    test('Square constructor should set properties correctly', () => {
        const square = new Square('purple', 'Test Square', 'white', 100);
        expect(square.color).toBe('purple');
        expect(square.text).toBe('Test Square');
        expect(square.textColor).toBe('white');
        expect(square.side).toBe(100);
    });

    test('Square render should generate valid SVG', () => {
        const square = new Square('purple', 'Test Square', 'white', 100);
        const expectedSvg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="100" height="100" fill="purple" />
            <text x="50" y="50" fill="white" font-size="20" text-anchor="middle" alignment-baseline="middle">Test Square</text>
        </svg>`;
        expect(square.render()).toBe(expectedSvg.trim());
    });
});

// Test Triangle class 
// test constructor passing valid data
// render should produce a valid svg based on the data based to the constructor
describe('Triangle', () => {
    test('Triangle constructor should set properties correctly', () => {
        const triangle = new Triangle('blue', 'Test Triangle', 'white', '150,18', '244,182', '56,182');
        expect(triangle.color).toBe('blue');
        expect(triangle.text).toBe('Test Triangle');
        expect(triangle.textColor).toBe('white');
        expect(triangle.pointA).toBe('150,18');
        expect(triangle.pointB).toBe('244,182');
        expect(triangle.pointC).toBe('56,182');
    });

    test('Triangle render should generate valid SVG', () => {
        const triangle = new Triangle('blue', 'Test Triangle', 'white', '150,18', '244,182', '56,182');
        const expectedSvg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,18 244,182 56,182" fill="blue" />
            <text x="150" y="100" fill="white" font-size="40" text-anchor="middle" alignment-baseline="middle">Test Triangle</text>
        </svg>`;
        expect(triangle.render()).toBe(expectedSvg.trim());
    });
});