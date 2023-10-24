import { useState } from "react";
import { styled } from "styled-components";

function Dashboard(){
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredCategory(index);
    };

    const handleMouseLeave = () => {
        setHoveredCategory(null);
    };

    return(
    <Wrapper>
        {['Trending', 'New Releases', 'Favorites', 'Watch Later', 'Coming Soon'].map((text, index) => (
            <div
            onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
            style={{color: hoveredCategory === index ? '#fd424f' : '#FFFFFF', backgroundColor: hoveredCategory === index ? '#222b31' : '#191c1f'}}
            > <p>{text}</p> </div>
        ))}
       
    </Wrapper>
    )
}

export default Dashboard;

const Wrapper = styled.div`
    background-color: #191c1f;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 100px;

    div{
        display: flex;
        flex-direction: column;
        color: #FFFFFF;
        padding: 10px;
        font-family: "Lexend Deca", sans-serif;
        font-size: 13px;
        transition: color 0.3s , background-color 0.3s;
        cursor: pointer;
        p{
            margin-left: 25px;
        }
    }
`