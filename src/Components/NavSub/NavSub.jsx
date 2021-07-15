import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/npmsicon.png'
import { SearchReloadContext } from '../../contexts/SearchRefresh'
import './Navsub.css'
function NavSub() {
  const history = useHistory()
  const [searchinput, setsearchinput] = useState("")
  const [refreshsearch,setrefreshsearch ] = useContext(SearchReloadContext)
  const handleSubmit = () => {
    history.push(`/result?term=${searchinput}`)
    setrefreshsearch(refreshsearch + 1)
  }
  return (
    <div className="NavSub">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <img className="mx-auto" src={logo} alt="" width={120} onClick={() => {
            history.push('/')
          }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="search">
                  <input type="text" name="searchfield" id="searchfield" className="searchfield" placeholder="Search for a package" onChange={
                    (e) => {
                      setsearchinput(e.target.value)
                    }

                  } />
                  <button className="searchbutton" onClick={handleSubmit}><i class="ri-search-line"></i></button>
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
