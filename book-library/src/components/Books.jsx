import { useState, useEffect, useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import {Card, Button} from "react-bootstrap"



export const Books = () => {

    const {token} = useContext(AuthContext)

    const {id} = useParams()

    const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    fetch("http://localhost:8080/books").then((resp) => resp.json()).then((p) => setData(p))
  }, []);

  console.log(token)

  if(token) {
      return <Navigate to={'/login'} />
  }
//   console.log(data)
    return (

        <div>

            {data.map((book) => <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={book.imageLink} />
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <Card.Title>{book.author}</Card.Title>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>)}

            
        </div>
    )
}