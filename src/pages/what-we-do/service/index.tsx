import { Redirect, useLocation } from "@docusaurus/router";
import ContentLayout from "@site/src/components/ContentLayout";
import ServiceView from "@site/src/components/ServiceVew/ServiceView";
import { services } from "@site/src/data/services/services";
import Layout from "@theme/Layout";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ServicePage() {
  const servicesNames = services.map((service) => service.slug);
  let query = useQuery();
  let serviceName = query.get("name");
  const validRequestedServiceName = servicesNames.includes(serviceName);
  const service = services.find((service) => service.slug === serviceName);

  return (
    <>
      {!validRequestedServiceName ? (
        <Redirect to="/404" />
      ) : (
        <Layout title="service">
          <ContentLayout>
            <ServiceView service={service} />
          </ContentLayout>
        </Layout>
      )}
    </>
  );
}

export default ServicePage;
