import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
//import Mycomponent from './components/Greet'; //another way to ues 
import Greet1 from './components/Greet1';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      <UserGreeting/>
      {/*<Greet name="chandu" city="delhi"/>
      <Greet1 name="sai" city="hyderabad"/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>

      <Counter/>
      <Message />
       <Greet name="ramu" city="bangaluru">
        <p>this is children props</p>
      </Greet>
      <Greet name="saikiran" city="hyderabad">
        <button>submit</button>
      </Greet>
      <Greet name="narendra" city="delhi">
        <p>my name is saikiran</p>
      </Greet>
      <Greet1 name="ramu" city="bangaluru"/>
      <Greet1 name="sai" city="hyderabad"/>
      <Greet1 name="chandu" city="delhi"/>

      <Greet/>
      <Greet1/>  
      <Hello/> */} 
    </div>
  );
}

export default App;
