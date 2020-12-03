import React from 'react';
import createSearchBar from "./SearchBar"

function createNavBar(){

    return(
        <div>
            <a>Music Library</a>
            {createSearchBar()}
      </div>
    )

}

export default createNavBar;