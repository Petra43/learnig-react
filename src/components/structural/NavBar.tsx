import { useAuth, useSigninCheck, useUser } from "reactfire";

export default function NavBar() {
  const auth = useAuth()
  const { status, data:signInCheckReult } = useSigninCheck();
  return (
    <nav className="top-nav">
      <h1>React Test App</h1>
      { (status === "success" && signInCheckReult.signedIn)  && <button onClick={() => auth.signOut()}>log out</button> }
    </nav>
  )
}