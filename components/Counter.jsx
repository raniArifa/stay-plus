"use client";
import { counterData } from "@/data/data";
import useAnimation from "@/hooks/useAnimation";
import CounterUp from "@/utils/CounterUp";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Counter = ({ className }) => {
  const { t } = useTranslation();
  const ref = useRef();
  const animation = useAnimation(ref);
  return (
    <section className={`${className} counter`}>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container"
      >
        <div className="row">
          <div className="col-12 ">
            <div className="counter--container d-flex">
              {counterData.map((item) => {
                const { id, description, Icon, leftIcon, count, rightIcon } =
                  item;
                  const translatedDescription = t(description);
                return (
                  <div key={id} className="counter--content">
                    <div className="counter--content-icon">{Icon}</div>
                    <div className="counter--content-percent">
                      <h2>
                        {leftIcon && leftIcon}
                        <CounterUp number={count} />
                        {t(rightIcon) && t(rightIcon)}
                      </h2>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{ __html: translatedDescription }}
                      className="bold"
                    ></p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Counter;
