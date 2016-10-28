// notes from catch of day
completed video {1, 2, 3, }

## video 15 Displaying Data with JSX
<ul>
  <li>min 3    Object.keys()  returns an array that can then be looped over with .map()</li>
  <li></li>
  <li>min 5,   React wants unique ids of comopnet  called key on new HTML element,  in this case passing the Key obj works</li>
  <li></li>
  <li>when passing a variable to attribute in JSX no need for "", just e.g. alt={this.props.details.name}</li>
  <li></li>
  <li></li>
</ul>



## video 13 understanding State
<ul>
  <li>00.45  state is a REPRESENTATION of all data in application ///  state is like one object that holds all data for either component / piece or entire application </li>
  <li>like one big Object, we edit the DATA w/n React and React will update DOM with state change</li>
  <li>state refers a point in time DATA</li>
  <li>state is tied to App component  min 10.50</li>
  <li>get initial state </li>
  <li>Best practice is copy initial state before manipulating it</li>
  <li>min 21:45  way to pass down the tree is with props</li>
  <li></li>
  <li>min 8.30  How do I get text from inputs into an Object of component? </li>
  <li>min 10.33 Now that we have our fish object, how do we get it into our state</li>
  <li>State is tied to a component // or // app , so to share data, put data on state on app which is a parent </li>
  <li>11.10  get initial state,  </li>
  <li></li>`
  <li>min 14:07  when you want to update state there are several states to do   </li>
  <li>14.25 best practice to make a copy of state prior to manipulating || for performance and not exercise </li>
  <li>const fishes = { ... this.state.fishes} // ... is a spread, will take each item from object and spread it into this object....in other words making copy.</li>
  <li>min 16.00  set up time stamp and pass the who addfishform object fish{} to fishes{} data object</li>
  <li>17.45 but state hasn't been update... have to explicitly telling state which state to update
  Rx doesn't just watch.  we tell them, hey we updated this piece of state, so do something
  </li>
  <li>19.00 {fishes: fishes} in es6 same as {fishes}</li>
  <li>20.00 need to add the addFish() to the constructor within App </li>
  <li>20.54  how do we take addFish to app.js // how do I call it from a childcomponent a few levels deep.</li>
  <li>./app.js  in the component <inventory />  add the props  <inventory addFish={this.addFish}/> and it is now available to that component</li>
  <li>./inventory.js pass down to the <AddFishForm addFish={this.props.addFish}/> *** NOTE THE PROPS whenever data or state are passed it is passed by props.</li>
  <li>pass this method into the addFishForm object and return it with the fish(signular) object</li>
  <li>22.59 clear form  add ref to form, and call JS reset on fishForm.reset();</li>
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