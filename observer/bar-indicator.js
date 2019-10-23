export class BarIndicator {

    constructor() {
        this.elementRef = document.createElement('div');

        this.elementRef.textContent = 'You are online!';
        this.elementRef.style.padding = '5px 10px';
        this.elementRef.style.margin = '5px 0';
        this.elementRef.style.textAlign = 'center';
        this.elementRef.style.backgroundColor = 'rgb(163, 255, 162)'

        document.body.appendChild(this.elementRef);
    }

    update(isOnline) {
        this.elementRef.textContent = isOnline ? 'You are online!' : 'You are offline :(';
        this.elementRef.style.backgroundColor = isOnline ? 'rgb(163, 255, 162)' : 'rgb(255, 162, 162)';
    }

}