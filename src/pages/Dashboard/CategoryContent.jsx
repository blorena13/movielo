import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Trending from "./Trending/Trending";
import Favorites from "./Favorites/Favorites";
import NewReleases from "./NewReleases/NewReleases";
import WatchLater from "./WatchLater/WatchLater";
import ComingSoon from "./ComingSoon/ComingSoon";
import Popular from "../Homepage/Popular/Popular";

function CategoryContent(){
const {category} = useParams();
return(
    <Wrapper>
        {category}
        {
        category === 'Trending' ? <Trending /> 
        : 
        category === 'Favorites' ? <Favorites />
        :
        category === 'New Releases' ? <NewReleases />
        :
        category === 'Watch Later' ? <WatchLater /> 
        :
        category === 'Coming Soon' ? <ComingSoon />
        :
        <Popular />}
    </Wrapper>
)
}

export default CategoryContent;

const Wrapper = styled.div`
margin-top: 113px;
font-family: 'Varela Round', sans-serif;
font-size: 25px;
font-weight: 400;
color: #FFFFFF;
padding-left: 40px;
`