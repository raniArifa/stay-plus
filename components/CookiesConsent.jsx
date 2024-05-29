"use client";

import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

import { useTranslation } from "react-i18next";

export default function CookiesConsent() {
  const { t } = useTranslation();
  const [showConsent, setShowConsent] = useState(true);
  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div
      className="position-fixed bottom-0 start-0 w-100 bg-dark text-light p-2"
      style={{ zIndex: 7000000 }}
    >
      {" "}
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fs-5">
            {t ("cookies_consent")}
            <Link href={"/privacy-policy"} className="text-light">
            {t ("privacy_policy")}
            </Link>
          </span>
          <button
            className="btn btn-primary px-4 align-items-center"
            onClick={() => acceptCookie()}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
