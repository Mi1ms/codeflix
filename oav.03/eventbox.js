
const { EventEmitter } = require('events');
const event = new EventEmitter();

class MyEventEmitter {
    constructor() {
        this.events = {};

    }

    on(nameEvent, callback) {
        if (!this.events[nameEvent]) {
            this.events[nameEvent] = [];
        }
        this.events[nameEvent].push(callback);
        const t = this;
        // return unsubscribe function
        return () => {
            this.events[nameEvent] = undefined;
        }
    }

    emit(nameEvent, ...parameter) {
        if (this.events[nameEvent]) {
            this.events[nameEvent].map((callback) => {
                if (callback.length == parameter.length) {
                    callback(...parameter)
                }
            });

        } else {
            console.log( `error no event ${nameEvent}`)
        }
    }

}

function empty() {
    event.on('hi', () => { console.log('hi')});
    event.emit('hi');
}

function withArgs(names) {
    event.on('newFellow', (data) => {
        if (typeof data == 'string') {
            console.log(`parameter => ${data}`);
        } else if (Array.isArray(data)) {
            data.map( elem => {
                console.log('elem =>', elem);
            })
        } else {
            console.log(`Excepted array or string, given ${typeof data}`)
        }
    });
    event.emit('newFellow', names);
}

module.exports = {
    empty,
    withArgs,
    MyEventEmitter
}