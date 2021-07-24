import Head from 'next/head';
import { useIntl } from 'react-intl';

import Header from './Header';
import Footer from './Footer';

import styles from '../styles/components/Layout.module.scss';

const Layout = ({ children }) => {
  const { messages } = useIntl();

  return (
    <>
      <Head>
        <link rel='shortcut icon' href='favicon.svg' type='image/svg' />
        <title>{messages['head.title']}</title>
        <meta name='description' content={messages['head.description']} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
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
