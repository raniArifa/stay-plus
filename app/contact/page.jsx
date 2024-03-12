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
} from "phosphor-react";

const Contact = () => {
  const [types, setTypes] = useState(["Villa", "Apartments", "Cottage"]);
  const [review, setReview] = useState(false);
  const [formValue, setFormValue] = useState({
    fullName: "",
    emailAddress: "",
    typeOfHousing: "",
    phoneNumber: "",
    numberOfRooms: "",
    extraInfo: "",
  });
  const handleSelect = (value) => {
    setFormValue({ ...formValue, ["typeOfHousing"]: value });
    setReview(!review);
  };

  const onChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    fetch("api/saveCustomerRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    })
      .then((response) => {
        if (response.ok) {
          // Show success message on UI
          handleReset();
        }
      })
      .catch((error) => {
        throw error;
      });
  };
  const handleReset = () => {
    setTypes([...types]);
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
                Stay Plus will help you with your property today.Are you looking
                for a short-term solution for your clients or interested in our
                service? Contact our sales team to learn more sales@staysthlm.se
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="contact-form">
              <div className="contact-form-layout">
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
                      placeholder="Full Name"
                      onChange={onChange}
                      required
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
                          className={`customdropdown d-flex justify-content-between align-items-center  ${
                            review ? "active" : ""
                          }`}
                        >
                          <p className="btn btn-large btn-outline">
                            {formValue.typeOfHousing && (
                              <span className="float-left">
                                {formValue.typeOfHousing}
                              </span>
                            )}
                            <span className="dummyItem float-left">
                              Type of Housing{" "}
                            </span>
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
                      name="numberOfRooms"
                      value={formValue.numberOfRooms}
                      className="form-control"
                      placeholder="No. of Rooms, Size in sq. m"
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
                      name="extraInfo"
                      value={formValue.extraInfo}
                      className="form-control"
                      placeholder="Add some extra details?"
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

                {/*                 <div className="contact-social">
                  <h6>Socila Links</h6>
                  <ul className="list-unstyled list-inline">
                    {socialMediaData.map((media) => (
                      <li
                        key={media.id}
                        className="list-inline-item"
                      >
                        <a href="#">{media.icon}</a>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
