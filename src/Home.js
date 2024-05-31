import React from 'react'
import { useSelector } from 'react-redux';
import {Col,Container,Row} from 'reactstrap'
function Home()
{
  const {data}=useSelector(state=>state.crud)
    return(
        <div>
          <Container>
         <Row>
    
         {
          data.map((item,index)=>  
          {
            return(
              
                <Col sm="3" key={index.id} >
                <div className='shirt'>
         
          <img src={item.image} alt={item.name} style={{ maxWidth: '100%', maxHeight: '600px' }} /><br/>
          {index+1}<br/>
          
          {item.name}<br/>
        {item.price}<br/>
         {item.des}
         </div>
        </Col>
             
            )
          })
        }
         </Row> 
         </Container>
        </div>
    );
}
export default Home