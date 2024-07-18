import './App.css';
import Header from './components/Header/Header';
import Quotes from './components/Quotes/Quotes';
import GenerateButton from './components/GenerateButton/Button'

function App() {
  return (
    <div className="app">
      <Header/>
      <GenerateButton/>
      <Quotes/>
    </div>
  );
}

export default App;
