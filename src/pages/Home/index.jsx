import Layout from "../../components/Layout";
import HeaderSection from "./section/HeaderSection";
import EducationSection from "./section/EducationSection";
import ContactUs from "./section/ContactUs";

const HomePage = () => {
  return (
    <Layout>
      <HeaderSection />
      <EducationSection />
      <ContactUs />
    </Layout>
  );
};

export default HomePage;
