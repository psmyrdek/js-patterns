export class DebouncedTypingStrategy {

    constructor() {
        this.timer = null;
        this.DEBOUNCE_TIME = 3000;
    }

    onChange(value, handler) {
        if (this.timer) {
            window.clearTimeout(this.timer)
        }

        this.timer = setTimeout(() => {
            handler(value)
        }, this.DEBOUNCE_TIME)
    }

}