"use client";
import useTitle from "@/hooks/useTitle";
import { useState } from "react";
import {
  EnvelopeSimpleOpen,
  House,
  Pencil,
  Phone,
  User,
  CaretDown,
  Buildings,
} from "phosphor-react";

const Contact = () => {
  const [types, setTypes] = useState(["Apartments", "Villa", "Cottage"]);
  const [review, setReview] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formValue, setFormValue] = useState({
    fullName: "",
    companyName: "",
    emailAddress: "",
    typeOfHousing: "Apartments",
    phoneNumber: "",
    numberOfApartments: "",
    areaOfHousing: "",
  });
  const handleSelect = (value) => {
    setFormValue({ ...formValue, ["typeOfHousing"]: value });
    setReview(!review);
  };

  const onChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
    setFormValue({
      fullName: "",
      companyName: "",
      emailAddress: "",
      typeOfHousing: "Apartments",
      phoneNumber: "",
      numberOfApartments: "",
      areaOfHousing: "",
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("api/saveCustomerRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        setSuccessMessage(data.message);
        setErrorMessage(null);
        handleReset();
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setSuccessMessage(null);
        throw error;
      });
  };
  const handleReset = () => {
    setTypes([...types]);
    resetForm();
  };

  useTitle("Contact Us | StayPlus");
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-10 mx-auto">
            <div className="contact-title text-center">
              <h1>Get In Touch</h1>
              <p>
                Stay Plus will help you with your property today.If you are looking
                for a short-term solution for your clients, contact our sales team to learn more sales@staysthlm.se
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="contact-form">
              <div className="contact-form-layout">
                {successMessage && (<div className="alert alert-success" role="alert">
                  {successMessage}
                </div>)
                }
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>)
                }
                <h4>Send Message</h4>
                <form className="contact-form-items" onSubmit={handleSubmit}>
                  <div className="input-group">
                    <span className="input-group-text">
                      <User size={20} />
                    </span>
                    <input
                      type="text"
                      name="fullName"
                      value={formValue.fullName}
                      className="form-control"
                      placeholder="Your Full Name"
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <Buildings size={20} />
                    </span>
                    <input
                      type="text"
                      name="companyName"
                      value={formValue.companyName}
                      className="form-control"
                      placeholder="Company Name"
                      onChange={onChange}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <EnvelopeSimpleOpen size={20} />
                    </span>
                    <input
                      type="email"
                      name="emailAddress"
                      value={formValue.emailAddress}
                      className="form-control"
                      placeholder="Email Address"
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <Phone size={20} />
                    </span>
                    <input
                      type="number"
                      name="phoneNumber"
                      value={formValue.phoneNumber}
                      className="form-control"
                      placeholder="Phone Number"
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <div className="filter-buy width-100">
                      <div className="dropholder">
                        <div
                          onClick={() => setReview(!review)}
                          className={`customdropdown d-flex justify-content-between align-items-center  ${review ? "active" : ""
                            }`}
                        >
                          <p className="btn btn-large btn-outline">
                            <span className="float-left housing-dropdown">
                              <House size={20} />
                            </span>
                            {formValue.typeOfHousing && (
                              <span className="float-left type-of-housing">
                                {formValue.typeOfHousing}
                              </span>
                            )}
                            <CaretDown size={20} className="float-right" />
                          </p>
                        </div>
                        <ul className="dropdownMenu">
                          {types.map((item) => (
                            <li key={item} onClick={() => handleSelect(item)}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <House size={20} />
                    </span>
                    <input
                      type="number"
                      name="numberOfApartments"
                      value={formValue.numberOfApartments}
                      className="form-control"
                      placeholder="No. of Apartments"
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <Pencil size={20} />
                    </span>
                    <input
                      type="text"
                      name="areaOfHousing"
                      value={formValue.areaOfHousing}
                      className="form-control"
                      placeholder="Specify the area of housing"
                      onChange={onChange}
                    />
                  </div>
                  <div className="w-100 contact-form-button">
                    <button type="submit" className="btn btn-large">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="contact-form-address">
                <h6>How this works?</h6>
                <p>
                  1. You contact us through this form. We get in touch with you
                  with our plan.
                  <br />
                  2. We draw up a tailor-made lease agreement which benefits all
                  parties.
                  <br />
                  3. We organize the administrative work with rental
                  payments,invoices, receipts, check-lists and other documents
                  so the rental will be as safe and smooth as possible.
                  <br />
                  4. We use online marketing and advertising tools to increase
                  your property's visibility on rental platforms, ensuring it
                  stands out and attracts more potential guests.{" "}
                </p>

            
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
