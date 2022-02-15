import logo from './logo.svg';
import './App.css';
import Navbar from '../src/component/Navbar';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import { render } from '@testing-library/react';
import { Component } from 'react';
import axios from 'axios';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Outlet,Link } from "react-router-dom";

class App extends Component {
  constructor(props){
    console.log("in constructor");
    super(props);
    this.state = {
      items:[]
    }
  }

  componentDidMount() {
    console.log("mounted ===============================================")
    axios.get('http://localhost:3000').then((result) => {
      console.log("result :::::::::::::::::::::::::::", result);
      this.setState({
        items: result.data
      })
    })
  }


  addTodo = (item) => {
    axios.post('http://localhost:3000/todo',{name:item}).then((result) => {
      console.log("result of post ::::::::::::",result);
      this.setState({
        items: [...this.state.items, result.data],
      })
    })
  }

  deleteTodo = (id,e) => {
    console.log("id in app js :::::::::::",id);
    axios.delete(`http://localhost:3000/todo/${id}`).then((result) => {
      console.log("res od deleting is ::::::::::::",result)
      console.log("data od deleting is ::::::::::::",result.data)
      const items = this.state.items.filter(item => item.id !== id);  
      this.setState({ items });  
    })
  }

render(){ 
  return (
    <div>
        <Navbar />
      <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList items={this.state.items && this.state.items} deleteTodo={this.deleteTodo.bind(this)} />
    </div>
  );
}
  
}


export default App;
