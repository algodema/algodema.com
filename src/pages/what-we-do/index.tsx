import ContentLayout from "@site/src/components/ContentLayout";
import ServicesSection from "@site/src/components/ServicesSection/ServicesSecion";
import { CartaItem } from "@site/src/domain/ui/carta/CartaItem";
import Layout from "@theme/Layout";
import { services } from "../../data/services/services";
import styles from "./index.module.css";

function index() {
  const cartaItems: CartaItem[] = services.map((service, index) => ({
    index: index,
    title: service.title,
    image: service.image,
    paragraph: service.content,
    readMoreUrl: `/what-we-do/${service.slug}`,
    slug: service.slug,
  }));

  return (
    <Layout title="home">
      <ContentLayout>
        <div className={styles.rootContainer}>
          <main className={styles.hero}>
            <h1 className={styles.pageTitle}>
              Empowering you to stay ahead of the curve.
            </h1>
            <p className={styles.pageParagraph}>
              Embracing the forefront of technological evolution, our
              distinguishable engineering firm excels in the realms of cloud
              computing, software architecture, application development, and
              artificial intelligence. With a keen eye for innovation and a
              passion for problem-solving, we forge solutions that transcend
              boundaries, shaping a future where possibilities are limitless
              and excellence is the norm.
            </p>
            <div className={styles.heroActions}>
              <a href="contact" className={styles.buttonLinkContact}>
                How can we help you?
              </a>
            </div>
          </main>
          <aside className={styles.servicesSection}>
            <ServicesSection services={services} />
          </aside>
        </div>
      </ContentLayout>
    </Layout>
  );
}

export default index;
