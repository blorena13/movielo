import { styled } from "styled-components";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";

function Homepage() {
  return (
    <>
      <Header />
      <Wrapper>
        <Dashboard />
        <Container></Container>
      </Wrapper>
    </>
  );
}

export default Homepage;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #222b31;
`;
