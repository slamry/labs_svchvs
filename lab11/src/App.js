import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header'
import Main from './components/main/Main'
import AboutUs from './components/about-us/AboutUs';
import DefaultComponent from './components/def-component/DefaultComponent';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<DefaultComponent />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
