import { styled } from "styled-components";
import logo from "/src/assets/movielo-cut.png";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InfoContext } from "../../context/InfoContext";
import axios from "axios";

function SignIn(){
  const [form, setForm] = useState({email: "", password: ""});
  const {auth, login} = useContext(InfoContext);
  const navigate = useNavigate();

  function handleForm(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  function createSession(e) {
    e.preventDefault();

    const body = {
      email: form.email,
      password: form.password
    };

    const urlPost = `${import.meta.env.VITE_REACT_APP_API_URL}/sign-in`;
    const promise = axios.post(urlPost, body);
    promise.then(res => {
      console.log(res.data);
      login(res.data)
      navigate("/homepage");
    })
    promise.catch(err => {
      console.log(err.response.data.mensage);
    })
  }

    return(
    <Wrapper>
      <p>Login</p>
      <form onSubmit={createSession}>
        <input
        required
        placeholder="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleForm}
        />
        <input 
        required
        placeholder="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleForm}
        />
        <button onClick={(e)=> {createSession(e)}} style={{background: "transparent"}}> 
        <img src={logo} alt="Logo"/>
        </button>
      </form>
      <span> <p>Don't have a Movielo account yet?</p> <Link to={`/signUp`}><button>Sign up</button></Link></span>
    </Wrapper>
    )
}

export default SignIn;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #222b31;

    p{
      font-family: 'Tilt Neon', sans-serif;
      color: #FFFFFF;
      /* color: #fb921c; */
      font-size: 35px;
     
    }

    form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    }

    input{
      background-color: #343543;
      width: 300px;
      border: none;
      border-radius: 8px;
      padding: 10px;
      outline: none;
      color: #FFFFFF;
      margin-top: 10px;
    }

    button {
      border: none;
      margin-top: 40px;
      cursor: pointer;
      img{
        width: 80px;
      }
    }

    span{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      p{
        font-size: 12px;
      }

      button {
        margin-top: 15px;
        border: none;
        padding: 7px;
        background-color: #343543;
        color: #FFFFFF;
        border-radius: 5px;
      }
    }

`