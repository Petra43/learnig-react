import { useAuth} from "reactfire";
import firebase from "firebase";

export default function LogInForm() {
  const auth = useAuth();
  const signIn = async () => {
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };
  
  return (
    <button onClick={signIn}>Sign In</button>
  )
}