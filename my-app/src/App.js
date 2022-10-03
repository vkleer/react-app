import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="John" age="30" />
      <StatefulGreeting greeting="I'm a stateful class component!" name="John" />
    </div>
  );
}

export default App;
