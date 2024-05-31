import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Input, Form } from 'reactstrap';
import { add } from './features/Crud/Crudslice';
function Create()
{
  const [id,setId]=useState('');
  const [name,setName]=useState('')
  const [imageUrlInput,setimageUrlInput]=useState('')
  const [des,setDes]=useState('')
  const [price,setPrice]=useState('')
  const dispatch=useDispatch()
  const handelSubmit=(e)=>{
   e.preventDefault();
   if(!id || !name)
    {
      return;
    }
    dispatch(add({id,name,image:imageUrlInput,price,des}));
    setId('');
    setDes('');
    setimageUrlInput('')
    setPrice('')
    setName('')

  }
    return(
        <div>
         <Container>
        <div>
          <Row>
            <Col sm={4}></Col>
            <Col sm={4}>
              <Form onSubmit={handelSubmit} >
                <label>ID:</label>
                <Input type="text"  value={id} onChange={(e)=>setId(e.target.value)}  />
                <br />
                <label>ProductName:</label>
                <Input type="text"  value={name}  onChange={(e)=>setName(e.target.value)} />
                <br />
                <label>IMAGE:</label>
                <Input type="text" value={imageUrlInput}  onChange={(e)=>setimageUrlInput(e.target.value)} />
               {imageUrlInput && <img src={imageUrlInput} alt='product' style={{maxWidth:'100px',maxHeight:'100px'}}/>}
                <br />
                <label>PRICE:</label>
                <Input type="text" value={price}  onChange={(e)=>setPrice(e.target.value)} />
                <br />
                <label>Description:</label>
                <Input type="text" value={des}  onChange={(e)=>setDes(e.target.value)} />
                <br />
                <button className='dasboard-button1' >Add</button>
                <Link to="/crud">Back to Dashboard</Link>
              </Form>
            </Col>
            <Col sm={4}></Col>
          </Row>
        </div>
        <br />
      </Container> 
        </div>
    );
}
export default Create