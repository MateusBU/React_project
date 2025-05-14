import React from "react";
import ReactDOM from 'react-dom/client'; //render the first element of the page

        //First letter must be uppercase, because I created
// import First from './components/first';

//****COMPONENT WITH PARAMETERS****///
// import GoodMorning from './components/goodMorning';
// const content = <GoodMorning name="Gui" age={25}/>; //react is used with .jsx


//****IMPORT MULTIPLE COMPONENTS****///
// import Multi, {GoodAfternoon} from './components/multiples'
// const content = <div><GoodAfternoon name="Ana"/> <Multi.GoodEvening name="Gui"/></div>

//****COMPONENTS AS CLASS****///
// import Greeting from "./components/greetings";
// const content = <Greeting type="Good Morning" name="Jonas"/>; //these parameters are only readbly


//****FATHER AND CHILDREN****///
import Father from './components/father'
const content = <div><Father name="Sergio" lastname="Silva"/> </div>

const root = ReactDOM.createRoot(document.getElementById('root')); //talks with the page
root.render(content);
 //lauches <h1>..., inside the element of id root
