import './App.css';
import AppModal from './components/aboutModal/AppModal';
import AppAccordion from './components/accordion/AppAccordion';
import ChatApp from './components/chatAppUI/ChatApp';
import CounterApp from './components/CounterApp';
import DebounceInputSearch from './components/DebounceInputSearch';
import DropdownMenu from './components/dropdownMenu/DropdownMenu';
import DynamicUsage from './components/dynamicFormJsonSchema/DynamicUsage';
import FetchUsers from './components/fetchApisndSideEffects/FetchUsers';
import InfiniteScrollPagination from './components/fetchApisndSideEffects/InfiniteScrollPagination';
import DynamicFormUsage from './components/formValidation/DynamicFormUsage';
import FormValidation from './components/formValidation/FormValidation';
import InfiniteScrollImage from './components/infiniteScrollImageGallery/InfiniteScrollImage';
import PassDataFromPtoC from './components/PassDataFromPtoC';
import AppCart from './components/productListWithCartUsingRedux/AppCart';
import ChatAppMock from './components/realTimeChatAppMockedAPI/ChatAppMock';
import ExampleUsage from './components/resuableModal/ExampleUsage';
import ModalComponent from './components/resuableModal/ModalComponent';
import ModalExampleUsage from './components/resuableModal/ModalExampleUsage';
import SearchFilterWithDebounce from './components/searchandFilterWithDebounce/SearchFilterWithDebounce';
import StopwatchApp from './components/StopwatchApp';
import TableSortPagination from './components/tableWithSortingPagination/TableSortPagination';
import TabsEx from './components/tabsComponents/TabsEx';
import AppTheme from './components/themeUsingContext/AppTheme';
import TodoApp from './components/TodoApp';
import AppFinal from './components/todoWithContextAPI/AppFinal';
import TodoAppAddEditDelete from './components/todoWithContextAPI/TodoAppAddEditDelete';
import UseCallbackEx from './components/useMemoExamples/UseCallbackEx';

function App() {

  const handleSelect = (value) => {
    alert(`Selected: ${value}`);
  };

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
      <TabsEx />
      <DropdownMenu onSelect={handleSelect} options={['Option1', 'Option2', 'Option3']}/>
      <ExampleUsage />
      <DynamicUsage />
      <AppTheme />
      <FetchUsers />
      {/* <InfiniteScrollPagination />  */}   //uncomment to see result
      <ChatApp />
      <FormValidation />
      <DynamicFormUsage />
      <SearchFilterWithDebounce />
      <TodoAppAddEditDelete />
      <AppFinal />
      <ModalExampleUsage />
      <ChatAppMock />
      <AppCart />
      {/* <InfiniteScrollImage /> */}
      <TableSortPagination />
    </div>
  );
}

export default App;
