"use client";
import Image from "next/image";
import Link from "next/link";
import useAnimation from "@/hooks/useAnimation";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


const FeatureTop = () => {
  const { t } = useTranslation();
  const ref = useRef();
  const animation = useAnimation(ref);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animation}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="row align-items-center feature-top"
    >
      <div className="col-lg-6 order-lg-1 order-2">
        <div className="feature-content">
          <h3>{t('feature_top_heading')}</h3>
          <p>{t('feature_top_body')} </p>
          <Link href="/contact" className="btn btn-small">
          {t('contact_us')}
          </Link>
        </div>
      </div>
      <div className="col-lg-6 order-lg-2 order-1">
        <div className="row">
          <div className="col-6 ">
            <div className="feature-grid-image">
              <Image
                src="/images/feature/feature1.jpg"
                height={327}
                width={284}
                alt="feature1"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Image
                height={218}
                width={284}
                src="/images/feature/feature2.jpg"
                alt="feature2"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="feature-grid-image">
              <Image
                height={218}
                width={284}
                src="/images/feature/feature3.jpg"
                alt="feature3"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Image
                height={327}
                width={284}
                src="/images/feature/feature4.jpg"
                alt="feature4"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureTop;
