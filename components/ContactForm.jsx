import { useIntl, FormattedMessage } from 'react-intl';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

import styles from '../styles/components/ContactForm.module.scss';

const sendMail = ({ values }) => {
  return axios.post('https://formspree.io/f/xzbydykd', values, {
    headers: { Accept: 'application/json' },
  });
};

const ContactForm = () => {
  const { messages } = useIntl();

  const initialValues = { name: '', email: '', message: '' };

  const onSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus(undefined);
    try {
      const response = await sendMail(values);
      console.log(response);
      resetForm();
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles['contact-form']}>
      <Formik {...{ initialValues, onSubmit }}>
        {({ status, isSubmitting }) => (
          <Form>
            <Field name='name' type='text' placeholder={messages['contact.form.name']} required />
            <Field
              name='email'
              type='email'
              placeholder={messages['contact.form.email']}
              required
            />
            <Field name='message'>
              {({ field }) => (
                <textarea {...field} placeholder={messages['contact.form.message']} required />
              )}
            </Field>
            <button type='submit' disabled={isSubmitting}>
              <FormattedMessage id='contact.form.button' />
            </button>
            {status && (
              <p
                className={classNames(
                  styles['contact-form__status'],
                  styles[`contact-form__status--${status}`],
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
  );
};

export default ContactForm;
