import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Flag from 'react-world-flags';
import classNames from 'classnames';

import styles from '../styles/components/NavLang.module.scss';

const flagCodes = {
  es: 'ESP',
  en: 'USA',
};

const NavLang = () => {
  const [shown, setShown] = useState(false);
  const { locale, locales } = useRouter();

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => setShown(!shown)}>
        <Flag code={flagCodes[locale]} />
      </button>
      <ul className={classNames('reseted', styles.menu, { [styles['menu--shown']]: shown })}>
        {locales.map((l) => (
          <li key={l} onClick={() => setShown(false)}>
            <Link href='/' locale={l}>
              <a>
                <Flag code={flagCodes[l]} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLang;
