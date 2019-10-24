import { Brush } from './Brush.js';
import { Pencil } from './Pencil.js';
import { Shape } from './Shape.js';

export class ToolsFactory {

    constructor() {
        this.brush = new Brush(10, 'red');
        this.pencil = new Pencil(1, 'gray');
        this.shape = new Shape(20, 'green');
    }

    getTool(tool) {
        switch (tool) {
            case 'brush':
                return this.brush;
            case 'pencil':
                return this.pencil;
            case 'shape':
                return this.shape;
        }
    }

}