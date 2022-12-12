import {useState} from 'react'
import Todo from './Todo'
import './todoApp.css'
export default function TodoApp() {
    const [ title, setTitle ] = useState("")
    const [ todos, setTodos ] = useState([])

    function handleChange(event) {
        const value = event.target.value
        setTitle(value)
    }

    function handleSumbit(event) {
        event.preventDefault()
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }
        //Primera forma para actulizar
        // const temp = [...todos]
        // temp.unshift(newTodo)
        // setTodos(temp)

        //Segunda Forma
        setTodos([...todos, newTodo])
        setTitle("")
    }

    function handleUpdate(id, value) {
        const temp = [...todos]
        const item = temp.find(item => item.id === id)
        item.title = value
        setTodos(temp)
    }

    function handleDelete (id){
        const temp = todos.filter(item => item.id != id)
        setTodos(temp)
    }
  return (<>
  
  
    <h1 className='principal-title'>To do List</h1>
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSumbit}>
        <input onChange={handleChange} className="todoInput" value={title}/>
        <input  onClick={handleSumbit} type="submit" value="Create todo" className="btn-Create"/>
      </form>

      <div className='todosContainer'>
        {
            todos.map((item) => (
                <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
            ))
        }
      </div>
    </div>
    </>
  );
}
