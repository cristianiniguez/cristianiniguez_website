import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import classNames from 'classnames';

import styles from '../styles/components/NavMenu.module.scss';

const items = [
  { label: 'Inicio', href: '#' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

const NavMenu = () => {
  const [shown, setShown] = useState(false);

  return (
    <>
      <ul
        id='nav-menu'
        className={classNames('reseted', styles.menu, { [styles['menu--shown']]: shown })}
      >
        {items.map(({ label, href }, i) => (
          <li key={i} onClick={() => setShown(false)}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <button className={styles.btn} onClick={() => setShown(!shown)}>
        <FaBars />
      </button>
    </>
  );
};

export default NavMenu;
