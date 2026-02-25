import { Modal, Button, Form } from "react-bootstrap";
import './ModalMessage.scss';

import { useState } from "react";

const ModalMessage = ({ show, onClose, message, onSubmitUserInfo, bookedMsg }) => {


  const isBookedMsg = bookedMsg

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    onSubmitUserInfo({ name, email, phone });
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered className="ModalMassage">
      <Modal.Header closeButton={!isBookedMsg}>
        <Modal.Title>{isBookedMsg ? "Enter Your Details" : "Message"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {isBookedMsg ? (
          <>
            <p>Please enter your name, phone number, and email. Your email will be used to send your invoice.</p>
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </Form.Group>
            </Form>
          </>
        ) : (
          <p>{message}</p>
        )}
      </Modal.Body>

      <Modal.Footer className={isBookedMsg}>
        {isBookedMsg &&
          <Button variant="primary" onClick={handleSubmit} className="footerBtn">
            Submit
          </Button>
        }

        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>

      </Modal.Footer>
    </Modal>
  );
};

export default ModalMessage;