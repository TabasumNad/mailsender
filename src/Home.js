import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { Navigate, useNavigate } from 'react-router-dom';

export function Home() {

  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  const [message, setMessage] = useState("");

const navigate= useNavigate();

  const sendEmail = async (e) => {
      e.preventDefault();

      const res = await fetch("http://localhost:4000/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              email,
              sub,
              message,
          })
      });


      const data = await res.json();
      console.log(data);

      if (data.status === 401 || !data) {
          console.log("error")
      } else {
          setShow(true);
          setEmail("")
          console.log("Email sent");
          navigate('/message');

      }
  }

  return (
    <div>
 {
                show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                    Your Email Succesfully Send
                </Alert> : ""
            }
            <div className="container mt-2">
                <div className='d-flex justify-content-center'>
                    <h2>Send Emails in bulks </h2>
                    <img src="https://m.economictimes.com/thumb/msid-63994786,width-1200,height-900,resizemode-4,imgsize-35146/gmail-gets-a-makeover-heres-how-you-can-make-the-most-of-its-features.jpg" 
                    alt="gmail img" className='mx-3 ' style={{ width: "50px" }} />
                </div>
                <div className="d-flex justify-content-center">
                    <Form className='mt-2 col-lg-6'>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label className='lbl'>Enter The Emails Of Recipient</Form.Label>
                            <Form.Control className='colr' type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email:" />
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control className='colr' type="text" name='sub' value={sub} onChange={(e) => setSub(e.target.value)} placeholder="Sub:" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='colr' type="text" name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message:" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={sendEmail}>
                            Send
                        </Button>
                    </Form>
                </div>

            </div>
    </div>
  );
}
