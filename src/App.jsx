import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Pages/Home'
import SearchResult from './Pages/SearchResult'
import DetailsPage from './Pages/DetailsPage'
import './App.css'
import { SearchReloadContextProvider } from './contexts/SearchRefresh'

function App() {
  

  return (
    <div className="App">
      <SearchReloadContextProvider>

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
          
      </SearchReloadContextProvider>
    </div>
  )
}

export default App
