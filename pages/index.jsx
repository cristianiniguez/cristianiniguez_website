import Layout from '../components/Layout.jsx';
import { Hero, About, Knowledges, Services, Projects, Contact } from '../components/sections';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Knowledges />
      <Services />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
