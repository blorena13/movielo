import { styled } from "styled-components";
import logo from "/src/assets/image-logo.png";
import logoName from "/src/assets/image.png";

function Header() {
  return (
    <Wrapper>
      <span>
        <p>Movielo</p>
        <img src={logo} />
      </span>
      <Search>
        <div>
          <ion-icon name="search-outline"></ion-icon>
          <input placeholder="Search movies" />
        </div>
        <UserProfile>
          <p>Lorena Barreto</p>
          <div></div>
        </UserProfile>
      </Search>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  width: 100%;
  background-color: #fd424f;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  img {
    width: 35px;
  }

  p {
    color: #092e4f;
    font-family: "Tilt Neon", sans-serif;
    font-weight: 500;
    font-size: 25px;
    margin-right: 15px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f83745;
    padding: 10px;
  }
`;

const Search = styled.div`
  display: flex;
  background-color: #fd424f;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  margin-left: 40px;
  div{
    display: flex;
    align-items: center;
  }
  input {
    border: none;
    width: 50%;
    background-color: #fd424f;
    outline: none;
    color: #ffffff;
    margin-left: 7px;
  }
  input::placeholder {
    color: #ffffff;
    font-style: bold;
    font-size: 12px;
    font-weight: 400;
  }
`;

const UserProfile = styled.div`
  display: flex;
  width: 200px;
  div {
    width: 40px;
    height: 40px;
    background-color: green;
  }

  p {
    font-family: "Lexend Deca", sans-serif;
    color: #ffffff;
    font-size: 12px;
    font-weight: 400;
  }
`;