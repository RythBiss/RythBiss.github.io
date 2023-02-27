import './Styles/output.css';
import React, { useState, useEffect }from 'react'
import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider, useLocation, useNavigate } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import ApplicationSearch from './Components/ApplicationSearch';
import CustomerSupport from './Components/CustomerSupport';
import BuyEDCO from './Components/BuyEDCO';
import Training from './Components/Training';
import Login from './Components/Login';
import Register from './Components/Register';
import Logo from './images/site-logo.svg'
import SeachIcon from './images/spy-glass.svg'
import MenuIcon from './images/menu.svg'
import Close from './images/close.svg'
import Facebook from './images/facebook.svg'
import Twitter from './images/twitter.svg'
import Youtube from './images/youtube.svg'
import Instagram from './images/instagram.svg'
import Linkedin from './images/linkedin.svg'
import ProductPage from './Components/ProductPage';
import { AnimatePresence, motion } from 'framer-motion';


function App() { 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route className='Route' path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='products' element={<Products />} />
      <Route path='customersupport' element={<CustomerSupport />} />
      <Route path='buyedco' element={<BuyEDCO />} />
      <Route path='training' element={<Training />} />
      <Route path='applicationfinder' element={<ApplicationSearch />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='product' element={<ProductPage />} />
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

  const [menuOpen, setMenuOpen] = useState(false);

  let location = useLocation();
  const nav = useNavigate();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location])

  const varients = {
    open: {
      x: '0%'
    },
    closed: {
      x: '100%'
    },
    down: {
      y: '0%'
    },
    up: {
      y: '-100%'
    }
  }

  return <>
    <header>
      <button id='logo' onClick={() => nav('/')}>
        <img src={Logo} alt='logo'></img>
      </button>
      {/* <button onClick={ () => {console.log('search')} }>
        <img src={SeachIcon} alt='search' />
      </button> */}
      <button onClick={ () => {setMenuOpen(prev => !prev)} }>{
      menuOpen ?
        <img src={Close} alt='Close Menu' />
        :
        <img src={MenuIcon} alt='Menu' />
        }
      </button>
    </header>
    <AnimatePresence>
    {scrollPosition > 100 &&
      <motion.header className='fixed-header'
        variants={varients}
        initial='up'
        animate='down'
        exit='up'
        transition={{ease: 'linear', duration: '0.2'}}
      >
        <button id='logo' onClick={() => nav('/')}>
          <img src={Logo} alt='logo'></img>
        </button>
        {/* <button onClick={ () => {console.log('search')} }>
          <img src={SeachIcon} alt='search' />
        </button> */}
        <button onClick={ () => {setMenuOpen(prev => !prev)} }>{
        menuOpen ?
          <img src={Close} alt='Close Menu' />
          :
          <img src={MenuIcon} alt='Menu' />
          }
        </button>
      </motion.header>
    }
    </AnimatePresence>
    <main>
      <AnimatePresence>
        {menuOpen && 
            <motion.nav className='mobile-nav'
              variants={varients}
              initial='closed'
              animate='open'
              exit='closed'
              transition={{ease: 'linear', duration: '0.15'}}
            >
              <motion.div
                initial='#F5F5F5'
                whileHover={{backgroundColor: '#dfdfdf'}}
                whileTap={{backgroundColor: '#bbbbbb'}}
                transition={{ease: 'linear', duration: '0.1'}}
              ><Link to='/'>Home</Link></motion.div>
              <motion.div
                initial='#F5F5F5'
                whileHover={{backgroundColor: '#dfdfdf'}}
                whileTap={{backgroundColor: '#bbbbbb'}}
                transition={{ease: 'linear', duration: '0.1'}}
              ><Link to='/about'>About</Link></motion.div>
              <motion.div
                              initial='#F5F5F5'
                whileHover={{backgroundColor: '#dfdfdf'}}
                whileTap={{backgroundColor: '#bbbbbb'}}
                transition={{ease: 'linear', duration: '0.1'}}
              ><Link to='/products'>Products</Link></motion.div>
              {/* <Link to='/customersupport'>Cutomer Support</Link> */}
              {/* <Link to='/buyedco'>Buy EDCO</Link> */}
              {/* <Link to='/training'>Training</Link> */}
              <motion.div
                              initial='#F5F5F5'
                whileHover={{backgroundColor: '#dfdfdf'}}
                whileTap={{backgroundColor: '#bbbbbb'}}
                transition={{ease: 'linear', duration: '0.1'}}
              ><Link to='/applicationfinder'>Search by Application</Link></motion.div>
              {/* <Link to='/login'>Login</Link> */}
              {/* <Link to='/register'>Register</Link> */}
            </motion.nav>
            }
          </AnimatePresence>
          <Outlet />
    </main>
    <footer>
      <div className='footer-text'>
          <h3> © 2023 by EDCO | Privacy Policy | David S., Demo</h3>
      </div>
      <div className='socials'>
          <button>
            <img src={Facebook} alt='social-link' />
          </button>
          <button>
            <img src={Twitter} alt='social-link' />
          </button>
          <button>
            <img src={Youtube} alt='social-link' />
          </button>
          <button>
            <img src={Instagram} alt='social-link' />
          </button>
          <button>
            <img src={Linkedin} alt='social-link' />
          </button>
      </div>
    </footer>
  </>
}

export default App;
