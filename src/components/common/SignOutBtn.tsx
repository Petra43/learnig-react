import { useAuth, useSigninCheck } from "reactfire"

export default function SignOutBtn() {
  const auth = useAuth();
  const {data: signInCheckResult} = useSigninCheck();
  const signOut = async () => auth.signOut();

  let signedIn = signInCheckResult.signedIn === true
  if(signedIn === undefined) {
    signedIn = false
  }


  return (
    <>
      { signedIn && <button onClick={signOut}>logOut</button>}
    </>
  )
} 