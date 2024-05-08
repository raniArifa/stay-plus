"use client";

import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

export default function CookiesConsent() {
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
    <div className="position-fixed bottom-0 z-7000 start-0 w-100 bg-dark text-light p-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fs-5">
          We use cookies to improve your user experience, statistics and view customized offers. By browsing further you accept that necessary cookies are used. You can read more here at {" "}
            <Link href={"/privacy-policy"} className="text-light">
              Privacy Policy
            </Link>
          </span>
          <button
            className="btn btn-primary rounded-pill px-4"
            onClick={() => acceptCookie()}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
