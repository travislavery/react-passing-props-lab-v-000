import React from 'react';

import FruitBasket from './FruitBasket';

//const App = () => <FruitBasket />;
class App extends React.Component {
	constructor() {
    super();

    this.state = {
      filters: [],
      currentFilter: null,
      fruit: [],
    };
  }

  componentDidMount() {
  	this.fetchFiltfruit
  	this.fetchFruit()
  }
///////Filter.js/////////
  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  filterItems = () => {
  	return this.state.currentFilter === 'all' ? this.state.fruit : this.state.fruit.filter(i => i.fruit_type === this.state.currentFilter)
//	const list = !this.props.filter || this.props.filter === 'all' ? 
//     this.state.items : 
//     this.state.items.filter(i => i.fruit_type === this.props.filter);
  }

///////FilteredFruitList.js//////
  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

//////FruitBasket.js///////
  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }
  render(){
  	return(
  	  <FruitBasket
  	  	updateFilterCallback={this.handleFilterChange} 
  	  	currentFilter={this.state.currentFilter} 
  	  	fruit={this.state.fruit} 
  	  	filters={this.state.filters}
  	  	/>
  	)
  }
}

export default App;
