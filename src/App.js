import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Appbar from "./components/Appbar"
import Layout from "./components/Layout"
import Mailer from "./components/Mailer";
import Contact from "./components/Contact"
import Drawerpane from "./components/Drawer"
import MiniDrawer from "./components/Layout"

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <MiniDrawer/>
    
      </Router>
     
    </div>
  );
}

export default App;
