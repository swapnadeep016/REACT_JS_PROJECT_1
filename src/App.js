import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

function App() {
  const [state, setstate] = useState(0)
  let increment_me = ()=>setstate(state+1);

  return (
    <div className="App">
      <Button increment={increment_me}/>
      <Display message = {state}/>
    </div>
  );
}

export default App;
