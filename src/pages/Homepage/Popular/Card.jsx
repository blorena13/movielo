import { styled } from "styled-components";

function Card({image, title}){
    return(
        <Wrapper>
        <img src={image} />
        <p>{title}</p>
        </Wrapper>
    )
}

export default Card;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    img {
        margin-top: 30px;
    }

    p{
        font-size: 13px;
        margin-top: 15px;
        font-family: 'Varela Round', sans-serif;
        font-weight: 600;
    }
`