import Auth from "../../backend/server/routes/auth";
import DashBoard from "./routes/dashboard";
import { useUserContext } from "./context/userContext";

function App() {
    const { user, loading, error } = useUserContext();
  
    return (
      <div className="App">
        {error && <p className="error">{error}</p>}
        {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
      </div>
    );
  }
  
  export default App;
  