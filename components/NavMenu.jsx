import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { FaBars } from 'react-icons/fa';
import classNames from 'classnames';

import styles from '../styles/components/NavMenu.module.scss';

const items = [
  { label: 'header.link.home', href: '#' },
  { label: 'header.link.about', href: '#about' },
  { label: 'header.link.services', href: '#services' },
  { label: 'header.link.projects', href: '#projects' },
  { label: 'header.link.contact', href: '#contact' },
];

const NavMenu = () => {
  const [shown, setShown] = useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => setShown(!shown)}>
        <FaBars />
      </button>

      <ul
        id='nav-menu'
        className={classNames('reseted', styles.menu, { [styles['menu--shown']]: shown })}
      >
        {items.map(({ label, href }, i) => (
          <li key={i} onClick={() => setShown(false)}>
            <a href={href}>
              <FormattedMessage id={label} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
