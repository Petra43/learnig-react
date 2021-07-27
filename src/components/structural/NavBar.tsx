import { useSigninCheck } from "reactfire"
import SignOutBtn from "../common/SignOutBtn"

export default function NavBar() {
  const {status, data: signInCheckResult} = useSigninCheck()
  
  return (
    <nav className="top-nav">
      <h1>React Test App</h1>
      <SignOutBtn />
    </nav>
  )
}