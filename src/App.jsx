import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Pages/Home'
import SearchResult from './Pages/SearchResult'
import DetailsPage from './Pages/DetailsPage'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/result">
          <SearchResult />
        </Route>
        <Route path="/details">
          <DetailsPage />
        </Route>
      </Router>
    </div>
  )
}

export default App
