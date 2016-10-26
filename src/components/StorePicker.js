import React from 'react'; 

class StorePicker extends React.Component{
  render() {
    return (
      <form className="store-selector">
        { /*Hello comment & not at top level of return
        */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
} // es6 components  vid 3 min 5.5  // must have render() in every componenet.

export default StorePicker;