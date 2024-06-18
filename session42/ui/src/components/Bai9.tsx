import React from "react";
import { Button, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export default function Bai9() {
  return (
    <div>
      <Form>
        <div
          style={{
            display: "flex",
            width: "550px",
            justifyContent: "space-between",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </div>

        <div style={{ width: "550px" }}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Họ Và tên</Form.Label>
            <Form.Control type="text" placeholder="Ví dụ : Nguyễn Văn A" />
          </Form.Group>
        </div>
        <div style={{ width: "550px" }}>
          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ví dụ : Thanh Xuân , Hà Nội"
            />
          </Form.Group>
        </div>
        <div
          style={{
            display: "flex",
            width: "550px",
            justifyContent: "space-between",
          }}
        >
          <Form.Group
            as={Col}
            style={{ width: "auto" }}
            md="6"
            controlId="validationCustom03"
          >
            <Form.Label>City</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Hà Nội</option>
              <option value="2">Thanh Hóa</option>
              <option value="3">TPHCM</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Thanh Xuân</option>
              <option value="2">Cầu Giấy</option>
              <option value="3">HÀ Đông</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
