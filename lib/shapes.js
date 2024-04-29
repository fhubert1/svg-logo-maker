class Shapes {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;

    }

    render() {
        throw new Error('renderSvg method must be implemented on the child class');
    }
    
}

class Circle extends Shapes {
    constructor(color, text, textColor, radius) {
        super(color, text, textColor);
        this.radius = radius;
    }

    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />
            <text x="150" y="100" fill="${this.textColor}" font-size="40" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
        </svg>`;
    }
            
}

class Square extends Shapes {
    constructor(color, text, textColor, side) {
        super(color, text, textColor);
        this.side = side;
    }

    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="${this.side}" height="${this.side}" fill="${this.color}" />
            <text x="${this.side / 2}" y="${this.side / 2}" fill="${this.textColor}" font-size="20" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
        </svg>`;
    }
            
}

class Triangle extends Shapes {
    constructor(color, text, textColor, pointA, pointB, pointC) {
        super(color, text, textColor);
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    render() {
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="${this.pointA} ${this.pointB} ${this.pointC}" fill="${this.color}" />
            <text x="150" y="100" fill="${this.textColor}" font-size="40" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
        </svg>`;
    }
}

module.exports = {
    Shapes,
    Circle,
    Square,
    Triangle
};


