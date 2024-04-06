import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      type: "All"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  onFilter = (type) => {
    this.setState({ type });
  }
  
  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
    if (this.state.type === "All") {
        return true && item.name.toLowerCase().search(this.state.search) !== -1;
    }
    if (this.state.type === "Fruit") {
        return item.type === "Fruit" && item.name.toLowerCase().search(this.state.search) !== -1;
    }
    if (this.state.type === "Vegetable") {
        return item.type === "Vegetable" && item.name.toLowerCase().search(this.state.search) !== -1;
    }
  }

// TODO (FilteredList): Create a Dropdown Menu with three different menu options: Fruit, Vegetables, and All
  render(){
    return (
        <div className = "filter-list">
          <h1>Produce Search</h1>
          <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Type 
          </Dropdown.Toggle>
          {/* TODO: Add more menu items with onSelect handlers*/}
          <Dropdown.Menu id="typeDropdown" title={"Type"} >
            <Dropdown.Item onClick={() => this.onFilter("All")}>All</Dropdown.Item><br></br>
            <Dropdown.Item  onClick={() => this.onFilter("Fruit")}>Fruit</Dropdown.Item><br></br>
            <Dropdown.Item  onClick={() => this.onFilter("Vegetable")}>Vegetable</Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown><br></br>
          <input type = "text" placeholder = "Search" onChange = {this.onSearch} />
          <List items = {this.props.items.filter(this.filterItem)} />
        </div>
    );
  }
}

export default FilteredList;