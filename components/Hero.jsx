"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";


const Hero = () => {
  const { t } = useTranslation();
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
                {t('main_page_heading')}

                </h1>
                <p className="hero-content-description ">
                  {t('main_page_body')}
                </p>
              </div>

              <div className="col-md-4 col-sm-6 text-md-end">
                <button
                  className="btn btn-large submit-button d-flex align-items-center w-100 ms-auto justify-content-center"
                  type="submit"
                  id="2"
                  onClick={() => router.push("/contact")}
                >                            {t('contact_us')}

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
