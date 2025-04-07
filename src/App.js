import './index.css';
import './w3.css';
import './rubik.css';
import './w3-theme-black.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from'./home.js'
import GenGym from './GenGym.jsx';
import Workouts from './Workouts.js'
import Nutrition from './Nutrition.js'
import Form from './Form.js'
import LongTerm from './LongTerm.js';
import Tips from './Tips.js';

function Navbar1() {
  return (
    <body>
      <div class = "w3-top">
      <div class="w3-theme w3-top w3-left-align w3-large">
      <ul>
        <li>
          <a><Link to="/">Home</Link>
          </a></li>
        <li><a>
          <Link to="/GenGym">General</Link>
          </a></li>
        <li><a>
          <Link to="/Workouts">Example Workouts</Link>
          </a></li>
        <li><a>
          <Link to="/Nutrition">Nutrition & Recovery</Link>
          </a></li>
        <li><a>
          <Link to="/Form">Proper Form</Link>
          </a></li>
        <li><a>
          <Link to="/LongTerm">Long-Term Planning</Link>
          </a></li>
        <li><a>
          <Link to="/Tips">Tips</Link>
          </a></li>
      </ul>
      </div>
      </div>
    </body>
  );
}

function App() {

  return (
    <>
    <Router>
          <Navbar1 />
          <myFunction/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/GenGym" element={<GenGym />} />
            <Route path="/Workouts" element={<Workouts />} />
            <Route path="/Nutrition" element={<Nutrition />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/LongTerm" element={<LongTerm />} />
            <Route path="/Tips" element={<Tips />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
