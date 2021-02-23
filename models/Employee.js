const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Creating the schema
const emplyeeSchema = new Schema({
    name: {
        type: String
    },
    designation: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    age: {
        type: Number
    }
}, {timestamps: true})

const Employee = mongoose.model("Employee", emplyeeSchema)
module.exports = Employee