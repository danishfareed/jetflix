import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
import SingleMovie from "./components/SingleMovie";
import SingleShow from "./components/SingleShow";

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}/>

        <Route path="/movie/:slug/:movie_id" element={<SingleMovie />} />
        <Route path="/tv/:slug/:tv_id" element={<SingleShow />} />
      </Routes>
    </AuthContextProvider>
    
    </>
  );
}

export default App;
