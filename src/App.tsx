import React from 'react';
import { useSigninCheck } from 'reactfire';


import './App.css';
import OdrerOfBattle from './components/crusade/OrderOfBattle';
import Dashboard from './components/Dashboard';
import LogInForm from './components/LoginForm';
import NavBar from './components/structural/NavBar';



function App() {
  const { status, data: signInCheckResult } = useSigninCheck()


  return (
    <div className="App">
      <NavBar />
      <SignIn />
      <OdrerOfBattle />
    </div>
  );
}

export default App;

function SignIn() {
  const { status, data: signInCheckResult } = useSigninCheck()

  //if (status === 'loading') {
  //  return <h1>add loading spinner</h1>
  //}
  
  if(signInCheckResult.signedIn === true) {
    return <Dashboard />
  } else {
    return <LogInForm />
  }
}
