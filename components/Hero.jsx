"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";


const Hero = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [city, setCity] = useState(false);
  const [property, setProperty] = useState(false);
  const [price, setPrice] = useState(false);

  const [selectedCity, setSelectedCity] = useState(null);

  const handleCity = (value) => {
    setSelectedCity(value);
    setCity(!city);
  };
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleProperty = (value) => {
    setSelectedProperty(value);
    setProperty(!property);
  };
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handlePrice = (value) => {
    setSelectedPrice(value);
    setPrice(!price);
  };
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-10 mt-0">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hero-shape"
            >
              <Image
                src="/images/hero/hero.png"
                alt="hero"
                height={822}
                width={613}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="hero-content ">
                <h1 className="hero-content-title ">
                Increase Your Income with Professional Co-hosting

                </h1>
                <p className="hero-content-description ">
                  Are you a property or home-owner looking to maximize your income but minimize the stress? Our professional co-hosting service helps you unlock your property&apos;s earning potential, hassle-free.
                </p>
              </div>

              <div className="col-md-4 col-sm-6 text-md-end">
                <button
                  className="btn btn-large submit-button d-flex align-items-center w-100 ms-auto justify-content-center"
                  type="submit"
                  id="5"
                  onClick={() => router.push("/contact")}
                >                            Contact Us

                  {/* <MagnifyingGlass size={30} weight="bold" /> */}
                  <span className="d-md-none d-inline-block">
                  </span>
                </button>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
