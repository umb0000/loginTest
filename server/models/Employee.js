const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name : String,
    password: String

})

const EmployeeModel = mongoose.model("customer", EmployeeSchema)
module.exports = EmployeeModel