import Image from 'next/image'
import { useIntl, FormattedMessage } from 'react-intl'
import { FaCarSide } from 'react-icons/fa'
import clsx from 'clsx'

import styles from '../../styles/components/sections/Experience.module.scss'

const jobs = [
  {
    id: 'hexacorp',
    place: 'Hexacorp',
    icon: 'hexacorp.svg',
    from: new Date(2021, 0),
    to: new Date(2021, 7)
  },
  {
    id: 'oktana',
    place: 'Oktana',
    icon: 'oktana.png',
    from: new Date(2021, 10)
  }
]

type JobProps = {
  id: string
  place: string
  icon: string
  from: Date
  to?: Date
  index: number
}

const Job: React.FC<JobProps> = ({ id, place, icon, from, to, index }) => {
  const intl = useIntl()
  const left = (100 * (index + 1)) / (jobs.length + 1)

  return (
    <div className={styles.job} style={{ left: `${left}%` }}>
      <div className={styles.job__container}>
        <Image
          alt={intl.formatMessage(
            { id: 'experience.icon.alt' },
            { name: place }
          )}
          height={24}
          src={`/images/jobs/${icon}`}
          width={24}
        />
        <div className={styles.job__time}>
          <p>
            {from &&
              intl
                .formatDate(from, { year: 'numeric', month: 'long' })
                .toUpperCase()}{' '}
            -{' '}
            {to
              ? intl
                  .formatDate(to, { year: 'numeric', month: 'long' })
                  .toUpperCase()
              : (intl.messages['experience.today'] as string).toUpperCase()}
          </p>
        </div>
        <div className={styles.job__tooltip}>
          <div className={styles.job__info}>
            <h3>{place}</h3>
            <h4>
              <FormattedMessage id={`experience.${id}.title`} />
            </h4>
            <ul>
              {(intl.messages[`experience.${id}.activities`] as string)
                .split('|')
                .map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const ExperienceTimeline = () => {
  return (
    <div className={styles.experience__timeline}>
      <div className={styles.experience__pointer}>
        <FaCarSide />
      </div>
      {jobs.map((job, i) => (
        <Job {...job} index={i} key={i} />
      ))}
    </div>
  )
}

const Experience = () => {
  return (
    <section
      className={clsx(styles.experience, 'section section--light')}
      id='experience'
    >
      <div className='container'>
        <h2 className='section__title'>
          <FormattedMessage id='experience.title' />
        </h2>
        <ExperienceTimeline />
      </div>
    </section>
  )
}

export default Experience
