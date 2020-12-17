import React, { useEffect, useState } from 'react'
import './Search.css'
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
function Search({hideButtons = false}) {
    const[{},dispatch] = useStateValue();
    const[input ,setinput] = useState();
    const history = useHistory();
    const Search = (e) => {
        e.preventDefault();
        history.push('/SearchPage')
        

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
    }
  
    return (
        <form className="search">
            <div className="search_input">
                <IconButton>
                <SearchIcon />
                </IconButton>
                <input value={input} onChange={e => setinput(e.target.value)} type="text" placeholder="Search Google or type a URL"/>
                <IconButton>
                <MicIcon />
                </IconButton>
               
            </div>
            
            {!hideButtons ? (
                <div className="search__buttons">
                <Button onClick={Search} type="submit" variant='outlined'>Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ):
            (
                <div className="search__buttons">
                <Button style={{display:"none"}} onClick={Search} type="submit" variant='outlined'>Google Search</Button>
                <Button style={{display:"none"}} variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )}
          
        </form>
    )
}

export default Search
