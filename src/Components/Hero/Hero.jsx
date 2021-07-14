import React from 'react'
import NavHero from '../NavHero/NavHero'
import './Hero.css'
function Hero() {
    return (
        <div className="hero">
           <div className="container"><NavHero /></div> 
            <div className="container search-area text-center">
                <div className="row text-center">
                    <p className="md:text-6xl font-extrabold">Free and open source platform to search npm modules</p>
                    <div className="search rounded-xl mt-10">
                        <div className="row ">
                            <div className="col-md-10">
                                <input type="text" className="search-box text-black" name="search-box" id="search-box" placeholder="Search for a package"/>
                            </div>
                            <div className="col-md-2 ">
                               <button className="search-button rounded-xl">Search </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
