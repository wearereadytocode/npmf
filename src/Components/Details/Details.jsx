import React, { useEffect, useState } from 'react'
import './Details.css'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { useClipboard } from "use-clipboard-hook";
 

function Details() {
    const [result, setresult] = useState(false)
    const [loading, setloading] = useState(false)
    const [copystate, setcopystate] = useState(false)
    const {ref, copy, cut} = useClipboard({
        onSuccess: ()=>{
            setcopystate(true)
            setTimeout(()=>{
                setcopystate(false)
            },2000)
        } ,
    });
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const packagename = urlParams.get('name')
        console.log(packagename);
        setloading(true)
        axios.get(`https://api.npms.io/v2/package/` + packagename).then((data) => {
            setresult(data.data)
            console.log(data.data);
            setloading(false)
        })

    }, [])
 

    return (
        <div className="Details">
           <div className="container">
            
           {loading?
                <div className="w-full pt-28 flex">
                    <div className="mx-auto my-auto">
                        <CircularProgress />
                    </div>
                </div>
            :null}
            
            {result?
            <>
           <h1>{result.collected.metadata.name}</h1>
           <div className="float-right relative -mt-10">
                {copystate?<p className="ml-2 -top-8 text-sm absolute">Copied👍</p> :null}
                <div className="copybox items-center relative border-2 rounded-md flex  border-gray-300" onClick={copy}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 ml-6 my-auto w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <p id="copytext" ref={ref} className="ml-2 my-auto copytext">npm i {result.collected.metadata.name}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 absolute my-auto right-2 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                </div> 
           </div>
           <br />
           <hr /> 
               <div className="row">
                   <div className="col-md-8">
                       <p>Version {result.collected.metadata.version}</p>
                       <p className="desc">{result.collected.metadata.description}</p>
                       <p className="flex">Publisher:<div className="font-bold pl-4 ">{result.collected.metadata.publisher.username}</div></p>
                       <div className="md:flex mt-12 w-full md:space-x-4">
                           <div className="md:w-1/3 w-full flex flex-col">
                            <div className="mx-auto"><SemiCircleProgressBar percentage={result.score.detail.quality * 100} stroke="#a60ced" /></div>
                            <p className="mx-auto -mt-4">Quality</p>
                           </div>
                           <div className="md:w-1/3 w-full flex flex-col">
                            <div className="mx-auto"><SemiCircleProgressBar percentage={result.score.detail.popularity * 100} stroke="#00bbff" /></div>
                            <p className="mx-auto -mt-4">Popularity</p>
                           </div>
                           <div className="md:w-1/3 w-full flex flex-col">
                            <div className="mx-auto"><SemiCircleProgressBar percentage={result.score.detail.maintenance * 100} stroke="#8c0707" /></div>
                            <p className="mx-auto -mt-4">Maintenance</p>
                           </div>
                       </div>
                   </div>
                   <div className="col-md-4">
                       <div className="link-section">
                       <a href={result.collected.metadata.links.npm} className="links">Npm &nbsp;   <i class="ri-npmjs-line"></i></a>
                       <a href={result.collected.metadata.links.repository} className="links">Repository &nbsp;  <i class="ri-git-repository-line"></i></a>
                       <a href={result.collected.metadata.links.homepage} className="links">Home Page &nbsp;  <i class="ri-home-2-line"></i></a>
                       <a href={result.collected.metadata.links.bugs} className="links">Bug &nbsp;  <i class="ri-bug-line"></i></a>
                       </div>
                   </div>
               </div>
               </>
               :null}
           </div>
           
        </div>
    )
}

export default Details
