"use client";
import { EnjoyIcon, GetIcon, ChartLineUp, VisitIcon } from "@/data/svgImages";
import useAnimation from "@/hooks/useAnimation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
const WorkArea = () => {
  const ref = useRef();
  const animation = useAnimation(ref);
  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animation}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="work-area"
    >
      <div className="container">
        <div className="row g-3">
          <div className="col-xl-6 col-lg-5">
            <div className="work-area--card">
              <h3>Your Property&apos;s in Safe Hands</h3>
              <p>Stay Stockholm and Stay Plus have over 15 years of experience in the Swedish rental market. We provide tailored long, medium, and short-term housing solutions to professionals who are temporarily working in Stockholm.</p>
              <Link
                href="/contact"
                className="btn btn-small"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="d-grid work-area--service">
              <div className="work-area--service--items order-2 order-md-1">
                <ChartLineUp />
                <h4>
                  Maximize your property&apos;s
                  <br /> profitability
                </h4>
              </div>
              <div className="work-area--service--items order-1 order-md-2">
                <EnjoyIcon />
                <h4>
                  Enjoy Hassle <br /> Free Income
                </h4>
              </div>
              <div className="work-area--service--items order-4 order-md-3">
                <GetIcon />
                <h4>
                  Reliable And <br /> Legally Compliant
                </h4>
              </div>
              <div className="work-area--service--items order-3 order-md-4">
                <VisitIcon />
                <h4>
                  15 Years of <br /> Industry Experience
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkArea;
