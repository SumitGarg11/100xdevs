import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";
function App() {
  return (
    <div>
      <div>
        {/* hard reloading  */}

        {/* send the req on server , from the server take the new html and render  */}

        {/* <button onClick={() => {window.location.href = "/"}}>Landing Page</button>
        <button onClick={() => { window.location.href = "/dashboard"}}>DashBoard</button> */}

        {/* useNavigation  */}

        {/* Not using the useNavigation outside the BrowserRouter   */}
      </div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function AppBar() {
  const navigate = useNavigate();
  function handleClickDash() {
    navigate("/dashboard");
  }
  function handleClickLand() {
    navigate("/");
  }
  return (
    <div>
      <button onClick={handleClickDash}>DashBoard</button>
      <button onClick={handleClickLand}>Landing Page</button>
    </div>
  );
}

export default App;
