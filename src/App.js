import './App.css';
import AppModal from './components/aboutModal/AppModal';
import AppAccordion from './components/accordion/AppAccordion';
import CounterApp from './components/CounterApp';
import DebounceInputSearch from './components/DebounceInputSearch';
import PassDataFromPtoC from './components/PassDataFromPtoC';
import StopwatchApp from './components/StopwatchApp';
import TodoApp from './components/TodoApp';
import UseCallbackEx from './components/useMemoExamples/UseCallbackEx';

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
      <UseCallbackEx />
      <AppAccordion />
    </div>
  );
}

export default App;
