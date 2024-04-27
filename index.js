const Shapes = require('./lib/shapes.js');
const fs = require('fs');
const inquirer = require('inquirer');
const svgfile = 'logo.svg';

// generate svg logo files
//const renderCircleSVG = (radius, textColor)


// validate logo name
const validateLogoName = (input) => {
    if (input.length <= 3) {
        return true;
    }
    return "Logo name invalid - max 3 characters long."
};

// logo questions
inquirer.prompt([
    {
        type: 'input',
        message: 'Enter the text logo color',
        name: 'textColor',
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
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What is the shape of the logo?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
]).then((answers) => {
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
        })        
    } else if (answers.shape === 'Triange') {
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
        })        
    }
})