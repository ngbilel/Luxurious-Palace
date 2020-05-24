import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import './App.css';
function App() {

  return (
    <>
     <NavBar/>
     <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/room/:slug" component={SingleRoom} />
      <Route component={Error} />
     </Switch>
    </>
  );
}

export default App;
