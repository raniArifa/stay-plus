"use client";
import { menuData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CaretDown, List, XCircle } from "phosphor-react";
import { GlobeIcon } from "@/data/svgImages";
import React from 'react';


const Navbar = () => {

  const { t } = useTranslation();

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    const handleScroll = () => {
      const windscroll = window.scrollY;
      const navigationBar = document.getElementById("navigationBar");

      if (windscroll >= 100) {
        navigationBar.classList.add("sticky-nav");
      } else {
        navigationBar.classList.remove("sticky-nav");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-white" id="navigationBar">
        <div className="container-fluid navbar-container ">
          <div className="d-flex align-items-center">
            <Link className="navbar-brand" href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                height={45}
                width={119}
              />
            </Link>
          </div>

          <div className=" d-none d-sm-flex align-items-center ms-auto ms-lg-0 order-lg-last">
            <button className="btn btn-outline  d-none d-lg-inline-block" onClick={() => changeLanguage('en')}>En</button>
            <button className="btn btn-secondary  d-none d-lg-inline-block" onClick={() => changeLanguage('sv')}>Sv</button>
      <a
                class="btn btn-outline btn-small  d-none d-lg-inline-block"
                href="/contact"
                role="button"
              >
               { t('send_message')}
              </a>
        </div>


        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="open">
            <List size={28} color="#1C4456" className="me-1" />
            Menu
          </span>
          <span className="close">
            <XCircle size={28} color="#1C4456" className="me-1" />
            Close
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menuData.map((item) => {
              return (
                <li
                  key={item.id}
                  className={item.children ? "nav-item dropdown" : "nav-item"}
                >
                  {item.link ? (
                    <Link
                      className={
                        item.children
                          ? "nav-link dropdown-toggle"
                          : "nav-link"
                      }
                      href={item.link}
                      data-bs-toggle={item.children ? "dropdown" : ""}
                    >
                      {item.parent}
                    </Link>
                  ) : (
                    <a
                      className={
                        item.children
                          ? "nav-link dropdown-toggle"
                          : "nav-link"
                      }
                      href="#"
                      data-bs-toggle={item.children ? "dropdown" : ""}
                    >
                      {item.parent}
                      <CaretDown size={16} />
                    </a>
                  )}

                  {item.children && !item.megamenu && (
                    <ul className="dropdown-menu">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <Link className="dropdown-item" href={child.link}>
                            {child.parent}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.children && item.megamenu && (
                    <ul className="dropdown-menu megamenu">
                      <li className="megamenu-item d-flex justify-content-between">
                        <ul className="list-unstyled">
                          {item.children.slice(0, 5).map((child) => (
                            <li key={child.id}>
                              <Link
                                href={child.link}
                                className="dropdown-item"
                              >
                                {child.parent}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <ul className="list-unstyled">
                          {item.children.slice(2).map((child) => (
                            <li key={child.id}>
                              {child.link === "/notFound" ? (
                                <Link
                                  href={child.link}
                                  className="dropdown-item"
                                >
                                  {child.parent}
                                </Link>
                              ) : (
                                <Link
                                  href={child.link}
                                  data-bs-toggle="modal"
                                  className="dropdown-item"
                                >
                                  {child.parent}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
    </header >
  );
};

export default Navbar;
