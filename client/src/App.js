import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Login, Playing } from './components'
import './App.css'
import Spotify from 'spotify-web-api-js'

function App () {
  const spotifyWebApi = new Spotify(); 
  const [isAuthenticated, setAuth] = useState(false)
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {isAuthenticated ? <Redirect to='/playing' /> : <Login spotifyWebApi={spotifyWebApi} setAuth={setAuth} />}
        </Route>
        <Route exact path='/playing'>
          <Playing spotifyWebApi={spotifyWebApi} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App