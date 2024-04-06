"use client";
import { EnjoyIcon, GetIcon, ChartLineUp, VisitIcon } from "@/data/svgImages";
import useAnimation from "@/hooks/useAnimation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const WorkArea = () => {
  const { t } = useTranslation();
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
              <h3>{t('work_area_heading')}</h3>
              <p>{t('work_area_body')}</p>
              <Link
                href="/contact"
                className="btn btn-small"
              >
                {t('get_started')}
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="d-grid work-area--service">
              <div className="work-area--service--items order-2 order-md-1">
                <ChartLineUp />
                <h4>
                {t('value_1')}
                </h4>
              </div>
              <div className="work-area--service--items order-1 order-md-2">
                <EnjoyIcon />
                <h4>
                {t('value_2')}
                </h4>
              </div>
              <div className="work-area--service--items order-4 order-md-3">
                <GetIcon />
                <h4>
                {t('value_3')}
                </h4>
              </div>
              <div className="work-area--service--items order-3 order-md-4">
                <VisitIcon />
                <h4>
                {t('value_4')}
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
