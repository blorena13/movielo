import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import { styled } from "styled-components";

function NewReleases(){

    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
    const header = 'accept: application/json';
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

    const [newReleases, setNewReleases] = useState([]);

     useEffect(() => {
         const url = `https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1`;
         const config = {
            headers: {
                 Authorization: `Bearer ${API_KEY}`,
                 'accept': 'application/json'
         }
         } 
         const promise = axios.get(url, config, header);
         promise.then((res)=> {
          setNewReleases(res.data.results);
          console.log(res.data);
         });
        promise.catch((err) => {
             console.log(err.message);
         });
     }, []);

    return(
        <Wrapper>
        {newReleases.map((card, index) => (
         <Card key={index} image={imageBaseUrl + card.poster_path} title={card.title} />
        ))}
        </Wrapper>
    )
}

export default NewReleases;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 10px;

    div{
        margin-right: 20px;
        width: 180px;
    }
`