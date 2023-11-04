import { useContext, useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { styled } from "styled-components";
import { InfoContext } from "../../context/InfoContext";
import axios from "axios";

function SearchMovie() {
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const [search, setSearch] = useState({ searchValue: "" });
  const { isOpenSearch, setIsOpenSearch, isLoadingSearch, setIsLoadingSearch, setResultSearch } = useContext(InfoContext);

  function handleSearch(e) {
    if (e.target.value === "") {
        setIsOpenSearch(false);
    } else {
        setIsOpenSearch(true);
        getMovies({...search, searchValue: e.target.value});
    }
  }

  function getMovies(search){
    setIsLoadingSearch(true);

        const url = `https://api.themoviedb.org/3/search/movie?query=${search.searchValue}&language=pt-BR&page=1`;
        const config = {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            accept: "application/json"
          }
        };
        const promise = axios.get(url, config);
        promise.then((res) => {
          setResultSearch(res.data.results);
          console.log(res.data);
        });
        promise.catch((err) => {
          console.log(err.message);
        });
  }

  return (
    <Wrapper>
      <ion-icon name="search-outline"></ion-icon>
      <SearchInput>
        <DebounceInput
          minLength={3}
          debounceTimeout={500}
          placeholder={"Search movies"}
          type="text"
          onChange={handleSearch}
        />
      </SearchInput>
    </Wrapper>
  );
}

export default SearchMovie;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.div`
  input {
    border: none;
    background-color: #fd424f;
    outline: none;
    color: #ffffff;
    margin-left: 7px;
    width: 700px;
  }

  input::placeholder {
    color: #ffffff;
    font-style: bold;
    font-size: 12px;
    font-weight: 400;
  }
`;
