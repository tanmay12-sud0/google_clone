import React, {useEffect, useState} from 'react'
// import Apikey from "./Apikey"

// const CONTEXT_KEY = "fd62c31cb76997fd7"
// const Apikey = "AIzaSyDFItk-AziJxTO4ziqOacsuPoO_rX4ghaY"
const  useGoogleSearch = (term)  => {
    const [data, setdata] = useState(null)

    useEffect(() => {
       const fetchData = async() => {
           fetch(
               `https://www.googleapis.com/customsearch/v1?key=AIzaSyDFItk-AziJxTO4ziqOacsuPoO_rX4ghaY&cx=fd62c31cb76997fd7&q=${term}`
           ).then(response => response.json()).then(
               result => setdata(result)
           )
       } 
       fetchData()
    }, [term])
    // console.log(result)
     return {data}
}

export default  useGoogleSearch 
