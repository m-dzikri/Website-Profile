import Introduction from './components/introduction';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Main from './components/main';
import './css/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Router>
        <Routes>
          <Route path='/' element={<Introduction />} />
          <Route path='/about' element={<Main />} />
          <Route path='/gallery' element={<Main />} />
          <Route path='/contact' element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;