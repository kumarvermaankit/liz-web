import React, { useState } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import { addMember } from "../../../utils/utils";
import Swal from "sweetalert2";
import axios from "axios";
import { BASE_URL } from "../../../utils/env";

import "./Membership.css";

const Membership = ({ show, handleClose }) => {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dataArr = Object.values(formData);
  const [otp, setOtp] = useState("");
  const isFormValid =
    dataArr.length === 3 && !dataArr.filter((field) => !field).length;
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/users/login`, formData)
      .then((res) => {
        //localStorage.setItem("token",res)
        Swal.fire({
          icon: "success",
          title: "Your data saved successfully",
          text: "You will get notified when app gets live",
          showCloseButton: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    const formatData = {
      email: formData.email,
      otp: otp,
    };

    axios
      .post(`${BASE_URL}/users/otp/verify`, formatData)
      .then((res) => {
        setShowOtpModal(false);
        handleClose();
        Swal.fire({
          icon: "success",
          title: "Your data saved successfully",
          text: "You will get notified when app gets live",
          showCloseButton: true,
        });
      })
      .catch((err) => {
        setShowOtpModal(false);
        handleClose();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          showCloseButton: true,
        });
      });
  };

  return (
    <Modal
      className=""
      show={show}
      onHide={handleClose}
      size="mb"
      bsPrefix="modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      {showOtpModal && (
        <Form onSubmit={verifyOtp}>
          <Modal.Body className="text-center">
            <h2 id="subscribeNewsletter" className="mb-5">
              <span>Enter OTP send to your Email</span>
            </h2>
            {/* <p className="mb-7 mb-lg-10">Signup for our weekly newsletter to get the latest news, updates and
                        amazing offers delivered directly in your inbox.</p> */}

            <FloatingLabel
              controlId="floatingInput"
              label="Enter OTP"
              className="mt-0 mb-4"
            >
              <Form.Control
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                name="otp"
                type="text"
                placeholder="Enter OTP"
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="lg" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" size="lg" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      )}
      {!showOtpModal && (
        <Form onSubmit={handleFormSubmit}>
          <Modal.Body className="text-center">
            <h2 id="subscribeNewsletter" className="mb-5">
              Subscribe to our product
            </h2>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mt-0 mb-4"
            >
              <Form.Control
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-4"
            >
              <Form.Control
                onChange={handleChange}
                name="password"
                placeholder="password"
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="lg" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" size="lg" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      )}
      {formSubmitted && (
        <>
          <Modal.Body className="text-center">
            <h2 id="subscribeNewsletter" className="mb-4">
              Yipee..!! Subscribed
            </h2>
            <p className="mb-7 mb-lg-10">Thanks for Signing up.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" centered size="lg" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default Membership;
