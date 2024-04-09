"use client";
import useAnimation from "@/hooks/useAnimation";
import Image from "next/image";
import { CheckCircle } from "phosphor-react";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


const FeatureBottom = () => {
  const { t } = useTranslation();
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
          <h3>{t('feature_bottom_heading1')} <br ></br> {t('feature_bottom_heading2')}</h3>
          <p> {t('feature_bottom_body')}</p>
          <ul className="">
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">{t('feature_bottom_value1')}
</span>
            </li>
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">{t('feature_bottom_value2')}
</span>
            </li>
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">{t('feature_bottom_value3')}
</span>
            </li>
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">{t('feature_bottom_value4')}
</span>
            </li>
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">{t('feature_bottom_value5')}
</span>
            </li>
            <li>
              <CheckCircle size={20} weight="bold" />
              <span className="bold">{t('feature_bottom_value6')}
</span>
            </li>
          </ul>
          <a href="/about" className="btn btn-small">
          {t('learn_more')}

          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureBottom;
