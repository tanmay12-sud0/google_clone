import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import './Searchpage.css'
// import Response from '../response'
import Search from './Search'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function Searchpage() {
    const [{term="Tanmay goyal"}, dispatch] = useStateValue() 
    const {data} = useGoogleSearch(term)

    // const data = Response
    // console.log(data)
    return (

        <div className="searchPage">
            <div className='searchPage__header'>
                
                     
                      <Link to="/">
                            <img className="searchPage__logo" src="https://lh3.googleusercontent.com/TwCpPV778LvaQE3dpFnzP_rj4Aa9btDpEvCVAH79SUrYzOAwbE0E_ye-XYV4MATkkzWYbTyAk7A_iBtJrlW6PsD9DbJmFoEvLDJG_kPI"/>
                        </Link>
                        <div className="searchpage__headerBody">
                    <Search hideButtons/>
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/All">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/Shopping">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/Maps">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/More">More</Link>
                            </div>

                        </div>

                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                
                                <Link to="/Setting">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                
                                <Link to="/tools">Tools</Link>
                            </div>
                            </div>

                </div>
                
                      </div>
               
             
                </div>
               
               {
                   true?
                   (
                    <div className='searchPage__results'>
                        <p className="searchPage__resultCount">
                            About {data?.searchInformation.formattedTotalResults} results
                            ({data?.searchInformation.formattedSearchTime} seconds)
                            for {term}
                        </p>

                        {
                            data?.items.map(item => (
                                <div className="'searchPage__result">
                                <a href={item.link}>{item.displayLink}</a>
                                <a className="searchPage__result_Title" href={item.link}><h2>{item.title}</h2></a>

                                <p className="searchPage__result_snippet">
                                    {item.snippet}
                                </p>
                                </div>
                            ))
                        }
                    </div>



                   ):
                   null
               }
            </div>
            
        
    )
}

export default Searchpage
