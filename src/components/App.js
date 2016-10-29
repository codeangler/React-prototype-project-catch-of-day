import React from 'react';
import Header from './Header';
import Order from './Order';
import Fish from './Fish';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

    //  Instate with E6 going forward ,  getinitialState if using React create class but deprecated, but this is using ES6 constructors
    this.state = {
      fishes: {},
      order: {}
    };

  }

  // Passing State down to child components
  addFish(fish) {
    // update our state
    const fishes = {...this.state.fishes}; // 
    // add in a new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //  this.state.fishes.fish1 = fish;  // can do this, but it's a best practice to rather make a copy and the update
    // set state
    this.setState({fishes}); // same as {fishes: fishes}
  }

  loadSamples() {
    this.setState({
      'fishes' : sampleFishes
    });
  }

  addToOrder(key){
    // take a copy of our state
    const order = {...this.state.order};
    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    // update our state
    this.setState({order});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            { Object
              .keys(this.state.fishes)
              .map(key => <Fish key={key} 
                index={key}
                addToOrder={this.addToOrder}
                details={this.state.fishes[key]}/>)
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;