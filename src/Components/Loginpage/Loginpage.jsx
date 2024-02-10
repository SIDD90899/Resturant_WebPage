import './Loginpage.css'
import Form from 'react-bootstrap/Form';

import {useState} from 'react'

const Loginpage = () => {

    const [submit,setSubmit] = useState('Submit')


  return (
    <div>
      <div className="seled">
        <div className='seled-one'>
            <h1 className='newhead'>Reservations</h1>
            <p className='newpara'>Feel free to book your table in the form below</p>
        </div>
        <div className='innputt'>
            <Form value={submit}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Your name" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
                <button onClick={()=>{setSubmit(alert('Booked SuccessFully'))}} className="btn btn-success" id='clickbtn'>{submit}</button><br/>
    </Form>
        </div>
      </div>
    </div>


   
  
  )
}

export default Loginpage
