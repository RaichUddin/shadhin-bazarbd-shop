
// import './App.css';
import Header from './Pages/Header/Header/Header';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import CreateSign from './Pages/CreateSign/CreateSign/CreateSign';
import Register from './Pages/CreateSign/Register/Register';
import AuthProvider from './context/Authprovidor/AuthProvider';
import PrivateRoute from './Pages/CreateSign/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Header></Header>

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/checkout" element={<PrivateRoute><CheckOut /></PrivateRoute>} />

            <Route path="/createsign" element={<CreateSign />} />
            <Route path="/register" element={<Register />} />

          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
