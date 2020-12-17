import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Search from './Search';

function Home() {
    return (
        <div className="home">
           
           <div className='home__header'>

                <div className='home__headerLeft'>
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>

                </div>
                <div className='home__headerRight'>
                <Link to="/gmail">G-Mail</Link>
                <Link to="/images">Images</Link>
                    <IconButton>
                    <AppsIcon />
                    </IconButton>
                    <Avatar />

                </div>

           </div>
           <div className='home__body'>

                <img src="https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif" alt="Not Found"/>

                <div className="home__inputContainer">
                    <Search />
                </div>


            <div style={{display:"flex",justifyContent:"center"}}>Created by Tanmay goyal</div>
           </div>


           
           



        </div>
    )
}

export default Home
