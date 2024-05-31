import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Create from './Create';
import Update from './Update';
import Home from './Home';
import Crud from './Crud';
import Layout from './Layout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout/>  
      <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path="/crud" element={<Crud />}/>
      <Route path='/create' element={<Create/>}/>
    <Route path='/edit/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
