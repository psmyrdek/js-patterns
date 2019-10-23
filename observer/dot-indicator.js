export class DotIndicator {

    constructor() {
        this.elementRef = document.createElement('div');

        this.elementRef.style.width = '50px'
        this.elementRef.style.height = '50px'
        this.elementRef.style.backgroundColor = 'green'
        this.elementRef.style.borderRadius = '50%'

        document.body.appendChild(this.elementRef);
    }

    update(isOnline) {
        this.elementRef.style.backgroundColor = isOnline ? 'green' : 'red';
    }

}