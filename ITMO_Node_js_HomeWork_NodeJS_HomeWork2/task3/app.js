const events = require('events');

const eventEmitter = new events.EventEmitter();


eventEmitter.on('myEvent', () => {
    console.log('Сработало событие myEvent');
});


eventEmitter.emit('myEvent');