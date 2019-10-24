export class DrawingBoardUI {

    constructor(container, width, height) {
        this.currentTool = null
        this.attachCanvas(container, this.createCanvas(width, height))
    }

    createCanvas(width, height) {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = width
        canvas.height = height

        canvas.addEventListener('mousemove', (ev) => {
            if (this.currentTool) {
                this.currentTool.onMouseMove(ev.offsetX, ev.offsetY, ctx)
            }
        })

        canvas.addEventListener('mousedown', (ev) => {
            if (this.currentTool) {
                this.currentTool.onMouseDown(ev.offsetX, ev.offsetY, ctx)
            }
        })

        canvas.addEventListener('mouseup', (ev) => {
            if (this.currentTool) {
                this.currentTool.onMouseUp(ev.offsetX, ev.offsetY, ctx)
            }
        })

        return canvas
    }

    attachCanvas(container, canvas) {
        document.querySelector(container).appendChild(canvas)
    }

    changeTool(tool) {
        this.currentTool = tool
    }

}