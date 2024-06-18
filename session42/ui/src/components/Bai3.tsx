import React from "react";
import { Button, Card } from "react-bootstrap";

export default function Bai3() {
  return (
    <div style={{display:"flex", gap:"50px", alignItems:"center", justifyContent:"center"}}>
      <Card style={{ width: "18rem", textAlign:"center" }}>
        <Card.Img
          variant="top"
          src="https://anhtao.com/wp-content/uploads/2022/05/iphone-11-pro-max-gold-1.jpg"
        />
        <Card.Body>
          <Card.Title>Iphone 11 Pro Max</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", textAlign:"center" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kopbK0JhBYSN0TmlZds_IDdtkzf1Hioul_gAoDAEiw&s"
        />
        <Card.Body>
          <Card.Title>Iphone 12 Pro Max</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
