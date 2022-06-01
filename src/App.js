import  { useState } from 'react';
import Calculator from './pages/Calculator';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Author from './pages/Author';
import ErrorPage from './pages/ErrorPage';


function App() {
  const [isOpen,setisOpen] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/calculator' element={<Calculator isOpen={isOpen} setisOpen={setisOpen}></Calculator>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/author' element={<Author isOpen={isOpen} setisOpen={setisOpen}></Author>}></Route>
          <Route path='*' element={<ErrorPage />}></Route>    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
