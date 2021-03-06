import React from 'react'
import { useHistory } from 'react-router-dom'
import icon from '../../assets/npmsicon.png'
function NavHero() {
    const history = useHistory()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-dark">
                <div className="container-fluid flex">
                    <img className="mx-auto" src={icon} alt="" width={120} onClick={()=>{
                        history.push('/')
                    }} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                        <a className="nav-link  active" aria-current="page" href="#">Github <i className="ri-github-fill"></i></a>
                        </li>
                        
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavHero
