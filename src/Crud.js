import React from 'react'
import { Row, Col, Container,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from './features/Crud/Crudslice';
function Crud()
{
  const {data} =useSelector(state=>state.crud)
  const dispatch=useDispatch()
    return(
        <div>
          <Container>
        <h1>ADMIN PANEL</h1>
        <Row>
          <Col sm={3}>
            <i className="ri-id-card-line"></i>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}></Col>
        </Row><br /><br /><br />
        <div>
          <Link className='lay' to="/create">Create</Link>
        </div>
        <Table striped bordered hover>   
          <thead>
            <tr>
              <th>id</th>
              <th>ProductName</th>
              <th>image</th>
              <th>price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,index)=>(
                <tr key={item.id}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td><img src={item.image} alt='{item.name}' style={{maxWidth:'100px',maxHeight:'100px'}}/></td>
                  <td>{item.price}</td>
                  <td>{item.des}</td>
                  <td><Link to={`/edit/${item.id}`}><Button color='success'>Update</Button></Link>
                  <Button color='danger' onClick={()=>dispatch(remove(item.id))}>Delete</Button></td>
                </tr>
              ))

            }
          </tbody>
        </Table><br /><br /><br />
      </Container>  
        </div>
    );
}
export default Crud