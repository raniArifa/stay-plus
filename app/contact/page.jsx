"use client";
import useTitle from "@/hooks/useTitle";
import { useState } from "react";
import { EnvelopeSimpleOpen, House, Pencil, Phone, User, CaretDown } from "phosphor-react";


const Contact = () => {
  const [types, setTypes] = useState(["Villa", "Apartments", "Cottage"]);
  const [typeOfHousing, setTypeOfHousing] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [review, setReview] = useState(false);
  const handleSelect = (value) => {
    setTypeOfHousing(value);
    setReview(!review);
  }

  const handleSubmit = () => {
    // validate all required fields
    const requestBody = {
      fullName,
      emailAddress,
      phoneNumber,
      typeOfHousing,
      numberOfRooms,
      extraInfo
    }
    fetch("api/saveCustomerRequest", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    }).then(response => {
      if (response.ok) {
        // Show success message on UI
        console.log("Success")
        handleReset();
      }
    }).catch(error => {
      throw error;
    })
  }
  const handleReset = () => {
    setTypeOfHousing(null);
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
                Stay Plus will help you with your property today.Are you looking for a short-term solution for your clients or interested in our service? Contact our sales team to learn more sales@staysthlm.se
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="contact-form">
              <div className="contact-form-layout">
                <h4>Send Message</h4>
                <form className="contact-form-items">
                  <div className="input-group">
                    <span className="input-group-text">
                      <User size={20} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      onBlur={(event) => setFullName(event.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <EnvelopeSimpleOpen size={20} />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      onBlur={(event) => setEmailAddress(event.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <Phone size={20} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      onBlur={(event) => setPhoneNumber(event.target.value)}
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
                            {typeOfHousing && <span className="float-left">{typeOfHousing}</span>}
                            <span className="dummyItem float-left placeholder">Type of Housing </span>
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
                      type="text"
                      className="form-control"
                      placeholder="No. of Rooms, Size in sq. m"
                      onBlur={(event) => setNumberOfRooms(event.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <Pencil size={20} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add some extra details?"
                      onBlur={(event) => setExtraInfo(event.target.value)}
                    />
                  </div>
                  <div className="w-100 contact-form-button">
                    <button
                      type="button"
                      className="btn btn-large"
                      onClick={handleSubmit}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="contact-form-address">
                <h6>How this works?</h6>
                <p>
                  1. You contact us through this form. We get in touch with you with our plan.<br />

                  2. We draw up a tailor-made lease agreement which benefits all parties.<br />

                  3. We organize the administrative work with rental payments,invoices, receipts, check-lists and other documents so the rental will be as safe and smooth as possible.<br />
                  4. We use online marketing and advertising tools to increase your property's visibility on rental platforms, ensuring it stands out and attracts more potential guests. </p>

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
