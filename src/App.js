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
          </ul>
        </nav>
        <Routes>
          <Route path='/lab2' element={<Lab2/>}/>
          <Route path="/lab3" element={<Lab3/>}/>
          <Route path="/lab4" element={<Lab4/>}/>
          <Route path="/lab5" element={<Lab5/>}/>
          <Route path="/">
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
