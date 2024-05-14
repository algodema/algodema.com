import HomeSlides from "@site/src/components/HomeSlides/HomeSlides";
import OurMethodSection from "@site/src/components/OurMethodSection/OurMethodSection";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import FeaturesClients from "@site/src/components/FeaturedClients/FeaturedClients";

function HomePage() {
  return (
    <Layout>
      <div className="container">
        <section>
          <HomeSlides />
        </section>
        <section>
          <OurMethodSection />
        </section>
        <section>
          <FeaturesClients />
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;
