"use client";
import {
  AreaIcon,
  BathIcon,
  BedIcon,
  Location,
  PropertyTypeIcon,
} from "@/data/svgImages";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PropertyCard = ({
  location,
  bed,
  bath,
  area,
  type,
  price,
  coverImg,
  title,
  id,
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
      <motion.div className="properties-card--thumb">
        <Image
          height={260}
          width={384}
          src={coverImg}
          alt={title}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </motion.div>
      <motion.div className="properties-card--content">
        <motion.div className="properties-card--content--title">
          <Link href={`/property/${id}`}>
            {title.split(" ").slice(0, 5).join(" ")}
          </Link>
        </motion.div>
        <motion.div className="d-flex align-items-center properties-card--content--address">
          <Location />
          <motion.span>{location}</motion.span>
        </motion.div>
        <motion.ul className="list-unstyled properties-card--content--features">
          <motion.li className="d-flex align-items-center">
            <BedIcon />
            <motion.span>{bed} Bed Room</motion.span>
          </motion.li>
          <motion.li className="d-flex align-items-center">
            <BathIcon />
            <motion.span>{bath} Bath</motion.span>
          </motion.li>
          <motion.li className="d-flex align-items-center">
            <AreaIcon />
            <motion.span>{area} sqft</motion.span>
          </motion.li>
          <motion.li className="d-flex align-items-center">
            <PropertyTypeIcon />
            <motion.span>{type}</motion.span>
          </motion.li>
        </motion.ul>
        <motion.div className="properties-card--footer d-flex align-items-center justify-content-between">
          <Link href={`/property/${id}`} className="btn btn-small">
            View Details
          </Link>
          <motion.h5>${price.toLocaleString()}</motion.h5>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PropertyCard;
