import "./App.css";
//import "./App2.css";
import MainPage from "./components/MainPage";
import StudentPage from "./components/StudentPage";
import AdminPage from "./components/AdminPage";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
