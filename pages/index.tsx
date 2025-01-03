import Layout from '../components/Layout'
import {
  Hero,
  About,
  Knowledges,
  Experience,
  Services,
  Projects,
  Contact
} from '../components/sections/index'
import Spacer from '../components/Spacer'

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
  )
}

export default Home
