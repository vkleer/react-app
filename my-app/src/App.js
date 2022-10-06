import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCycleCWU';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import HooksCounter from './components/HooksCounter';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="John" age="30" />
      <StatefulGreeting greeting="I'm a stateful class component!" name="John" /> */}
      {/* <StatefulGreetingWithCallback /> */}
      {/* <EventsClass />
      <EventsFunctional /> */}
      {/* <EventBinding /> */}
      {/* <ConditionalRenderingClass/>
      <ConditionalRenderingFunctional connected={true}/> */}
      {/* <NestingComponents /> */}
      {/* <MethodsAsPropsParent/ > */}
      {/* <RenderingLists /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCWU /> */}
      {/* <ControlledForm /> */}
      {/* <UncontrolledForm /> */}
      {/* <SearchBar /> */}
      {/* <HooksCounter /> */}
      {/* <ControlledFormHooks /> */}
      {/* <UseStateWithArrays /> */}
      {/* <UseStateWithObjects /> */}
      {/* <UseEffectCounter /> */}
      <UseEffectCounterContainer />
    </div>
  );
}

export default App;
