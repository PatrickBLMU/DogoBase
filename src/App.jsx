import RandomDog from "./Data";
import { SignIn, SignOut } from "./Auth";

import { useAuthentication } from "./services/authServices";
import "./App.css";

const App = () => {


  function startOver() {
    window.location.reload();
  }

  const user = useAuthentication();

  return (
    <div className="App">
      <header>
        <h1 onClick = {startOver}>Random Dog Info</h1>
        <h1>{user ? <SignOut /> : <SignIn />}</h1>
      </header>
      <RandomDog/>       
    </div>
  );
};

export default App;