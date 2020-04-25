import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from './actions/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  state = {
    newTodoText: '',
  };

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText);

    this.setState({ newTodoText: '' });
  };

  removeTodo = (id) => {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div>
        <ul>
          { this.props.todos.map(todo => (
            <li key={todo.id}>
              <input 
                type="text" 
                value={todo.text} 
                id={todo.id}                
                onChange={(e) => {}} 
              />
              <button onClick={(e) => this.removeTodo(todo.id)}>X</button>
            
            </li>
          )) }
        </ul>

        <input
          type="text"
          value={this.state.newTodoText}
          onChange={(e) => this.setState({ newTodoText: e.target.value })}
        />
        <button onClick={this.addNewTodo}>Novo todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);







