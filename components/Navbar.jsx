"use client";
import { menuData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  CaretDown,
  List,
  XCircle,
} from "phosphor-react";

const Navbar = () => {
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
          <div className=" d-none d-sm-flex navbar-search align-items-center ms-auto ms-lg-0 order-lg-last">
            <button
              className="btn btn-small btn-outline d-none d-lg-inline-block"
              type="submit"
              id="5"
              onClick={() => router.push("/contact")}
            >

              Get in Touch
            </button>
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
                            {item.children.slice(5).map((child) => (
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
    </header>
  );
};

export default Navbar;
