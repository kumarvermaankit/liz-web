import React, { useEffect, useState } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import { addMember } from "../../../utils/utils";
import Swal from "sweetalert2";
import axios from "axios";
import { BASE_URL } from "../../../utils/env";
import "./Membership.css";

const Invite = ({ show, handleClose, login }) => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);

  const [profile, setProfile] = useState(true);

  const [profileData, setProfileData] = useState({});

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
      .post(`${BASE_URL}/invites/register`, formData, {
        headers: {
          accesstoken: localStorage.getItem("token-liz"),
        },
      })
      .then((res) => {
        setProfile(true);
        setError("");
        Swal.fire({
          icon: "success",
          title: "User Invited successful",
          showCloseButton: true,
        });
      })
      .catch((err) => {
        setError(err?.response?.data?.errMsg);
      });
  };

  useEffect(() => {
    setProfile(true);
    if (localStorage.getItem("token-liz")) {
      axios
        .get(
          `${BASE_URL}/users/getUserById/${localStorage.getItem("token-liz")}`,
          {
            headers: {
              accesstoken: localStorage.getItem("token-liz"),
            },
          }
        )
        .then((res) => {
          setProfileData(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [show]);

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

      {!profile && (
        <Form onSubmit={handleFormSubmit}>
          <Modal.Body className="text-center">
            <h2 id="subscribeNewsletter" className="mb-5">
              Invite User
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
                placeholder="Enter email"
              />
            </FloatingLabel>

            {error && <div className="text-danger mb-3">{error}</div>}
            <Button
              variant="primary"
              size="lg"
              type="submit"
              className="btn-color"
            >
              Submit
            </Button>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" size="lg" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" size="lg" type="submit">
              Save
            </Button>
          </Modal.Footer> */}
        </Form>
      )}

      {profile && (
        <>
          <Modal.Body className="text-center">
            <h2 id="subscribeNewsletter" className="mb-5">
              Profile
            </h2>
            {/* <p className="mb-7 mb-lg-10">Signup for our weekly newsletter to get the latest news, updates and
                            amazing offers delivered directly in your inbox.</p> */}

            <div className="userData">
              <div>
                Name: {profileData?.firstName} {profileData?.lastName}
              </div>
              <div>Email: {profileData?.email}</div>
              <div>Rewards: {profileData?.rewards}</div>
              <div>Referrals: {profileData?.invites}</div>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                className="mt-5 btn-color"
                onClick={() => {
                  setProfile(false);
                }}
              >
                Invite User
              </Button>

              <Button
                variant="primary"
                size="lg"
                type="submit"
                className="mt-5 ml-2 btn-color"
                onClick={() => {
                  localStorage.removeItem("token-liz");
                  localStorage.removeItem("user-liz");
                  window.location.reload();
                }}
              >
                Logout
              </Button>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" size="lg" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer> */}
        </>
      )}
    </Modal>
  );
};

export default Invite;
