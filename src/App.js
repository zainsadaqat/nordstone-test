import './App.css';
import NavBar from './components/NavBar';
import AddImages from './pages/AddImages';
import AddText from './pages/AddText';
import Calculator from './pages/Calculator';
import Notification from './pages/Notification';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Route, Routes } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/images" element={<AddImages />} />
          <Route path="/text" element={<AddText />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
