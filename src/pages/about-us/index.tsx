import ContentLayout from "@site/src/components/ContentLayout";
import OurValues from "@site/src/components/OurValues/OurValues";
import Layout from "@theme/Layout";
import React from "react";

function AboutUs() {
  return (
    <Layout>
      <ContentLayout>
        <OurValues />
      </ContentLayout>
    </Layout>
  );
}

export default AboutUs;
