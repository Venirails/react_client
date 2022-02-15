import React, { Component } from 'react';

class TodoForm extends Component {
    state = {
        input: '',
    };
    handleInputChange(event) {
        this.setState({ input: event.target.value });
    }
    handleAddTodo() {
        this.props.addTodo(this.state.input);
        this.setState({ input: '' });
    }
    render() {
        return (
            <form class='mt-3' >
                <div class='form-group'>
                    <input
                        type='text'
                        class='form-control'
                        name='todo'
                        id='todo'
                        aria-describedby='helpId'
                        placeholder='Add Todo'
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.input}
                    />
                    <br/>
                    <button type='button'
                        class='btn btn-primary btn-lg btn-block'
                        onClick={this.handleAddTodo.bind(this)}> Add</button>
                </div>

            </form>
        )
    }
}
export default TodoForm;