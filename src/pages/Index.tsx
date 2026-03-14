import { Layout } from "@/components/layout";
import { Hero, ServicesOverview, Benefits, CTA } from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesOverview />
      <Benefits />
      <CTA />
    </Layout>
  );
};

export default Index;
