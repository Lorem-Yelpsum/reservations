import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar.jsx';


//this is just a demo 
const rest_id = window.rest_id;
//to verify we are getting a dynameic rest_id
console.log("this is what you put in your address bar" + rest_id);
ReactDOM.render(<Sidebar rest_id={rest_id} />, document.getElementById('sidebar'));
