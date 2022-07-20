import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import { useState } from 'react';

function App() {
const [otp ,setOtp] =useState(' ')

  return (
    <div className="App">
     
<Card length={4}  setOtp = {setOtp}/>
     
        </div>
  );
}

export default App;
