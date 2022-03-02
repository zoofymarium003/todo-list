import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
            todos: []
        }
        this.add = this.add.bind(this)
        this.inputChange = this.inputChange.bind(this)
    }
    add() {
        this.setState({ todos: [...this.state.todos, this.state.textValue] })
      //  console.log(this.state.todos)
      
        this.setState({textValue:''})
     
    }
    inputChange(e) {
       // console.log(e.target.value)
        this.setState({textValue:e.target.value})

    }
   render() {
        return (
            <div>
                {/* <h2>{this.state.textValue}</h2> */}
                {/* {JSON.stringify(this.state.todos)} */}
                <input type="text" onChange={this.inputChange} value={this.state.textValue} />
                {/* <input type="text" onChange={(e)=>{this.setState({textValue:e.target.value})}}/> */}
                <Button variant="dark" onClick={this.add}>+</Button>

              {this.state.todos.map((ele)=>{
                  return(
                      <>
                      <p>{ele}</p>
                      </>
                  )
              })}

            </div>
        );
    }
}

export default TodoList;