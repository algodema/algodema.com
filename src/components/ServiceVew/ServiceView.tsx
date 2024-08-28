import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./ServiceView.module.css";
import Service from "@site/src/domain/service/Service";

interface ServiceViewProps {
  service: Service;
}
function ServiceView({ service }: ServiceViewProps) {
  return (
    <div className={styles.rootContainer}>
      <img
        className={styles.image}
        src={useBaseUrl(service.image.src)}
        alt={`${service.image.alt}`}
      />

      <div>
        <h6 className={styles.title}>{service.title}</h6>

        <p className={styles.paragraph}>{service.content}</p>
      </div>
    </div>
  );
}

export default ServiceView;
