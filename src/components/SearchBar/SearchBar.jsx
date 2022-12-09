import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 400px;
`;

const SearchButton = styled.button`
  width: 70px;
  height: 35px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 14px;
  outline: none;
  margin-right: 5px;
&::placeholder {
  font: inherit;
  font-size: 14px;
}
`;


const SearchBar = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get('query') ?? '');

  const onChange = e => {
    const { value } = e.currentTarget;
    setSearch(value.trim());
  };

  const onHandleSubmit = e => {
    e.preventDefault();
      
    if (search.trim() === '') return;
    setSearchParams({ query: search });
    setSearch('');
  };

  return (
    <>
        <SearchForm onSubmit={onHandleSubmit}>
          <SearchFormInput
            value={search}
            name="search"
            onChange={onChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search movies"
          />
            <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
    </>
  );
};

export default SearchBar;