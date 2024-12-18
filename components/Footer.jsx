"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <section className="footer d-none d-xl-block">
        <div className="container-fluid footer-container">
          <div className="row">
            <div className="offset-xl-1 col-xl-3">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    height={45}
                    width={119}
                  />
                </div>
                <div className="footer-address">
                  <p>
                    Stay in Sweden AB
                    <br /> Box 20011 SE-161 02
                    <br /> Bromma, Sweden
                  </p>
                </div>
                <div className="footer-widget">
                  <h5>
                    {" "}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <h5> {t("about_us_heading")}</h5>
              <p className=" ">{t("about_us_body")}</p>
            </div>
            <div className="col-xl-2"></div>

            <div className="col-xl-2">
              <div className="footer-widget">
                <h5>{t("pages")}</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/" className="footer-link">
                      {t("home")}
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact" className="footer-link">
                      {t("contact")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="offset-1 col-11">
              <p className="footer-copyright">
                Stay in Sweden AB © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*For Tablet */}
      <section className="footer d-none d-sm-block d-xl-none">
        <div className="container-fluid footer-container">
          <div className="row">
            <div className="col-sm-4">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    height={45}
                    width={119}
                  />
                </div>
                <div className="footer-address">
                  <p>
                    Stay in Sweden AB
                    <br /> Box 20011 SE-161 02
                    <br /> Bromma, Sweden
                  </p>

                </div>
                <div>
                  <p className="footer-copyright">
                    Stay in Sweden AB {new Date().getFullYear()}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <h5> About Us</h5>
              <p className=" ">
                We give people a home away from home.We have a vision to become
                global leader with the aim to redefining living experiences and
                improve the quality of life for those working a limited time in
                Stockholm.
              </p>
            </div>

            <div className="col-sm-4">
              <div className="row row-cols-2 gutter-5">
                <div className="col">
                  <div className="footer-widget">
                    <h5>{t("pages")}</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link href="/" className="footer-link">
                          {t("home")}
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="footer-link">
                          {t("contact")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*For Mobile */}
      <section className="footer d-block d-sm-none ">
        
            <div className="col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    height={45}
                    width={119}
                  />
                </div>
              </div>
              </div>
              <div className="col-sm-6">
                <div className="footer-widget">
                  <h5>{t("pages")}</h5>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/" className="footer-link">
                        {t("home")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="footer-link">
                        {t("contact")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
      

            <div className="col-12">
                <div className="footer-address">
                  <p>
                    Stay in Sweden AB
                    <br /> Box 20011 SE-161 02
                    <br /> Bromma, Sweden
                  </p>
                </div>
            </div>
                <p className="footer-copyright">
          Stay in Sweden AB {new Date().getFullYear()}
        </p>
      </section>
    </>
  );
};

export default Footer;
