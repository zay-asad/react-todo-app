import React, {Component} from 'react';
import './Todo.css';
import TodoItem from './components/TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // managing state and data
            list: [
                {
                    'todo': 'first todo item'
                },
                {
                    'todo': 'second todo item'
                },
                {
                    'todo': 'third todo item'
                }
            ],
            todo: ''
        };
    };

    //create new todo
    createNewToDoItem = (e) => {
      //prevent submit
      e.preventDefault();
      this.setState(({ list, todo }) => ({
        list: [
            ...list,
          {
            todo
          }
        ],
        todo: ''
      }));
    };

    //add/enter
    handleKeyPress = e => {
        if (e.target.value !== '') {
          //can be used with enter key
          if (e.key === 'Enter') {
            this.createNewToDoItem();
          }
        }
    };

    //gets value typed from input
    handleInput = e => {
      this.setState({
        todo: e.target.value
      });
    };


    //delete
    deleteItem = indexToDelete => {
      this.setState(({ list }) => ({
        list: list.filter((Todo, index) => index !== indexToDelete)
      }));
    };


    render() {
        return (
            <div className="Todo">
                <h1 className="Todo-Header">React Todo</h1>
                <div className="Todo-Container">
                    <div className="Todo-Content">

                        {this.state.list.map((item, key) => {
                                return <TodoItem
                                                key={key}
                                                item={item.todo}
                                                deleteItem={this.deleteItem.bind(this, key)}
                                                />
                          }
                        )}
                    </div>
                    <div>
                      <form onSubmit={this.createNewToDoItem}>
                       <input 
                       placeholder="Enter your first todo here..." 
                       type="text" 
                       value={this.state.todo} 
                       onChange={this.handleInput} 
                       onKeyPress={this.handleKeyPress}
                       required
                       />
                       <button className="Todo-Add"  type="submit"
                
                       >
                         Add Todo
                         </button>

                         </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default TodoList;
