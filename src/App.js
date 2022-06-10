import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Homepage/Home';
import Banner from './Homepage/Banner';
import Navbar from './Sharedpages/Navbar';
import Info from './Homepage/Info';
import Resume from './Homepage/Resume';
import Contact from './Homepage/Contact';
import About from './Homepage/About';
import Blogs from './Homepage/Blogs';


function App() {
  return (
    <div className="App">



  <Navbar></Navbar>

     <Routes>
     <Route path='/' element={<Home></Home>}  ></Route>
     <Route path='home' element={<Home></Home>}  ></Route>
       <Route path='banner' element={<Banner></Banner>}  ></Route>
       <Route path='info' element={<Info></Info>} ></Route>
       <Route path='projects' element={<Resume></Resume>}  ></Route>
       <Route path='about' element={<About></About>}  ></Route>
       <Route path='contact' element={<Contact></Contact>}  ></Route>
       <Route path='blogs' element={<Blogs></Blogs>}  ></Route>
      
     </Routes>
    </div>
  );
}

export default App;
