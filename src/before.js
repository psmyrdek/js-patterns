const TOOLS = {
    BRUSH: 'brush',
    PENCIL: 'pencil',
    SHAPE: 'shape'
}

const current = document.querySelector('.js-current-tool');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let tool = null

let drawing = false

function selectBrush(btn) {
    const color = btn.getAttribute('data-color')
    alert(color)
}

function removeActive() {
    document.querySelectorAll('.js-tool').forEach(t => t.classList.remove('active'))
}

function setActive(element) {
    element.classList.add('active')
}

document.querySelectorAll('.js-tool')
    .forEach(t => t.addEventListener('click', ev => {
        const selectedTool = ev.target
        tool = selectedTool.getAttribute('data-tool')
        removeActive();
        setActive(selectedTool);
        current.textContent = tool;
    }))

canvas.addEventListener('mousemove', (ev) => {
    if (tool === TOOLS.PENCIL && drawing) {
        ctx.lineWidth = 1
        ctx.lineCap = 'round'
        ctx.strokeStyle = 'black'
        ctx.lineTo(ev.offsetX, ev.offsetY)
        ctx.stroke()
    } else if (tool === TOOLS.BRUSH && drawing) {
        ctx.lineWidth = 5
        ctx.lineCap = 'round'
        ctx.strokeStyle = 'red'
        ctx.lineTo(ev.offsetX, ev.offsetY)
        ctx.stroke()
    }
})

canvas.addEventListener('pointerdown', (ev) => {
    if (tool === TOOLS.SHAPE) {
        const size = 20
        ctx.strokeStyle = 'green'
        ctx.strokeRect(ev.offsetX - size / 2, ev.offsetY - size / 2, size, size)
    } else if ([TOOLS.BRUSH, TOOLS.PENCIL].includes(tool)) {
        if (!drawing) {
            drawing = true
        }
    }
})

canvas.addEventListener('pointerup', () => {
    drawing = false
    ctx.beginPath()
})