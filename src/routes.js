import React from "react";
import { Route, Router, IndexRoute } from "react-router";
import App from "./App.js";
import Appone from "./app1.js";
import home from "./home.js";

export default function(){
  return (
  	<Route path='/' component={home}>
  	    <Route path='mlb' component={App}/>  
  	    <Route path='nba' component={Appone}/>  
  	</Route>
   );
}