import { useAuth, useSigninCheck } from "reactfire"

export default function SignOutBtn() {
  const auth = useAuth();
  const {data: signInCheckResult} = useSigninCheck();
  const signOut = async () => auth.signOut();
  
  return (
    <>
      { signInCheckResult.signedIn === true && <button onClick={signOut}>logOut</button>}
    </>
  )
}