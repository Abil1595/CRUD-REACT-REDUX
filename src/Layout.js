import React from 'react'
import { Link } from 'react-router-dom';
import bg1 from './etwlogo.png';
function Layout()
{
    return(
        <div className="layout">
            <img src={bg1} className='etw'/>
          <Link to='/'  className='lay'>Home</Link>
          <Link to='/crud'  className='lay'>Crud</Link>
          <Link to='/create'  className='lay'></Link>
          <Link to='/formvalid' className='lay'>Login</Link>
        </div>
    );
}
export default Layout