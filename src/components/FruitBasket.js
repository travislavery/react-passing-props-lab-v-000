import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

// class FruitBasket extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }

//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     this.setState({ selectedFilter: event.target.value });
//   }

//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

const FruitBasket = ({updateFilterCallback, filters, fruit, currentFilter}) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={updateFilterCallback} filters={filters} />
      <FilteredFruitList list={fruit} />
    </div>
  )
}

FruitBasket.defaultProps = {
  filters: [],
  updateFilterCallback: '',
  currentFilter: null,
  fruit: []
}

export default FruitBasket;
