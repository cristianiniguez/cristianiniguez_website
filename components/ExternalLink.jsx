import classNames from 'classnames';
import { FaExternalLinkAlt } from 'react-icons/fa';

import styles from '../styles/components/ExternalLink.module.scss';

const ExternalLink = ({ children, href, className }) => {
  return (
    <div className={classNames(className, styles['external-link'])}>
      <a href={href} target='_blank' rel='noreferrer'>
        {children} <FaExternalLinkAlt />
      </a>
    </div>
  );
};

export default ExternalLink;
