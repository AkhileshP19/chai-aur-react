import { useState } from 'react'
import './App.css'
import { TodoProvider } from './context';
import { useEffect } from 'react';
import { TodoForm, TodoItem } from './components';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))); // check if the id we are passing equals to id of any of the individual todos & if its matches then update that other keep the previous todos as they were
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo));
  }

  // displying the todos that are already present in local storage
  useEffect(() => { // in local storage while setting the items we've to use a key and a value and while getting only key is enough
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // adding newly created todo to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
                <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {todos.map((todo) => (
                  <div 
                    key={todo.id}
                    className='w-full'
                  >
                    <TodoItem todo={todo}/>  
                  </div>
                ))}
            </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
