import React from 'react'
import logo from '../../assets/npmsicon.png'
import './Navsub.css'
function NavSub() {
    return (
        <div className="NavSub">
      <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
  <img className="mx-auto" src={logo} alt="" width={120} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <div className="search">
           <input type="text" name="searchfield" id="searchfield" className="searchfield" placeholder="search for a package"/>
           <button className="searchbutton"><i class="ri-search-line"></i></button>
         </div>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}

export default NavSub
