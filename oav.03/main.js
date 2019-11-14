const {empty, withArgs, MyEventEmitter} = require('./eventbox.js');
const me = new MyEventEmitter();

const unsubscribe = me.on("test", () => {
    console.log(`first test`);
})
me.on("test", (f, s) => {
    console.log(`parameter test : ${f} & ${s}`);
})

me.emit('test')
me.emit('test', 'its working', 'again working')
unsubscribe()
me.emit('test', 'its working', 'again working')