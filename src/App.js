import './App.css';
import Header from './pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Orders from './pages/Orders/Orders'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Checkout from './pages/Checkout/Checkout/Checkout';
import RequireAuth from './pages/Shared/RequireAuth/RequireAuth';
import Notfound from './pages/Notfound/Notfound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/about' element={<About></About>}>About</Route>
        <Route path='/contact' element={<Contact></Contact>}>Contact</Route>
        <Route path='/orders' element={<Orders></Orders>}>Orders</Route>
        <Route path='/login' element={<Login></Login>}>Log in</Route>
        <Route path='/register' element={<Register></Register>}>Register</Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<Notfound></Notfound>}>Notfound</Route>
      </Routes>
    </div>
  );
}

export default App;
