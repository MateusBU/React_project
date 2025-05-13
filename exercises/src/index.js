import React from "react";
import ReactDOM from 'react-dom/client'; //render the first element of the page

import First from './components/first'

const content = <h1>React</h1>; //react is used with .jsx

const root = ReactDOM.createRoot(document.getElementById('root')); //talks with the page
root.render(content);
 //lauches <h1>..., inside the element of id root
