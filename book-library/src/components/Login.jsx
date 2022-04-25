import { useNavigate } from "react-router-dom"
import {Form, Col, Row, Button} from 'react-bootstrap'
import {useContext, useState} from "react"
import {AuthContext} from '../contexts/AuthContext'

export const Login = () => {
    
    const [form, setForm] = useState({})

    const navigate = useNavigate()

    const {handleToken} = useContext(AuthContext)

    const handleChange = ({target: {name, value}}) => {
        setForm({
            ...form,
            [name]: value
        })
    }
    
    return (
        <div>
            <Form style={{padding: "10px"}}>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control onChange={handleChange} name='email' plaintext placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control onChange= {handleChange} name='password'  type="password" placeholder="Password" />
    </Col>
  </Form.Group>
</Form>
<Button variant= 'primary' onClick={() => {
    handleToken('QpwL5tke4Pnpja7X4')
    navigate('/books')
}} >Log In</Button>
        </div>
    )
}