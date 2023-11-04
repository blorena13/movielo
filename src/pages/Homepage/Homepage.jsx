import { styled } from "styled-components";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import { Outlet, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Popular from "./Popular/Popular";
import { InfoContext } from "../../context/InfoContext";
import Searching from "./Searching/Searching";

function Homepage() {
  const { category } = useParams();
  const [isDashboard, setDashboard] = useState(false);
  const { isOpenSearch } = useContext(InfoContext);

  useEffect(() => {
    if (category) {
      setDashboard(true);
    }
  }, [category]);

  return (
    <>
      <Header />
      <Wrapper>
        <Dashboard />
        <Container>{
          isOpenSearch ? <Searching />
          :
        category ? <Outlet /> : <Popular />}</Container>
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
