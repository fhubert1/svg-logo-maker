const fs = require('fs');
const path = require('path');
const { Circle, Square, Triangle } = require('../lib/shapes');
const { generateSVG, validateLogoName, validateColor } = require('../index');

jest.mock('inquirer', () => ({
    prompt: jest.fn().mockResolvedValueOnce({ textColor: 'white', logoName: 'FLH', shapeColor: 'purple', shape: 'Circle' })
        .mockResolvedValueOnce({ radius: 50 })
}));

jest.mock('fs', () => ({
    writeFile: jest.fn()
}));

// mock test the writing of the generateSVG function using Circle
describe('generateSVG', () => {
    test('generateSVG should write data to file', () => {
        const data = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="purple" />
        <text x="150" y="100" fill="white" font-size="40" text-anchor="middle" alignment-baseline="middle">FLH</text>
    </svg>`
         generateSVG(data);
         expect(fs.writeFile).toHaveBeenCalledWith(expect.any(String), data, expect.any(Function));
     });
 });

 // validate the validate functions validateLogoName and validateColor
describe('Test validate functions', () => {
    test('validateLogoName should return true for valid logo name', () => {
        expect(validateLogoName('FLH')).toBe(true);
    });

    test('validateLogoName should return false for invalid logo name - number of characters exceeds 3', () => {
        expect(validateLogoName('FLHII')).toBe(false);
    });

    test('validateColor should return true for valid color hex', () => {
        expect(validateColor('#800080')).toBe(true);
    });

    test('validateColor should return true for valid basic color', () => {
        expect(validateColor('purple')).toBe(true);
    });

    test('validateColor should return true for invalid color because there is not list of valid colors', () => {
        expect(validateColor('bus')).toBe(true);
    });
});
