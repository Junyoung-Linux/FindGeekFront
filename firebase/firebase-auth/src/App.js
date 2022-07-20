// import Auth from "./components/auth";
// import Dashboard from "./components/dashboard";
// import { useUserContext } from "./context/userContext";
import Mainpage from "./MainPage";
import Project from "./Project";
import "./App.css";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  // const { user, loading, error } = useUserContext();

  return (
    <>
    {/* <Project /> */}
    <Router>
      <Switch>
      <Route path='/' component={Mainpage}/>
      <Route path='/project' component={Project} />
    
      </Switch>
      
    </Router>
    </>
    
   
  );
}

export default App;
