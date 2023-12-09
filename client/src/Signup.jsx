import { useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'



function Signup() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordCheck, setPasswordCheck] = useState()
    const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword, passwordCheck);
  };

  const handlePasswordCheckChange = (e) => {
    const newPasswordCheck = e.target.value;
    setPasswordCheck(newPasswordCheck);
    validatePassword(password, newPasswordCheck);
  };

  const validatePassword = (newPassword, newPasswordCheck) => {
    // Your password validation logic here
    const isValid =
      newPassword.length >= 4 &&
      /[A-Za-z]/.test(newPassword) &&
      /\d/.test(newPassword) &&
      newPassword === newPasswordCheck;

    setErrorMessage(
      isValid
        ? ''
        : '비밀번호는 영어와 숫자 조합으로, 길이는 4 이상이어야 하며 비밀번호 확인과 일치해야 합니다.'
    );
  };

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5001/join', {name, password})
        .then(result => console.log(result), alert("가입 완료!"))
        .catch(err=> console.log(err))
        if(result.data === "Success") {
            navigate('/home')
        }
    }

    const isSame = password === passwordCheck;

    

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center ">
            <div className="bg-white p-3 rounded w-25">
                <h2>회원가입</h2>
                <form onSubmit = {handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
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
                            <strong>Password</strong>
                        </label>
                        <input type="password"
                        placeholder="비밀번호를 입력하세요"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="passwordCheck">
                        <strong>비밀번호 확인</strong>
                    </label>
                    <input type="password"
                    placeholder="비밀번호 확인"
                    name="passwordCheck"
                    className="form-control rounded-0"
                    value={passwordCheck}
                   /> 
                </div>


                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        가입하기
                    </button>
                </form>
                 <p>Already Have an Account</p>
                 
                <Link to ="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                 Login
                    </Link>

            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

           </div>
    </div>

    )

}
export default Signup;