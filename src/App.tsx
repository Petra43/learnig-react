import { useSigninCheck } from 'reactfire';


import './App.css';
import OdrerOfBattle from './components/crusade/OrderOfBattle';
import Dashboard from './components/Dashboard';
import LogInForm from './components/LoginForm';
import NavBar from './components/structural/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar />
      <SignIn />
    </div>
  );
}

export default App;

function SignIn() {
  const { data: signInCheckResult } = useSigninCheck()

  //if (status === 'loading') {
  //  return <h1>add loading spinner</h1>
  //}
  
  if(signInCheckResult && signInCheckResult.signedIn === true) {
    return <Dashboard />
  } else {
    return <LogInForm />
  }
}
