import HomeSlides from "@site/src/components/HomeSlides/HomeSlides";
import OurMethodSection from "@site/src/components/OurMethodSection/OurMethodSection";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

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
      </div>
    </Layout>
  );
}

export default HomePage;
