import { CartaItem } from "@site/src/domain/ui/carta/CartaItem";
import CartaList from "@site/src/components/ui/Carta/CartaList";
import { services } from "../../data/services";
import React from "react";
import Layout from "@theme/Layout";
import ContentLayout from "@site/src/components/ContentLayout";

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
        <div className="grid grid-flow-row gap-2 md:grid md:grid-flow-col md:gap-4">
          <img
            src="/img/hands-on-keyboard.jpg"
            alt="technology"
            width={380}
            height={480}
          />
          <div>
            <div>
              <h1 className="mb-4 text-2xl font-bold text-primary-700">
                Empowering you to stay ahead of the curve.
              </h1>
              <p className="mb-4">
                Embracing the forefront of technological evolution, our
                distinguishable engineering firm excels in the realms of cloud
                computing, software architecture, application development, and
                artificial intelligence. With a keen eye for innovation and a
                passion for problem-solving, we forge solutions that transcend
                boundaries, shaping a future where possibilities are limitless
                and excellence is the norm.
              </p>
              <a
                href="contact"
                className="hover:bg-red-920 dark:focus:ring-red-920 mt-2 inline-flex  items-center rounded-lg bg-red-700 px-3 py-2 text-center text-lg font-medium text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700"
              >
                How can we help you?
              </a>
            </div>
            <div className="mt-8">
              <h1 className="mb-4 text-2xl font-bold text-primary-700">
                Our services
              </h1>
              <CartaList items={cartaItems} />
            </div>
          </div>
        </div>
      </ContentLayout>
    </Layout>
  );
}

export default index;
