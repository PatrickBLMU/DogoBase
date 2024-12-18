import { login, logout, loggedInUserDisplayName } from "./services/authServices"

export function SignIn() {
  return <button onClick={login}>Sign In</button>
}

export function SignOut() {
  return (
    <div>
      Hello, {loggedInUserDisplayName()}
      <button onClick={logout}>Sign Out</button>
    </div>
  )
}