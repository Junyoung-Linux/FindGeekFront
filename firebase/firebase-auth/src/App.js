// import Auth from "./components/auth";
// import Dashboard from "./components/dashboard";
// import { useUserContext } from "./context/userContext";
import Mainpage from "./MainPage";
import "./App.css";
import {BrowserRouter,Route,Switch} from "react-router-dom"

function App() {
  // const { user, loading, error } = useUserContext();

  return (
    
    <BrowserRouter>
    <>
    <Switch>
      <Route path ="/">
        <Mainpage />
      </Route>
    </Switch>
    
    
    
    </>
    </BrowserRouter>

    
  );
}

export default App;
