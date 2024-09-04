import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './Components/CourseDetails/CourseDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/courses" element={<Menu />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
