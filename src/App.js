import './App.css';
import Input from './components/Input';
import Home from './components/Home';

import {
  BrowserRouter as Router, // Use BrowserRouter instead of Router
  Route,
  Routes,  // Use Routes to wrap your Route elements
} from "react-router-dom";
// import Scrapping from './components/Scrapper';
import Scrapper1 from './components/Scrapper1';

function App() {
  return (
    <div className="App">
      
      <Router>
        {/* Define routes inside Routes */}
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/input' element={<Input />} />
        <Route path='/scrapper' element={<Scrapper1 />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
