// import Auth from "./components/auth";
// import Dashboard from "./components/dashboard";
// import { useUserContext } from "./context/userContext";
import Mainpage from "./MainPage";
import Project from "./Project";
import Waiting from "./Waiting";
import "./App.css";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  // const { user, loading, error } = useUserContext();

  

  return (
    <>
    
    {/* <Project /> */}
    <Router>
      <Switch>
      <Route exact path='/' component={Mainpage}/>
      <Route exact path='/waiting' component={Waiting} />
      <Route exact path='/project' component={Project} />

      
    
      </Switch>
      
    </Router>
    </>
    
   
  );
}

export default App;
