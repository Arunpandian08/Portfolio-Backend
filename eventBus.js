import EventEmitter from 'events'; // Import EventEmitter from the events module

// Create an instance of EventEmitter
const bus = new EventEmitter();

// Set the maximum listeners to 20 for the `bus` EventEmitter instance
bus.setMaxListeners(20);

export default bus;
