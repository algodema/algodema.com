import React from "react";
import styles from "./RightArrow.module.css";

interface RightArrowProps {
  className?: string;
}

function RightArrow({ className = "" }: RightArrowProps) {
  return <span className={`${styles.arrow} ${className}`} aria-hidden="true" />;
}

export default RightArrow;
