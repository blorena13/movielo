import { styled } from "styled-components";
import logo from "/src/assets/movielo-cut.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp(){
    const [form, setForm] = useState({email: "", image: "", password: "", confirmPassword: ""});
  
    function handleForm(e){
      setForm({...form, [e.target.name]: e.target.value});
    }
  
      return(
      <Wrapper>
        <p>Sign Up</p>
        <form>
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
          placeholder="Profile image"
          type="imagem"
          name="image"
          value={form.image}
          onChange={handleForm}
          />

          <input 
          required
          placeholder="Password"
          type="password"
          autoComplete="new-password"
          name="password"
          value={form.password}
          onChange={handleForm}
          />

          <input 
          required
          placeholder="Confirm password"
          type="password"
          autoComplete="new-password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleForm}
          />

          <button style={{background: "transparent"}}> 
          <img src={logo} alt="Logo"/>
          </button>
        </form>
        <span> <p>Already have a Movielo account?</p> <Link to={`/`}><button>Login</button></Link></span>
      </Wrapper>
      )
  }
  
  export default SignUp;

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