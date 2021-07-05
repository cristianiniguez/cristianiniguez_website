import { Formik, Field, Form } from 'formik';
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaTelegramPlane,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import axios from 'axios';
import classNames from 'classnames';

import styles from '../../styles/components/sections/Contact.module.scss';

const contacts = {
  links: [
    {
      Icon: FaWhatsapp,
      href: 'https://api.whatsapp.com/send?phone=+59179890908',
    },
    {
      Icon: FaFacebookMessenger,
      href: 'http://m.me/cristian.iniguez.56884',
    },
    {
      Icon: FaTelegramPlane,
      href: 'https://t.me/cristianiniguez',
    },
    {
      Icon: FaEnvelope,
      href: 'mailto:iniguezcristian2312@gmail.com',
    },
  ],
  social: [
    {
      Icon: FaFacebook,
      href: 'https://www.facebook.com/cristian.iniguez.56884',
    },
    {
      Icon: FaGithub,
      href: 'https://github.com/cristianiniguez',
    },
    {
      Icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/cristian-iniguez',
    },
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
        <h2 className='section__title'>Contáctame</h2>
        <div className={styles.contact__grid}>
          <div className={styles.contact__form}>
            <Formik
              initialValues={{ name: '', email: '', message: '' }}
              onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
                setStatus(undefined);
                axios
                  .post('https://formspree.io/f/xzbydykd', values, {
                    headers: {
                      Accept: 'application/json',
                    },
                  })
                  .then((response) => {
                    console.log(response);
                    resetForm();
                    setStatus('success');
                  })
                  .catch(() => {
                    setStatus('error');
                  })
                  .finally(() => {
                    setSubmitting(false);
                  });
              }}
            >
              {({ values, status, handleChange, isSubmitting }) => (
                <Form>
                  <Field name='name' type='text' placeholder='Tu nombre' required />
                  <Field name='email' type='email' placeholder='Tu correo' required />
                  <textarea
                    name='message'
                    placeholder='Tu mensaje'
                    value={values.message}
                    onChange={handleChange}
                    required
                  />
                  <button type='submit' disabled={isSubmitting}>
                    Enviar
                  </button>
                  {status && (
                    <p
                      className={classNames(
                        styles.contact__status,
                        styles[`contact__status--${status}`],
                      )}
                    >
                      {status === 'success' && 'Tu mensaje se envió satisfactoriamente'}
                      {status === 'error' && 'Ha ocurrido un error'}
                    </p>
                  )}
                </Form>
              )}
            </Formik>
          </div>
          <div className={styles.contact__links}>
            <p>
              Si tienes un negocio o quieres establecer tu propia marca no dudes en contactarme.
            </p>
            <div className={styles.contact__icons}>
              {contacts.links.map((l, i) => (
                <ContactLink key={i} {...l} />
              ))}
            </div>
            <p>También puedes visitar mis redes sociales</p>
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
