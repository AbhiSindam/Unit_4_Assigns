import {Card, Button} from "react-bootstrap"
import '../App.css'



export const PaymentCard = () => {
    return (
        <div className="center">
            <Card style={{ width: 'auto' }}>
  <Card.Body>
      <div className="title">

    <Card.Title>28/10/2020</Card.Title>
    <img src="https://img.icons8.com/color/344/amazon-web-services.png" alt="" style={{width: "50px"}}/>
      </div>
      <Button className="btn">Case Study</Button>
    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
    <h1>Amazon Gift</h1>
    <h1>Pay</h1>
    <div className="lastLine">

    <span>Mobile-Desktop</span>
    <Button variant="dark" style={{background: "none", border: "none"}}><img src='https://img.icons8.com/material-rounded/344/arrow.png' alt='img' style={{width: "40px"}}/></Button>

    
    </div>
  </Card.Body>
  
</Card>
        </div>
    )
}