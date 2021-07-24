import { FormattedMessage } from 'react-intl';
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaTelegramPlane,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import classNames from 'classnames';

import ContactForm from '../ContactForm';
import styles from '../../styles/components/sections/Contact.module.scss';

const contacts = {
  links: [
    { Icon: FaWhatsapp, href: 'https://api.whatsapp.com/send?phone=+59179890908' },
    { Icon: FaFacebookMessenger, href: 'http://m.me/cristian.iniguez.56884' },
    { Icon: FaTelegramPlane, href: 'https://t.me/cristianiniguez' },
    { Icon: FaEnvelope, href: 'mailto:iniguezcristian2312@gmail.com' },
  ],
  social: [
    { Icon: FaFacebook, href: 'https://www.facebook.com/cristian.iniguez.56884' },
    { Icon: FaGithub, href: 'https://github.com/cristianiniguez' },
    { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/cristian-iniguez' },
  ],
};

const ContactLink = ({ Icon, href }) => (
  <a href={href} target='_blank' rel='noreferrer'>
    <Icon />
  </a>
);

const Contact = () => {
  return (
    <section id='contact' className={classNames(styles.contact, 'section section--light')}>
      <div className='container'>
        <h2 className='section__title'>
          <FormattedMessage id='contact.title' />
        </h2>
        <div className={styles.contact__grid}>
          <ContactForm />
          <div className={styles.contact__links}>
            <p>
              <FormattedMessage id='contact.message.chat' />
            </p>
            <div className={styles.contact__icons}>
              {contacts.links.map((l, i) => (
                <ContactLink key={i} {...l} />
              ))}
            </div>
            <p>
              <FormattedMessage id='contact.message.social' />
            </p>
            <div className={styles.contact__icons}>
              {contacts.social.map((l, i) => (
                <ContactLink key={i} {...l} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
