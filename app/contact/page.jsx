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
  Notepad,
  HouseLine,
} from "phosphor-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [types, setTypes] = useState(["apartments", "villa", "cottage"]);
  const [review, setReview] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formValue, setFormValue] = useState({
    fullName: "",
    companyName: "",
    emailAddress: "",
    typeOfHousing: "apartments",
    phoneNumber: "",
    numberOfApartments: "",
    areaOfHousing: "",
    extraInfo: "",
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
      extraInfo: "",
    });
  };

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
        if (data.errorDetails) {
          setErrorMessage(data.message);
          setSuccessMessage(null);
        } else {
          setSuccessMessage(data.message);
          setErrorMessage(null);
          handleReset();
        }
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

  useTitle(t("contact_title"));
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-10 mx-auto">
            <div className="contact-title text-center">
              {/* //Maximize Your Property's Revenue */}
              <h3>{t("maximize")}</h3>
              <p>{t("contactFormHeader")}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="contact-form">
              <div className="contact-form-layout">
                {successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                <h4>{t("form_name")}</h4>
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
                      placeholder={t("full_name")}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <HouseLine size={20} />
                    </span>
                    <input
                      type="text"
                      name="companyName"
                      value={formValue.companyName}
                      className="form-control"
                      placeholder={t("company_name")}
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
                      placeholder={t("email_address")}
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
                      placeholder={t("phone_number")}
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
                            <span className="float-left housing-dropdown">
                              <House size={20} />
                            </span>
                            {formValue.typeOfHousing && (
                              <span className="float-left type-of-housing">
                                {t(formValue.typeOfHousing)}
                              </span>
                            )}
                            <CaretDown size={20} className="float-right" />
                          </p>
                        </div>
                        <ul className="dropdownMenu">
                          {types.map((item) => (
                            <li key={item} onClick={() => handleSelect(item)}>
                              {t(item)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <Buildings size={20} />
                    </span>
                    <input
                      type="number"
                      name="numberOfApartments"
                      value={formValue.numberOfApartments}
                      className="form-control"
                      placeholder={t("no_of_apartments")}
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
                      placeholder={t("area_of_housing")}
                      onChange={onChange}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      <Notepad size={20} />
                    </span>
                    <input
                      type="text"
                      name="extraInfo"
                      value={formValue.extraInfo}
                      className="form-control"
                      placeholder={t("more_info")}
                      onChange={onChange}
                    />
                  </div>
                  <div className="w-100 contact-form-button">
                    <button type="submit" className="btn btn-large">
                      {t("send_message")}
                    </button>
                  </div>
                </form>
              </div>
              <div className="contact-form-address">
                <h6>{t("how")}</h6>
                <ol>
                  <li>
                    <p>{t("line1")}</p>
                  </li>
                  <li>
                    <p>{t("line2")}</p>
                  </li>
                  <li>
                    <p>{t("line3")}</p>
                  </li>
                  <li>
                    <p>{t("line4")}</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
