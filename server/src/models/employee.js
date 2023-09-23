const { Schema, model } = require("mongoose")

const employeeSchemaSchema = new Schema({
    local: {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type:String,
            required: true
        },
    },
    roles: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
})


module.exports = model("Employee", employeeSchema)