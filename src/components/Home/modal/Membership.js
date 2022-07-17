import React, { useEffect, useState } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import { addMember } from "../../../utils/utils";
import Swal from "sweetalert2";
import axios from "axios";
import { BASE_URL } from "../../../utils/env";

import "./Membership.css";

const Membership = ({ show, handleClose, login, emailData }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [formData, setFormData] = useState({ country: "Delhi/NCR" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dataArr = Object.values(formData);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);

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
      .post(`${BASE_URL}/users/register`, formData)
      .then((res) => {
        setError("");
        setShowOtpModal(true);
      })
      .catch((err) => {
        if (err?.response?.data?.errMsg === "Internal Server errror") {
          setError("Server Error");
        } else {
          setError(err?.response?.data?.errMsg);
        }
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/users/login`, formData)
      .then((res) => {
        setError("");

        localStorage.setItem("token-liz", res.data.accessToken);
        localStorage.setItem("user-liz", JSON.stringify(res.data.user));
        Swal.fire({
          icon: "success",
          title: "Logged in successful",
          showCloseButton: true,
        });
        window.location.reload();
      })
      .catch((err) => {
        setError(err?.response?.data?.errMsg);
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
        setError("");
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

        setError(err?.response?.data?.errMsg);
      });
  };

  useEffect(() => {
    if (login) {
      setShowLogin(true);
      setShowRegister(false);
    } else {
      setShowRegister(true);
      setShowLogin(false);
      if (emailData) {
        setFormData({ ...formData, email: emailData });
      }
    }
  }, [login]);

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
      {showLogin && (
        <Form onSubmit={handleLogin}>
          <Modal.Body className="text-center">
            <h2 id="subscribeNewsletter" className="mb-5">
              Login
            </h2>
            {/* <p className="mb-7 mb-lg-10">Signup for our weekly newsletter to get the latest news, updates and
                            amazing offers delivered directly in your inbox.</p> */}

            <FloatingLabel
              controlId="floatingInput"
              label="Email"
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

            <p>
              Don't have an account?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => {
                  setShowRegister(true);
                  setShowLogin(false);
                  setError("");
                }}
              >
                Register
              </span>
            </p>
            {error && <div className="text-danger mb-3">{error}</div>}
            <Button
              className="btn-color"
              variant="primary"
              size="lg"
              type="submit"
            >
              Submit
            </Button>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" size="lg" onClick={handleClose}>
              Close
            </Button> 
          </Modal.Footer> */}
        </Form>
      )}
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

            {error && <div className="text-danger mb-3">{error}</div>}
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn-color"
              variant="secondary"
              size="lg"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              className="btn-color"
              variant="primary"
              size="lg"
              type="submit"
            >
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      )}
      {!showOtpModal && showRegister && (
        <Form onSubmit={handleFormSubmit}>
          <Modal.Body className="text-center">
            <h2 id="subscribeNewsletter" className="mb-5">
              Subscribe
            </h2>
            {/* <p className="mb-7 mb-lg-10">Signup for our weekly newsletter to get the latest news, updates and
                            amazing offers delivered directly in your inbox.</p> */}

            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mt-0 mb-4"
            >
              <Form.Control
                onChange={handleChange}
                name="firstName"
                type="text"
                placeholder="first name"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="mt-0 mb-4"
            >
              <Form.Control
                onChange={handleChange}
                name="lastName"
                type="text"
                placeholder="last name"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email Address"
              className="mt-0 mb-4"
            >
              <Form.Control
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formData?.email}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Phone Number"
              className="mb-4"
            >
              <Form.Control
                onChange={handleChange}
                name="phone"
                placeholder="111-111-1111"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Location"
              className="mb-4"
            >
              <Form.Select
                id="disabledSelect"
                onChange={handleChange}
                name="country"
              >
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Delhi/NCR">Delhi/NCR</option>
                <option value="Delhi/NCR">Delhi/NCR</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Chennai">Chennai</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Others">Others</option>
              </Form.Select>
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
            <FloatingLabel
              controlId="floatingInput"
              label="Invite Code"
              className="mb-4"
            >
              <Form.Control
                onChange={handleChange}
                name="referralCode"
                placeholder="Referrel Code"
              />
            </FloatingLabel>

            <p>
              Already have an account?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => {
                  setShowRegister(false);
                  setShowLogin(true);
                  setError("");
                }}
              >
                Login
              </span>
            </p>
            {error && <div className="text-danger mb-3">{error}</div>}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              size="lg"
              type="submit"
              className="btn-color"
            >
              Submit
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
            <Button
              variant="primary"
              centered
              size="lg"
              onClick={handleClose}
              className="btn-color"
            >
              Close
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default Membership;
