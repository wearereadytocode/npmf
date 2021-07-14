import React from 'react'
import NavHero from '../NavHero/NavHero'
import './Hero.css'
function Hero() {
    return (
        <div className="hero">
           <div className="container"><NavHero /></div> 
            <div className="container search-area text-center">
                <div className="row text-center">
                    <h2>Free and open source platform to search npm modules</h2>
                    <div className="search">
                        <div className="row">
                            <div className="col-md-10">
                                <input type="text" className="search-box" name="search-box" id="search-box" placeholder="search for a package"/>
                            </div>
                            <div className="col-md-2">
                               <button className="search-button">Search <i class="ri-search-line"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
