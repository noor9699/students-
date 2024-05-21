import './App.css';
import Navbar from '../src/component/common/navbar';
import Home from './component/pages/home';
import About from './component/pages/about';
import Service from './component/pages/service';
import Contact from './component/pages/contact';
import News from './component/pages/news';
import Footer from './component/pages/footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Service/>
    <Contact/>
    <News/>
    <Footer/>

    </>
  );
}

export default App;
