import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


library.add(faTrash);

class App extends React.Component{

  constructor(props){
    super(props);
    // state has two variables
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }

    // handler are binded here
    // to type input field remove error bind handle input
    
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    

  }


 

  handleInput(e) {
    this.setState({
      // variable set here
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  };

 
// add ops
  addItem(e) {
    // to stop page refreshing/loading after submit
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);

    if(newItem.text !==""){

      // Destructuring Assignment
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }

      })
    }

  };

  // delete ops
  deleteItem(key) {

    // all the items match by .filter
    const filteredItems = this.state.items.filter(item => item.key!== key);

    this.setState({
      items: filteredItems,
    })

  };


  // Edit ops
  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if(item.key === key) {
        item.text = text;

      }
    })

    this.setState({
      items: items,
    })

  };

    
  


  render () {

    return (
      <div className="App">
        <header>
          <h2 className="headcss">React To Do List</h2>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter Text"
          value={this.state.currentItem.text}
          onChange={this.handleInput}/>
          <button type="submit">Add</button>
        </form>
      </header>

      <ListItems items = {this.state.items}
      deleteItem = {this.deleteItem}
      setUpdate = {this.setUpdate}>  </ListItems>
      </div>
    );
  };
};
export default App;
