import React from "react";


class Todo extends React.Component {
    constructor() {
        super()
        this.state = { todos: [{ id: 0, task: "eat", done: false }, { id: 1, task: "sleep", done: false }, { id: 2, task: "repeat", done: false }], text: '' }
    }
    addtodo = () => (this.setState({ todos: [...this.state.todos, { id: Math.random(), task: this.state.text, done: false }] }))
    delete = (id) => (this.setState({ todos: this.state.todos.filter(el => el.id !== id) }))
    done=(id)=>(this.setState({todos: this.state.todos.map(el=>el.id === id ? {...el, done : !el.done} : el) }))

    render() {
        console.log(this.state.todos)

        return (
            <div>
                <input onChange={(event) => this.setState({ text: event.target.value })} />
                <button onClick={() => this.addtodo()}>Add</button>
                {this.state.todos.map(el => <div> <li style={{textDecoration : el.done && "line-through"}}>{el.task}</li>
                    <button onClick={()=>this.done(el.id)}>done</button>
                    <button onClick={()=> this.delete(el.id)}>delete</button>
                </div>)}

            </div>
        )
    }
}
export default Todo;