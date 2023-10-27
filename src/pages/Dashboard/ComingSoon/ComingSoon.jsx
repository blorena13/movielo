import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Card from "./Card";

function ComingSoon(){
    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
    const header = 'accept: application/json';
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';
    const [upComing, setUpComing] = useState([]);

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1&region=BR`;
        const config = {
           headers: {
                Authorization: `Bearer ${API_KEY}`,
                'accept': 'application/json'
        }
        } 
        const promise = axios.get(url, config, header);
        promise.then((res)=> {
         setUpComing(res.data.results);
         console.log(res.data);
        });
       promise.catch((err) => {
            console.log(err.message);
        });
    }, []);

    return(
    <Wrapper>
        {upComing.map((card, index) => (
            <Card key={index} image={imageBaseUrl + card.poster_path} title={card.title} />
        ))}
    </Wrapper>
    )

}

export default ComingSoon;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 10px;

    div{
        margin-right: 20px;
        width: 180px;
    }
`