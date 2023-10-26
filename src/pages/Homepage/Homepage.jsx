import { styled } from "styled-components";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import { Outlet, useParams } from "react-router-dom";

function Homepage() {
  const { category } = useParams();

  return (
    <>
      <Header />
      <Wrapper>
        <Dashboard />
        <Container> 
          <Outlet />
        </Container>
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
  min-height: 100vh;
  background-color: #222b31;
`;
