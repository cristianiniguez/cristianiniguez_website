import Layout from '../components/Layout.jsx';
import {
  Hero,
  About,
  Knowledges,
  Experience,
  Services,
  Projects,
  Contact,
} from '../components/sections';
import Spacer from '../components/Spacer.jsx';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Knowledges />
      <Experience />
      <Spacer />
      <Services />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
