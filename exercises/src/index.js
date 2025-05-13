import React from "react";
import ReactDOM from 'react-dom/client'; //render the first element of the page

        //First letter must be uppercase, because I created
import First from './components/first';
import GoodMorning from './components/goodMorning';

const content = <GoodMorning name="Gui" age={25}/>; //react is used with .jsx

const root = ReactDOM.createRoot(document.getElementById('root')); //talks with the page
root.render(content);
 //lauches <h1>..., inside the element of id root
