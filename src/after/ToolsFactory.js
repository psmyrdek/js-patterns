import { Brush } from './Brush.js';
import { Pencil } from './Pencil.js';
import { Shape } from './Shape.js';

export class ToolsFactory {

    constructor() {
        this.brush = new Brush(20, 'lightblue');
        this.pencil = new Pencil(3, 'red');
        this.shape = new Shape(20, 'red');
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