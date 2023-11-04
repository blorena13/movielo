import { styled } from "styled-components";
import { useContext } from "react";
import { InfoContext } from "../../../context/InfoContext";
import Card from "../../../components/Card/Card";

function Searching() {
    const {resultSearch} = useContext(InfoContext);
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <Wrapper>
      {resultSearch.map((card, index) => (
        <Card
          key={index}
          image={imageBaseUrl + card.poster_path}
          title={card.title}
        />
      ))}
    </Wrapper>
  );
}

export default Searching;

const Wrapper = styled.div`
  display: grid;
  margin-top: 70px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 10px;
  padding-left: 40px;

  div {
    margin-right: 20px;
    width: 180px;
  }
`;
