import React, { useState } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Pages/Home'
import SearchResult from './Pages/SearchResult'
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
      </Router>
    </div>
  )
}

export default App
