import logo from './logo.svg';
import Form from './components/form';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Todo</h1>
     <Form />
     <TodoList />
    </div>
  );
}

export default App;
