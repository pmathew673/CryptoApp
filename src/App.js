import React from "react";
import CryptoList from "./components/CryptoList";
//import  ReactDOM  from "react-dom";
//import {BrowserRouter} from "react-router-dom"
import HomePage from "./pages/HomePage";

const App=()=>{
    return(<> <HomePage/>
    <CryptoList/></>
       
    );
}
export default App;
