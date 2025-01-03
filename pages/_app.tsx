import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

import * as messages from '../i18n'
import '../styles/index.scss'

const i18nMessages: Record<string, Record<string, string>> = messages

const App = ({ Component, pageProps }: AppProps) => {
  const { locale = '', defaultLocale = '' } = useRouter()

  return (
    <IntlProvider
      messages={i18nMessages[locale] || i18nMessages[defaultLocale]}
      {...{ locale, defaultLocale }}
    >
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default App
