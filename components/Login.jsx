"use client";
import { Keyhole, User } from "phosphor-react";
import { useState } from "react";

const Login = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `api/login?username=${formValue.username}&password=${formValue.password}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        if (data.errorDetails) {
          setErrorMessage(data.message);
        } else {
          if (data.status === 200) {
            resetForm();
            setErrorMessage(null);
            setSuccessMessage(data.message);
            sessionStorage.setItem("isLoggedIn", true);
            window.location.reload();
          } else {
            setErrorMessage(data.message);
            setSuccessMessage(null);
          }
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setSuccessMessage(null);
        throw error;
      });
  };

  const onChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
    setFormValue({
      username: "",
      password: "",
    });
  };
  return (
    <div className="modal fade modal-login" id="login">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 id="loginLabel">Log in</h4>
            <button
              type="button"
              className="btn-modal-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  stroke="#1C4456"
                  strokeWidth="2.3"
                  strokeMiterlimit={10}
                />
                <path
                  d="M15 9L9 15"
                  stroke="#1C4456"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 15L9 9"
                  stroke="#1C4456"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="modal-property-details-form">
                {successMessage && (
                  <div class="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                <form
                  className="contact-form-items row"
                  onSubmit={handleSubmit}
                >
                  <div className="col-12">
                    <div className="input-group">
                      <span className="input-group-text">
                        <User size={20} weight="bold" />
                      </span>
                      <input
                        type="text"
                        name="username"
                        value={formValue.username}
                        className="form-control"
                        placeholder="user / email address"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group">
                      <span className="input-group-text">
                        <Keyhole size={20} weight="bold" />
                      </span>
                      <input
                        type="password"
                        name="password"
                        value={formValue.password}
                        className="form-control"
                        placeholder="Password"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="w-100 contact-form-button">
                    <button
                      type="submit"
                      className="btn btn-large d-block w-100"
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
