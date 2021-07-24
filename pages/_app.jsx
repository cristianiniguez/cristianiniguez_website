import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import * as messages from '../i18n';
import '../styles/index.scss';

const App = ({ Component, pageProps }) => {
  const { locale, defaultLocale } = useRouter();

  return (
    <IntlProvider
      messages={messages[locale] || messages[defaultLocale]}
      {...{ locale, defaultLocale }}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
};

export default App;
