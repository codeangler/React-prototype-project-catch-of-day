import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  constructor(props) {
    super(props);
    // getinitialState, but this is using ES6 constructors
    this.state = {
      fishes: {},
      order: {}
    };

  }
  addFish(fish) {
    // update our state
    const fishes = {... this.state.fishes};
    //  this.state.fishes.fish1 = fish;
    // set state
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;