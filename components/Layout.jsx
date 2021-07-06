import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

import styles from '../styles/components/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href='favicon.svg' type='image/svg' />
        <title>Cristian Iñiguez | Junior Web Developer</title>
      </Head>
      <div className={styles.layout}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
