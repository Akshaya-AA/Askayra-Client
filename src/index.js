import ReactDOM from 'react-dom/client';
import {HashRouter,Routes,Route} from 'react-router-dom';
import Layout from'./Pages/Layout';
import Home from'./Pages/Home';
import About from'./Pages/About';
import Contact from'./Pages/Contact';
import FAQ from'./Pages/FAQ';
import Gallery from'./Pages/Gallery';
import Services from'./Pages/Services';
import Testimonials from'./Pages/Testimonials';
import Booking from './Pages/Booking';
import "bootstrap/dist/js/bootstrap.bundle.min.js";




export default function App(){
  return(
    <HashRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Gallery" element={<Gallery/>}/>
      <Route path="Services" element={<Services/>}/>
      <Route path="Testimonials" element={<Testimonials/>}/>
      <Route path="Booking" element={<Booking/>}/>
      <Route path="FAQ" element={<FAQ/>}/>
      <Route path="contact" element={<Contact/>}/>      
      </Route>
    </Routes>
    </HashRouter>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)




