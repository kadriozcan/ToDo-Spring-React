import './App.css';
import Login from './components/Login';
import TodoApp from './components/ToDo';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <TodoApp />

    </div>
  );
}

export default App;
