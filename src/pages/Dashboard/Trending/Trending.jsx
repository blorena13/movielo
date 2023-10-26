import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Card from "./Card";

function Trending(){
    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
    const header = 'accept: application/json';
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

    const [trending, setTrending] = useState([]);

     useEffect(() => {
         const url = `https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=3`;
         const config = {
            headers: {
                 Authorization: `Bearer ${API_KEY}`,
                 'accept': 'application/json'
         }
         } 
         const promise = axios.get(url, config, header);
         promise.then((res)=> {
          setTrending(res.data.results);
          console.log(res.data);
         });
        promise.catch((err) => {
             console.log(err.message);
         });
     }, []);
    

return(
   <Wrapper>
   {trending.map((card, index) => (
    <Card key={index} image={imageBaseUrl + card.poster_path} title={card.title} />
   ))}
   </Wrapper>
)
}

export default Trending;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 10px;

    div{
        margin-right: 20px;
        width: 180px;
    }
`