import Layout from '../components/Layout.jsx';
import { Hero, About, Knowledges, Experience, Projects, Contact } from '../components/sections';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Knowledges />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
