import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    // getinitialState, 
    // but this is using ES6 constructors
    this.state = {
      fishes: {},
      order: {}
    };
  }

  componentWillMount() {
    // this runs just before the <App /> is rendered
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`
      , {
        context: this,
        state: 'fishes'
      });

    // check if there is any order in localStorage so it isn't overwriten onload
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

    if(localStorageRef) {
      // update our App component's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref); 
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
    // JSON.stringify()
  }

  addFish(fish) {
    // Update our state
    // First make a copy of your current state
    const fishes = {...this.state.fishes};
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //  this.state.fishes.fish1 = fish;
    // set state
    this.setState({ fishes })
  }

  updateFish(key, updatedFish) {
    // make a copy of current state
    const fishes = {...this.state.fishes};
    // pass in the updatedFish from <Inventory />
    fishes[key] = updatedFish;
    // update state
    this.setState({ fishes });
  }

  loadSamples(){
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder(key){
    // take a copy of our state
    const order = {...this.state.order};
    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    // update our state
    this.setState({ order })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {Object
              .keys(this.state.fishes)
              .map((key => <Fish 
                key={key} 
                index={key}
                details={this.state.fishes[key]} 
                addToOrder={this.addToOrder}/>))
            }
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes}
          order={this.state.order}
          params={this.props.params}
        />
        <Inventory 
          addFish={this.addFish}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
        />
      </div>
    )
  }
}

export default App;