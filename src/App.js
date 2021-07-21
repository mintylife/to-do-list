import { render } from "@testing-library/react";
import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    //update react state
    this.setState({ [key]: value });
  }

  addItem() {
    //create item with unique ID
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    //copy of current list of items
    const list = [...this.state.list];
    //add new item to list
    list.push(newItem);
    //update state with new list and reset newItem input
    this.setState({ list: list, newItem: "" });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">To-do list</header>
        <body className="App-body">
          <br />
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>X</button>
                </li>
              );
            })}
          </ul>
          <input
            className="Adder"
            type="text"
            placeholder="Input item here..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button className="btn first" onClick={() => this.addItem()}>
            Add item
          </button>
        </body>
      </div>
    );
  }
}

export default App;
