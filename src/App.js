import './App.css';
import CounterApp from './components/CounterApp';
import PassDataFromPtoC from './components/PassDataFromPtoC';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      <h1>React Practise</h1>
      <CounterApp />
      <TodoApp />
      <PassDataFromPtoC />
    </div>
  );
}

export default App;
