const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true}
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;