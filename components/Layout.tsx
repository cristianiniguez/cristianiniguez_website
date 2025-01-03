import Head from 'next/head'
import { useIntl } from 'react-intl'

import Header from './Header'
import Footer from './Footer'

import styles from '../styles/components/Layout.module.scss'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { messages } = useIntl()

  return (
    <>
      <Head>
        <link href='favicon.svg' rel='shortcut icon' type='image/svg' />
        <title>{messages['head.title']}</title>
        <meta content={messages['head.description'] as string} name='description' />
        <meta content='width=device-width, initial-scale=1.0' name='viewport' />
      </Head>
      <div className={styles.layout}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
