import React from "react";
import { Form } from "react-bootstrap";
export default ({ label, ...props }) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <Form.Control {...props} />
  </Form.Group>
);
