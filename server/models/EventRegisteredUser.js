import mongoose from "mongoose";

const RegisteredUserSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
        min: 3,
        max: 50
    },
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 50
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    eventpostId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
        // Add other options if needed
    }
}, { timestamps: true });

const EventUser = mongoose.model("EventUser", RegisteredUserSchema);
export default EventUser;
