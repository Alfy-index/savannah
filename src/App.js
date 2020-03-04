import React from 'react';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';
import Home from "./pages/Home";
import './App.css';

const App = () =>{
return <Router>
<Route path="/Home" exact>
    <Home/>
</Route>

</Router>

};
export default App;
