"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PropertyCard = ({
  fullName,
  companyName,
  phoneNumber,
  numberOfApartments,
  typeOfHousing,
  _id,
  creationTime
}) => {
  return (
    <motion.div
      layout
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 25,
      }}
      className="properties-card agriculture resident"
    >
      <motion.div className="properties-card--content">
        <motion.div className="d-flex align-items-center properties-card--content--address">
          <motion.span>{fullName}</motion.span>
        </motion.div>
        <motion.div className="d-flex align-items-center properties-card--content--address">
          <motion.span>{companyName}</motion.span>
        </motion.div>
        <motion.div className="d-flex align-items-center properties-card--content--address">
          <motion.span>{phoneNumber}</motion.span>
        </motion.div>
        <motion.div className="d-flex align-items-center properties-card--content--address">
          <motion.span>
            {numberOfApartments ? numberOfApartments : 0} {typeOfHousing}
          </motion.span>
        </motion.div>
        <motion.div className="properties-card--footer d-flex align-items-center justify-content-between">
          <Link href={`/property/${_id}`} className="btn btn-small">
            View Details
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PropertyCard;
