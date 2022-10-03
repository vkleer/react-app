import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="John" age="30" />
      <StatefulGreeting greeting="I'm a stateful class component!" name="John" /> */}
      <StatefulGreetingWithCallback />
    </div>
  );
}

export default App;
