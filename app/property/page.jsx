"use client";
import MainPropertyArea from "@/components/MainPropertyArea";
import { useEffect, useState } from "react";

const Page = () => {
  const [propertiesData, setPropertiesData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch("api/fetchCustomerData", {
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
        } else {
          setPropertiesData(data.data);
          setErrorMessage(null);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
        throw error;
      });
  }, []);
  return (
    <>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <MainPropertyArea propertiesData={propertiesData} />
    </>
  );
};

export default Page;
