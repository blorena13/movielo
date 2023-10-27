import { styled } from "styled-components";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Popular/Card";
import Popular from "./Popular/Popular";

function Homepage() {
  const { category } = useParams();
  const [isDashboard, setDashboard] = useState(false);

  useEffect(() => {
    if(category){
      setDashboard(true);
    }
  },[category]);

  return (
    <>
      <Header />
      <Wrapper>
        <Dashboard />
        <Container>
          { category ? <Outlet /> : <Popular />}
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
