import { styled } from "styled-components";
import logo from "/src/assets/movielo-cut.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [form, setForm] = useState({
    email: "",
    profileImage: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function createUser(e) {
    e.preventDefault();

    const body = {
      email: form.email,
      profileImage: form.profileImage,
      name: form.name,
      username: form.username,
      password: form.password,
    };

    const urlPost = `${import.meta.env.VITE_REACT_APP_API_URL}/sign-up`;
    const promise = axios.post(urlPost, body);
    promise.then(res => {
      console.log("foi!")
      navigate("/");
    })
    promise.catch(err => {
      console.log(err.response.data.mensagem);
    })
  }

  return (
    <Wrapper>
      <p>Sign Up</p>
      <form onSubmit={createUser}>
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
          name="profileImage"
          value={form.profileImage}
          onChange={handleForm}
        />

        <input
          required
          placeholder="Name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleForm}
        />

        <input
          required
          placeholder="Username"
          type="text"
          name="username"
          value={form.username}
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

        <button onClick={(e)=> createUser(e)} style={{ background: "transparent" }}>
          <img src={logo} alt="Logo" />
        </button>
      </form>
      <span>
        {" "}
        <p>Already have a Movielo account?</p>{" "}
        <Link to={`/`}>
          <button>Login</button>
        </Link>
      </span>
    </Wrapper>
  );
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

  p {
    font-family: "Tilt Neon", sans-serif;
    color: #ffffff;
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

  input {
    background-color: #343543;
    width: 300px;
    border: none;
    border-radius: 8px;
    padding: 10px;
    outline: none;
    color: #ffffff;
    margin-top: 10px;
  }

  button {
    border: none;
    margin-top: 40px;
    cursor: pointer;
    img {
      width: 80px;
    }
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    p {
      font-size: 12px;
    }

    button {
      margin-top: 15px;
      border: none;
      padding: 7px;
      background-color: #343543;
      color: #ffffff;
      border-radius: 5px;
    }
  }
`;
