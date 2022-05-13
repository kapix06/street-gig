const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const eventSchema = new Schema({
    imageUrl : String,
	title: String,
    description : String,
    address : String,
    date : Date,
    genre : String,
},

{
    // this second object adds extra properties: `createdAt` and `updatedAt`
timestamps: true,
}

);

const Event = model("Event", eventSchema);

module.exports = Event;