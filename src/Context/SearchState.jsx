import React, { useState } from 'react';
import ContextSearch from './ContextSearh';
const SearchState = (props) => {

    const [search, setSearch] = useState("");
    console.log(search);
    
  return (
      <ContextSearch.Provider value={{search,setSearch}}>
      {props.children}
    </ContextSearch.Provider>
  );
}

export default SearchState;
