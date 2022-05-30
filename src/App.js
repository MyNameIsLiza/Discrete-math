import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Lab2 from "./components/Lab2";
import Lab3 from "./components/Lab3";
import Lab4 from "./components/Lab4";
import Lab5 from "./components/Lab5";
import Lab6 from "./components/Lab6";
import Lab7 from "./components/Lab7_Ania";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/lab2">Lab2</Link>
            </li>
            <li>
              <Link to="/lab3">Lab3</Link>
            </li>
            <li>
              <Link to="/lab4">Lab4</Link>
            </li>
            <li>
              <Link to="/lab5">Lab5</Link>
            </li>
            <li>
              <Link to="/lab6">Lab6</Link>
            </li>
            <li>
              <Link to="/lab7">Lab7</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/lab2' element={<Lab2/>}/>
          <Route path="/lab3" element={<Lab3/>}/>
          <Route path="/lab4" element={<Lab4/>}/>
          <Route path="/lab5" element={<Lab5/>}/>
          <Route path="/lab6" element={<Lab6/>}/>
          <Route path="/lab7" element={<Lab7/>}/>
          <Route path="/">
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
