import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5001/login', {name, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success") {
                navigate('/home')
            }
        })
        .catch(err=>console.log(err))
    }



    return(
        <div>
        <div className="d-flex justify-content-center align-items-center ">
        <div className="bg-white p-3 rounded w-25">
            <h2>로그인</h2>
            <form onSubmit = {handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">
                        <strong>name</strong>
                    </label>
                    <input
                    type="text"
                    placeholder="Enter Name"
                    autoCapitalize="off"
                    name="name"
                    className="form-control rounded-0"
                    onChange={(e)=> setName(e.target.value)}/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password">
                        <strong>비밀번호</strong>
                    </label>
                    <input type="password"
                    placeholder="비밀번호를 입력하세요"
                    name="password"
                    className="form-control rounded-0"
                    onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                


                <button type="submit" className="btn btn-success w-100 rounded-0">
                    로그인
                </button>
            </form>
             <p>Already Have an Account</p>
             
            <Link to ="/join" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
             가입하기
                </Link>
             
                
           
        </div>

       </div>
</div>
    )
}

export default Login;