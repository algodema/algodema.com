import { featuredClien } from "@site/src/data/featuredClients";
import FeaturedClient from "@site/src/domain/FeaturedClient/FeaturedClient";
import clsx from "clsx";
import styles from "./FeaturedClients.module.css";

function FeaturedClientCard({ client, subject, story }: FeaturedClient) {
  return (
    <div className={clsx(`col col--4`)}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.client}>{client}</h3>
        <p>{story}</p>
      </div>
    </div>
  );
}

function FeaturesClients() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1>Featured client stories</h1>
        <div className="row">
          {featuredClien.map((props, idx) => (
            <FeaturedClientCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesClients;
