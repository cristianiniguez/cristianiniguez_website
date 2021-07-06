import { Formik, Form, Field } from 'formik';
import axios from 'axios';

import styles from '../styles/components/ContactForm.module.scss';

const ContactForm = () => {
  const initialValues = { name: '', email: '', message: '' };

  const onSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus(undefined);
    try {
      const response = await axios.post('https://formspree.io/f/xzbydykd', values, {
        headers: { Accept: 'application/json' },
      });
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
            <Field name='name' type='text' placeholder='Tu nombre' required />
            <Field name='email' type='email' placeholder='Tu correo' required />
            <Field name='message'>
              {({ field }) => <textarea {...field} placeholder='Tu mensaje' required />}
            </Field>
            <button type='submit' disabled={isSubmitting}>
              Enviar
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
