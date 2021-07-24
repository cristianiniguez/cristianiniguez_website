import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import styles from '../styles/components/NavLang.module.scss';

const NavLang = () => {
  const [shown, setShown] = useState(false);
  const { locale, locales } = useRouter();

  return (
    <>
      <button className={styles.btn} onClick={() => setShown(!shown)}>
        {locale.toUpperCase()}
      </button>
      <ul className={classNames('reseted', styles.menu, { [styles['menu--shown']]: shown })}>
        {locales.map((l) => (
          <li key={l} onClick={() => setShown(false)}>
            <Link href='/' locale={l}>
              <a>{l}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavLang;
