import { useSigninCheck } from 'reactfire';


import './App.css';
import ErrorBoundary from './components/common/ErrorBoundry';
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
  const { status, data: signInCheckResult } = useSigninCheck()

  if (status === 'loading') {
    return <h1>add loading spinner</h1>
  }
  
  if(status === "success" && signInCheckResult  && signInCheckResult.signedIn === true) {
    return (
      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>
        
     
    )
  } else {
    return <LogInForm />
  }
}
