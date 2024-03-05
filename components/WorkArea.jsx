"use client";
import {EnjoyIcon, GetIcon, SearchLocation, VisitIcon} from "@/data/svgImages";
import useAnimation from "@/hooks/useAnimation";
import {motion} from "framer-motion";
import Link from "next/link";
import {useRef} from "react";
const WorkArea = () => {
  const ref = useRef();
  const animation = useAnimation(ref);
  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0},
      }}
      initial="hidden"
      animate={animation}
      transition={{duration: 0.5, delay: 0.2}}
      className="work-area"
    >
      <div className="container">
        <div className="row g-3">
          <div className="col-xl-6 col-lg-5">
            <div className="work-area--card">
              <h3>Stay Plus is the long term solution for a short term stay</h3>
              <p>Stay has more than 15 years of experience in long term housing market in Sweden.Stay Sthlm offers tailored long-term housing solutions for those working a limited time in Stockholm.</p>
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
                <SearchLocation />
                <h4>
                  1. Viewing & Content <br /> Production
                </h4>
              </div>
              <div className="work-area--service--items order-1 order-md-2">
                <VisitIcon />
                <h4>
                2.Legal <br /> & Contract
                </h4>
              </div>
              <div className="work-area--service--items order-4 order-md-3">
                <GetIcon />
                <h4>
                 3. Online <br /> Marketing
                </h4>
              </div>
              <div className="work-area--service--items order-3 order-md-4">
                <EnjoyIcon />
                <h4>
                 4. Stayplus <br /> Co-hosting
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
