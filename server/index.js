const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose
  .connect("mongodb+srv://root:1234@customer.sdkgs6p.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("mongoDB 연결 성공", "mongodb atlas sylee"))
  .catch((error) => console.error("DB 연결 에러 ", error));

mongoose.connection.on("error", (error) => {
  console.error("mongoDB 연결 에러", error);
});

mongoose.connection.on("disconnected", () => {
  console.error("mongoDB 연결이 끊겼습니다. 연결을 재시도합니다.");
  connect();
});

app.post('/join', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err=> res.json(err))
})

app.post('/login', (req, res) => {
    const {name, password} = req.body;
    EmployeeModel.findOne({name : name, password:password})
    .then(user => {
        if (user) {
            if(user.password === password) {
                res.json("Success")
            }  else {
                res.json("비밀번호가 맞지 않습니다.")
            }
        } else {
            res.json("아이디가 존재하지 않습니다!!")
        }
    })
})

app.listen(5001, () => {
    console.log("server is running")
})