import React from 'react'; 
import { getFunName } from '../helpers';
class StorePicker extends React.Component{
  
  goToStore(event) {
    event.preventDefault(); // vanilla JS
    console.log('You Changed the URL');
    // first grab text from box
    const storeId = this.storeInput.value;
    console.log(`${storeId}`);
    // second we will transition from / to /store/store:id
    this.context.router.transitionTo(`/store/${storeId}`);
  } // no need for ,  w/n ES6  as an Object would

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}> {/* #11 min 3.15 render() is bound to componet's so this. will access other pieces of component */}
        { /*Hello comment & not at top level of return
        */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input }} /> {/* when input is rendered, it will put a refrence onto class itself */}
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
} // es6 components  vid 3 min 5.5  // must have render() in every component.

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;