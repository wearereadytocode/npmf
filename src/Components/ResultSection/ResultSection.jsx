import React, { useContext, useEffect, useState } from 'react'
import './ResultSection.css'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom'
import { SearchReloadContext } from '../../contexts/SearchRefresh';


function ResultSection() {
    const history = useHistory()
    const [result, setresult] = useState([])
    const [searchterm, setsearchterm] = useState("")
    const [loading, setloading] = useState(false)
    const handleDetails = (packagename) =>{
        history.push(`/details?name=${packagename}`)
    }
    const [refreshsearch, ] = useContext(SearchReloadContext)
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const term = urlParams.get('term')
        setsearchterm(term)
        console.log(term);
        setloading(true)
        axios.get(`https://api.npms.io/v2/search?q=` + term).then((data) => {
            setresult(data.data.results)
            console.log(data.data.results);
            setloading(false)
        })

    }, [refreshsearch])
    return (
        <div className="Results">
            <div className="container">
                <h2>Search result for "{searchterm}"</h2>
                {loading?
                <div className="w-full pt-28 flex">
                    <div className="mx-auto my-auto">
                        <CircularProgress />
                    </div>
                </div>
                :null} 
                <div className="row">
                    {
                        result.map((obj, i)=>{
                            return (
                                <div className="col-md-4">
                                    <div className="card" onClick={()=>{
                                        handleDetails(obj.package.name)
                                    }} >
                                        <h4>{obj.package.name}</h4>
                                        <p>{obj.package.description}</p>
                                        <p><i class="ri-price-tag-3-line"></i> {
                                            obj.package.keywords?
                                            obj.package.keywords.map((word,i)=>{
                                                if (i < 3) {
                                                    return word + " "
                                                }
                                            })
                                            :null
                                        }</p>
                                        <div className="rank">
                                            {i+1}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                    
                </div>
            </div>
        </div>
    )
}

export default ResultSection
