import React, { useState, useEffect, useRef } from 'react';

import { Wrapper, Content } from './SearchBar.style';

import searchIcon from '../../images/search-icon.svg';

type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};
const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
  const [state, setState] = useState('');

  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon"></img>
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        ></input>
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
