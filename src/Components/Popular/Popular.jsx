import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Popular.css'
function Popular() {
    const [result, setresult] = useState([])
    const history = useHistory()
    useEffect(()=>{
        axios.get('https://api.npms.io/v2/search/suggestions?size=3&q=react').then(data=>{
            console.log(data.data);
            setresult(data.data)
        })
    },[]) 
    const handleDetails = (packagename) =>{
        history.push(`/details?name=${packagename}`)
    }
    return (
        <div className="Popular">
            <div className="container">
                <h2>Popular Libraries</h2>

                {result?
                    result.map((obj)=>{
                        
                        return(
                            <div className="row" key="obj.package.name" onClick={()=>{
                                handleDetails(obj.package.name)
                            }} >
                                    <div className="col-md-7">
                                        <h4>{obj.package.name}</h4>
                                        <p>{obj.package.description} <br />
                                        updated 3 months ago by <b> {obj.package.publisher.username} </b>
                                        </p>
                                        <i class="ri-price-tag-3-line"></i> <p> {
                                            obj.package.keywords?
                                            obj.package.keywords.map((word,i)=>{
                                                if (i < 3) {
                                                    return word + " "
                                                }
                                            })
                                            :null
                                        }</p>
                                    
                                    </div>
                                    <div className="col-md-5">
                                        Quality : {obj.score.detail.quality * 100} % <br />
                                        Maintenance : {obj.score.detail.maintenance * 100} % <br />
                                        Popularity : {obj.score.detail.popularity * 100} % <br />

                                    </div>
                            </div>
                        )
                    })
                    :null
                }


            </div>
        </div>
    )
}

export default Popular
