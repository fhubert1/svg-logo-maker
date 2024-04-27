class Shapes {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;

    }

    renderSvg() {
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
        <svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="${this.radius}" fill="${this.color}" />
            <text fill="${this.textColor}" font-size="20" text-anchor="middle" fill="${this.textColor}"alignment-baseline="middle">${this.text}</text>
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
        <svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="${this.side}" height="${this.side}" fill="${this.color}" />
            <text fill="${this.textColor}" font-size="20" text-anchor="middle" fill="${this.textColor}"alignment-baseline="middle">${this.text}</text>
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
        const height = (Math.sqrt(3)/2) * this.si
        return `
        <svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
            <polygon points="${this.pointA} ${this.pointB} ${this.pointC}" fill="${this.color}" />
            <text fill="${this.textColor}" font-size="20" text-anchor="middle" fill="${this.textColor}"alignment-baseline="middle">${this.text}</text>
        </svg>`;
    }
}

