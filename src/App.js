import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoLIst from './components/TodoLIst';

function App() {
  const [Text, setText] = useState([]);
  const [todos, settodos] = useState([])
  return (
    <div className="App">
      <Form todos={todos}settodos={settodos} setText={setText}/>
      <TodoLIst todos={todos} settodos={settodos} Text={Text}/>
    </div>
  );
}

export default App;
