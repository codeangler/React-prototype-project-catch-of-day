// let's go!
import React from 'react'; // dependency in node_console npm install react --save video 3 min 1.18
import { render } from 'react-dom'; // vid 3 min .30
import './css/style.css'; // video 5, letting webpack do hot builds of css
import App from './components/App';
import StorePicker from './components/StorePicker';

render( <App />, document.querySelector('#main')); // first what is being rendered, and then were it is being rendered must be passed in to the render method
