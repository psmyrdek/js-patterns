export class NetworkStatus {

    constructor() {
        this.subscribers = [];

        window.addEventListener('online', this.notify.bind(this, true));
        window.addEventListener('offline', this.notify.bind(this, false));
    }

    addSubscriber(subscriber) {
        this.subscribers.push(subscriber);
    }

    notify(isOnline) {
        this.subscribers.forEach(subscriber => {
            subscriber(isOnline)
        });
    }

}