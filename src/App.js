import './App.css';
import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import ApplicationSearch from './Components/ApplicationSearch';
import CustomerSupport from './Components/CustomerSupport';
import BuyEDCO from './Components/BuyEDCO';
import Training from './Components/Training';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='products' element={<Products />} />
      <Route path='customersupport' element={<CustomerSupport />} />
      <Route path='buyedco' element={<BuyEDCO />} />
      <Route path='training' element={<Training />} />
      <Route path='applicationfinder' element={<ApplicationSearch />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Route>
  )
)

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

const Root =() => {
  return <>
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
        <Link to='/customersupport'>Cutomer Support</Link>
        <Link to='/buyedco'>Buy EDCO</Link>
        <Link to='/training'>Training</Link>
        <Link to='/applicationfinder'>Search by Application</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>footer</footer>
  </>
}

export default App;
