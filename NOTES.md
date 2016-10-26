// notes from catch of day
completed video {1, 2, 3, }

## video 13 understanding State
<ul>
  <li>state refers a point in time DATA</li>
  <li>state is tied to App component  min 10.50</li>
  <li>get initial state </li>
  <li>Best practice is copy initial state before manipulating it</li>
  <li>min 21:45  way to pass down the tree is with props</li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>

## video 12  About React Router 4
<ul>
  <li>documenation: ReactRouter 4, use imperative API or <Redirect />component</li>
  <li>1.20 first need access to router // access to BrowerRouter at any level of // surface router // something called CONTEXT in React, state or props (pass data) or context (  )</li>
  <li>add to component to call / or access contextTypes</li>
  <li>React use HTML5 push state</li>
  <li>need to surface router from parent w/n component final min</li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>

## video 11  working with events
<ul>
  <li>same as typical JS events</li>
  <li>have to use Event System (Rx documentation) and Synthetic Events </li>
  <li>Event are done inline rather than </li>
  <li>min 1.56  onSubmit rather than onClick</li>
  <li>we'll add our own method in the StorePicker using ES6 </li>
  <li>** 3.15  render() method is bound to component e.g. StorePicker ||  onSubmit={}</li>
  <li>4.00 onSubmit will take action of form or refresh page</li>
  <li>prevent default of event call event.preventDefault() // vanilla JS</li>
  <li>grabbing the params</li>
  <li>In react stay away from touching DOM as much as possible min 5.15</li>
  <li>add   ref=""  w/n  JSX <input> removing string ref for function ref...6.30  rather ref={ (input) => {this.storeInput = input}}</li>

  <li>9.00 this w/n component class StorePicker extends  we will connect the class method goToStore() this to class StorePicker </li>
  <li>10.25 doesn't explicitly bind to w/ ES6 class , options use constructor of the component, `
  constructor() {
   super();
   this.goToStore = this.goToStore.bind(this); // essential loos for goToStore method and binds to 
   // min 12  will use for methods use more than one functions needing to access it
  }

  </li> 
  <li>min 12;23   go to JSX `onSubmit={this.goToStore.bind(this)}</li>
  <li>12.45  `onSubmit={(e) => this.goToStore(e)} // limitation is that instance creates a function</li>
  <li></li>
  <li></li>
  <li></li>
</ul>

## video 10 Helper & Utility Functions
<ul>
  <li>consider creating a helpers.js</li>
  <li>not a module not big enough</li>
  <li>./components/storepicker   input instead of value= which as a default state, use defaultValue={}</li>
  <li>min 2.15  is export is named export and not default export </li>
</ul>

## video 9  routing
<ul>
  
  <li>min 3;  set up router component call it "Root" or "App"  Wes likes "Root"</li>
  <li>min 5.30 if passing anything other than a string "" into component's props  use {}  e.g. {true} or {App} or {StorePicker}</li>
  <li></li>
  <li></li>
  <li></li>
</ul>

## video 8  stateless functional components
<ul>
  <li>converting over to </li>
  <li>pass 'props' as argument in anouymous functions </li>
  <li></li>
  <li></li>
</ul>

## video 7  passing Dynamic Data w/ props
<ul>
  <li>pass in data {this.props.tagline}</li>
  <li>in console  $r.props.tagline is like $0 in js w/n console</li>
  <li></li>
  <li></li>
  <li></li>
</ul>

## Video 6 Creating our Application Layout
<ul>
  <li>Make a new componet  /componets/app.js</li>
  <li>error    import React from 'React'   should be import React from 'react'</li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>


## Video 5 Loading CSS in React App

## Video 4  HTML & JSX
<ul>
  <li>2.30  class is reserved in JS so must use className</li>
  <li>Can only put one Parent Element in JSX</li>
  <li>Half to self close tag (e.g. html4  vs modern html5)</li>
  <li>        JSX { /*Hello comment 8 */}
</li>
 </ul>

## 
v3 min 7 Best practice ot put each component in a seperate file.

<ul>
  <li>Name component file just like function.</li>
  <li>import React from 'react';</li>
  <li>// StorePicker.js   a capital of Component
  export default StorePicker; </li>
  <li>Put it in it's own component file </li>
</ul>


// in index.js 
>import StorePicker from './components/StorePicker'


### Video 1
<- Start Server ->
npm start  // something Wes put in .json