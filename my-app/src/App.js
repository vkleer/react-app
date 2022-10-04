import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="John" age="30" />
      <StatefulGreeting greeting="I'm a stateful class component!" name="John" /> */}
      {/* <StatefulGreetingWithCallback /> */}
      <EventsClass />
      <EventsFunctional />
    </div>
  );
}

export default App;
