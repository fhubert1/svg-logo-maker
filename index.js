const {Circle, Square, Triangle, Shapes} = require('./lib/shapes.js');
// const Circle = require('./lib/shapes.js');
// const Square = require('./lib/shapes.js');
// const Triange = require('./lib/shapes.js');

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const svgfile = 'logo.svg';
const distDir = './dist/';
const filePath = path.join(distDir, svgfile);
const defaultTextColor = 'white';
const defaultLogoColor = 'purple';

// generate svg logo files
//const renderCircleSVG = (radius, textColor)
const generateSVG = (data) => {

    fs.writeFile(filePath, data, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
          return;
        }
        console.log('Data has been written to the file successfully.');
    });  

}

// validate logo name
const validateLogoName = (input) => {
    if (input.length <= 3) {
        return true;
    }
    return "Logo name invalid - max 3 characters long."
};

// validate color hex or basic color
const validateColor = (input) => {

    regEx = /^#([0-9a-fA-F]{3}){1,2}$/;

    if (input.charAt() === '#' && !regEx.test(input)) {
        return false;
    }
    return true;
}

// logo questions
inquirer.prompt([
    {
        type: 'input',
        message: 'Enter the text logo color',
        name: 'textColor',
        default: 'white',
        validate: validateColor
    },
    {
        type: 'input',
        message: 'Enter logo name (max 3 characters)',
        name: 'logoName',
        validate: validateLogoName,
    },
    {
        type: 'input',
        message: 'What color would you like the shape of the logo?',
        name: 'shapeColor',
        default: 'purple',
        validate: validateColor,
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What is the shape of the logo?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
]).then((answers) => {
    const shapeColor = answers.shapeColor;
    const textColor = answers.textColor;
    const logoName = answers.logoName;

    if(answers.shape === 'Circle') {
        inquirer.prompt([
            {    
                type: 'number',
                name: 'radius',
                message: 'Enter the radius for the circle',
            }
        ]).then((answers) => {
            const radius = answers.radius;
            console.log(`radius is ${radius}`);
            
            const myCircle = new Circle(shapeColor, logoName, textColor, radius);
            console.log(myCircle.render());
            generateSVG(myCircle.render());            
        })
    } else if (answers.shape === 'Square') {
        inquirer.prompt([
            {    
                type: 'number',
                name: 'side',
                message: 'Enter the side for the square',
            }
        ]).then((answers) => {
            const side = answers.side;
            console.log(`side is ${side}`);

            const mySquare = new Square(shapeColor, logoName, textColor, side);
            console.log(mySquare.render());
            generateSVG(mySquare.render());             
        })        
    } else if (answers.shape === 'Triangle') {
        inquirer.prompt([
            {    
                type: 'input',
                name: 'pointA',
                message: 'Enter coordinates for point A (e.g. "x,y")',
            },
            {    
                type: 'input',
                name: 'pointB',
                message: 'Enter coordinates for point B (e.g. "x,y")',
            },
            {    
                type: 'input',
                name: 'pointC',
                message: 'Enter coordinates for point C (e.g. "x,y")',
            }
        ]).then((answers) => {
            const pointA = answers.pointA;
            const pointB = answers.pointB;
            const pointC = answers.pointC;
            console.log(`Point A coordinates ${pointA}`);
            console.log(`Point B coordinates ${pointB}`);
            console.log(`Point C coordinates ${pointC}`);
            const myTriangle = new Triangle(shapeColor, logoName, textColor, pointA, pointB, pointC);

            console.log(myTriangle.render());
            generateSVG(myTriangle.render());   

        })        
    }
})