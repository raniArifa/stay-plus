"use client";

import { useGlobal } from "@/app/global-provider";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const { id } = params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [property, setProperty] = useState({});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [errorMessage, setErrorMessage] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showContent, setShowContent] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoggedIn, setIsLoggedIn } = useGlobal();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (isLoggedIn) {
      fetch(`/api/fetchCustomerData?id=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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
            setLoading(false);
            setShowContent(false);
          } else {
            setProperty(data.data);
            setErrorMessage(null);
            setLoading(false);
            setShowContent(true);
          }
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setLoading(false);
          setShowContent(false);
          throw error;
        });
    } else {
      setShowContent(false);
      setLoading(false);
      setErrorMessage("Only admin can see this page");
    }
  }, [id, isLoggedIn]);
  const {
    fullName,
    emailAddress,
    areaOfHousing,
    numberOfApartments,
    phoneNumber,
    typeOfHousing,
    companyName,
    extraInfo,
    creationTime,
  } = property;

  return (
    <>
      <section className="property-details" id="property-details">
        <div className="container">
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          {loading && (
            <div className="text-center">
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {showContent && (
            <div className="row">
              <div className="col-lg-8">
                <div className="property-details-content">
                  <div className="property-details-content-title">
                    <h4>{areaOfHousing}</h4>
                    <p className="bold">
                      {numberOfApartments ? numberOfApartments : 0}{" "}
                      {typeOfHousing}
                    </p>
                  </div>
                  <div className="property-details-content-details">
                    <p className="bold">{fullName}</p>
                    <p>Company: {companyName}</p>
                  </div>
                  <div className="property-details-content-details">
                    <p>Contact# {phoneNumber}</p>
                    <p>Email: {emailAddress}</p>
                  </div>
                  <div className="property-details-content-details">
                    <p>Type of Housing: {typeOfHousing}</p>
                    <p>Extra Info: {extraInfo}</p>
                    <p>Date: {creationTime}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
