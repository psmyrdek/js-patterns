export class ToolsUI {

    constructor(container) {
        const root = this.createRoot()
        this.createButtons(root)
        this.attachToContainer(container, root)
        this.subscribers = []
    }

    createRoot() {
        const root = document.createElement('div')
        root.classList.add('flex', 'flex-column')
        return root
    }

    createButtons(root) {
        root.appendChild(this.createButton('Pencil', 'pencil'))
        root.appendChild(this.createButton('Brush', 'brush'))
        root.appendChild(this.createButton('Shape', 'shape'))
    }

    attachToContainer(container, root) {
        document.querySelector(container).appendChild(root)
    }

    createButton(name, selector) {
        const btn = document.createElement('button');
        btn.setAttribute('data-tool', selector);
        btn.textContent = name;
        btn.addEventListener('click', () => {
            this.subscribers.forEach(s => s(selector))
        })
        return btn
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber)
    }

}