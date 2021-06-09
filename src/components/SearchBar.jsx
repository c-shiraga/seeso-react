import React, { useContext } from 'react'
import {UserProfile} from './Main';

const SearchBar = () => {

    const [searchWord, setSearchWord] = useContext(UserProfile);

    return (
        <div className="search-bar-area">
            <i class="fas fa-search search-icon fa-lg"></i>
            <input 
                type="text" 
                className="search-bar"
                value={searchWord}
                onChange={(event) => {setSearchWord(event.target.value)}} 
            />
        </div>
    )
}

export default SearchBar
