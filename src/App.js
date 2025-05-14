import './App.css';
import AppModal from './components/aboutModal/AppModal';
import CounterApp from './components/CounterApp';
import DebounceInputSearch from './components/DebounceInputSearch';
import PassDataFromPtoC from './components/PassDataFromPtoC';
import StopwatchApp from './components/StopwatchApp';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      <h1>React Practise</h1>
      <CounterApp />
      <TodoApp />
      <PassDataFromPtoC />
      {/* <DebounceInputSearch /> */}
      <StopwatchApp />
      <AppModal />
    </div>
  );
}

export default App;
