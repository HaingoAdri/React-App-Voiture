import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Login from './Component/Login/Login';
import Inscription from './Component/Login/Inscription';
import Acceuil from './Component/pages_mobile/Acceuil';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
