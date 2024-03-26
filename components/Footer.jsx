"use client";
import { socialMediaData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
const Footer = () => {
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
                    Stay in Sweden AB<br /> Box 20011 SE-161 02<br />  Bromma, Sweden
                  </p></div>
                <div className="footer-widget">
                  <h5> <p className="contact-email mb-0">
                    <a href="mailto:stayplus@staysthlm.se">stayplus@staysthlm.se</a>
                  </p></h5>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <h5> About Us</h5>
              <p className=" ">
                We&apos;re redefining work-and-living experiences in Stockholm. We offer relocating professionals, remote workers, and digital nomads a home away from home, and provide property owners with safe, reliable, and hassle-free income.              </p>

            </div>
            <div className="col-xl-2">

            </div>

            <div className="col-xl-2">
              <div className="footer-widget">
                <h5>Pages</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      href="/"
                      className="footer-link"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      className="footer-link"
                    >
                      Contact
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="offset-1 col-11">
              <p className="footer-copyright">Stay in Sweden AB © {new Date().getFullYear()}</p>
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
                    Stay in Sweden AB<br /> Box 20011 SE-161 02<br />  Bromma, Sweden
                  </p>

                  <p className="contact-email mb-0">
                    <Link href="mailto:stayplus@staysthlm.se">stayplus@staysthlm.se</Link>
                  </p>
                </div>
                <div>
                  <p className="footer-copyright">Stay in Sweden AB {new Date().getFullYear()}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <h5> About Us</h5>
              <p className=" ">
                We give people a home away from home.We have a vision to become global leader with the aim to redefining living experiences and improve the quality of life for those working a limited time in Stockholm.
              </p>
            </div>

            <div className="col-sm-4">
              <div className="row row-cols-2 gutter-5">
                <div className="col">
                  <div className="footer-widget">
                    <h5>Pages</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          href="/"
                          className="footer-link"
                        >
                          Home Page
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className="footer-link"
                        >
                          Contact
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
        <div className="container-fluid footer-container">
          <div className="row gutter-5">
            <div className="col-12">
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
            <div className="col-12">
              <div className="row row-cols-2 gutter-5">
                <div className="col">
                  <div className="footer-widget">
                    <h5>Pages </h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          href="/"
                          className="footer-link"
                        >
                          Home Page
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className="footer-link"
                        >
                          Contact
                        </Link>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-widget">
                <div className="footer-address">
                  <p>
                    Stay in Sweden AB<br /> Box 20011 SE-161 02<br />  Bromma, Sweden
                  </p>
                  <p className="contact-email mb-0">
                    <a href="mailto:stayplus@staysthlm.se">stayplus@staysthlm.se</a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <p className="footer-copyright">Stay in Sweden AB {new Date().getFullYear()}</p>
      </section>
    </>
  );
};

export default Footer;
