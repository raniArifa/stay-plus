"use client";
import useAnimation from "@/hooks/useAnimation";
import Image from "next/image";
import { CheckCircle } from "phosphor-react";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const FeatureBottom = () => {
  const ref = useRef();
  const animation = useAnimation(ref);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animation}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="row align-items-center feature-bottom"
    >
      <div className="col-md-6 order-xl-1 order-md-2">
        <div className="feature-content-thumb">
          <Image
            height={589}
            width={537}
            src="/images/feature/feature5.jpg"
            alt="feature5"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className="col-md-6 col-lg-5 me-lg-auto ms-xl-auto order-xl-2 order-md-1">
        <div className="feature-content">
          <h3>Tech Driven <br ></br> Co-Hosting With a Human Touch</h3>
          <p>
            We combine our in-house knowledge with digital tools and AI technology to deliver top-class service and ensure your short-term rental property’s success.
            We continuously monitor your occupancy rates and optimize for availability, revenue management, and profitability. We utilize tech responsibly so that you can:
          </p>
          <ul className="">
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">Save Time and Stress Less</span>
            </li>
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">Increase Your Earnings</span>
            </li>
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">Grow Your Property&apos;s Potential</span>
            </li>
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">Boost Your Online Visibilty</span>
            </li>
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">Ensure yYou&apos;re Legally Compliant</span>
            </li>
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">Gain Valuable Market Insights</span>
            </li>
          </ul>
          <a href="/about" className="btn btn-small">
            Learn More
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureBottom;
