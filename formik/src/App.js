import './App.css';

import {Form, Field, ErrorMessage, Formik} from 'formik';
import * as yup from 'yup';

function App() {

  const validationSchema = yup.object().shape({
    name: yup.string().min(3).max(10),
    email: yup.string().email('Invalid email'),
    message: yup.string().min(10).max(250)
  })

  return (
    <div className="App">
      <h1>Contact Us</h1>
      <Formik initialValues={{name: '', email: '', message: ''}} validationSchema={validationSchema} onSubmit={values => alert(JSON.stringify(values))}>
        {
          <Form>
            <div>
              <Field name="name" type="text" placeholder="Enter your name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field name="email" type="text" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field name="message" type="message" placeholder="Type your message here" />
              <ErrorMessage name="message" component="div" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        }
      </Formik>
    </div>
  );
}

export default App;
