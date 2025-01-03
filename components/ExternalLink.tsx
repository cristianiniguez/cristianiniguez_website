import clsx from 'clsx'
import { FaExternalLinkAlt } from 'react-icons/fa'

import styles from '../styles/components/ExternalLink.module.scss'

type ExternalLinkProps = {
  children: React.ReactNode,
  href: string,
  className?: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ children, href, className }) => {
  return (
    <div className={clsx(className, styles['external-link'])}>
      <a href={href} target='_blank' rel='noreferrer'>
        {children} <FaExternalLinkAlt />
      </a>
    </div>
  )
}

export default ExternalLink
