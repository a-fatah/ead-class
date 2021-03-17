import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import InputControl from "./InputControl";
import { Button } from "react-bootstrap";

export default () => {
  return (
    <div className="w-25">
      <h3 className="display-5 text-center">Sign Up</h3>
      <Formik
        initialValues={{
          firstName: "test",
        }}
      >
        {(formik) => {
          debugger;

          return (
            <Form>
              <Row>
                <Col>
                  <Field
                    name="firstName"
                    label="First Name"
                    placeholder="First Name"
                    component={InputControl}
                  />
                </Col>
                <Col>
                  <Field
                    name="lastName"
                    label="Last Name"
                    placeholder="Last Name"
                    component={InputControl}
                  />
                </Col>
              </Row>
              <Field
                name="username"
                type="text"
                label="Username"
                placeholder="Username"
                component={InputControl}
              />
              <Field
                name="email"
                type="email"
                label="Email"
                placeholder="Your email"
                component={InputControl}
              />
              <Field
                name="phone"
                label="Phone"
                placeholder="Phone"
                component={InputControl}
              ></Field>
              <Row>
                <Col>
                  <Field
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    component={InputControl}
                  />
                </Col>
                <Col>
                  <Field
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    component={InputControl}
                  />
                </Col>
              </Row>
              <Field
                name="street"
                label="Street"
                placeholder="Street"
                component={InputControl}
              />
              <Row>
                <Col>
                  <Field
                    name="city"
                    label="City"
                    placeholder="City"
                    component={InputControl}
                  />
                </Col>
                <Col>
                  <Field
                    name="country"
                    label="Country"
                    placeholder="Country"
                    component={InputControl}
                  />
                </Col>
              </Row>
              <div className="d-flex flex-column">
                <Button>Sign Up</Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
