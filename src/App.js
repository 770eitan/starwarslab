import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ShipList from "./pages/ShipList/ShipList";
import "./App.css";
import {Route,Routes} from 'react-router-dom'

function App() {
  //storing state inside our App component
 
  //URL that were going to be routing to and the name of that page. You can only change state on the component which the state exists
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path ='ship-list' element= {<ShipList/>}/>
      </Routes>
    </div>
  );
}

export default App;


//each route has a path and an element path - what URL are we looking for. Element is what do you want to render.