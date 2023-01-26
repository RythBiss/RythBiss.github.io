import './App.css';
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      EDCOinc.com pitch demo!
      <Outlet />
    </div>
  );
}

export default App;
