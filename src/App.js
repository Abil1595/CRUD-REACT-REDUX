import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes ,Navigate} from 'react-router-dom'
import Create from './Create';
import Update from './Update';
import Home from './Home';  
import Crud from './Crud';
import Layout from './Layout';
import FormValid from './FormValid';  
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
    <Route path="/welcome" element={<Navigate to="/" />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
        <Route path='/formvalid' element={<FormValid/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
