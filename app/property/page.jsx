"use client";
import MainPropertyArea from "@/components/MainPropertyArea";
import { useEffect, useState } from "react";

const Page = () => {
  const [propertiesData, setPropertiesData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

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
          setLoading(false);
        } else {
          setPropertiesData(data.data);
          setErrorMessage(null);
          setLoading(false);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
        throw error;
      });
  }, []);
  return (
      <MainPropertyArea propertiesData={propertiesData} loading={loading} errorMessage={errorMessage} />
  );
};

export default Page;
