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
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FregmentDemo from './FregmentDemo';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <PostForm/>
      {/*
      <PostList />
      <UserProvider value='Python life'>
        <ComponentC/>
      </UserProvider>
      <ClickCounterTwo />
      <HoverCounterTwo />
      <HoverCounter/>
      <ClickCounter/>
      <PortalDemo />
      <FRParentInput />
      <FocusInput />
      <RefsDemo />
      <ParentComp />
      <PureComp />
      <FregmentDemo />
      <LifecycleA />
      <Form/>
      
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      <StyleSheet primary={true} />
      <NameList/>
      <UserGreeting/>
      <Greet name="chandu" city="delhi"/>
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
