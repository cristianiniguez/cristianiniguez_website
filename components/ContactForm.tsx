import { useIntl, FormattedMessage } from 'react-intl'
import { Formik, Form, Field, FormikConfig } from 'formik'
import axios from 'axios'

import styles from '../styles/components/ContactForm.module.scss'
import clsx from 'clsx'

type ContactFormValues = {
  name: string
  email: string
  message: string
}

type ContactFormFormikConfig = FormikConfig<ContactFormValues>

const sendMail = (values: ContactFormValues) => {
  return axios.post('https://formspree.io/f/xzbydykd', values, {
    headers: { Accept: 'application/json' }
  })
}

const ContactForm = () => {
  const { messages } = useIntl()

  const initialValues = { name: '', email: '', message: '' }

  const onSubmit: ContactFormFormikConfig['onSubmit'] = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    setStatus(undefined)
    try {
      const response = await sendMail(values)
      console.info(response)
      resetForm()
      setStatus('success')
    } catch (error) {
      console.error(error)
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className={styles['contact-form']}>
      <Formik {...{ initialValues, onSubmit }}>
        {({ status, isSubmitting }) => (
          <Form>
            <Field
              name='name'
              placeholder={messages['contact.form.name']}
              required
              type='text'
            />
            <Field
              name='email'
              placeholder={messages['contact.form.email']}
              required
              type='email'
            />
            <Field
              as='textarea'
              name='message'
              placeholder={messages['contact.form.message']}
              required
            />
            <button disabled={isSubmitting} type='submit'>
              <FormattedMessage id='contact.form.button' />
            </button>
            {status && (
              <p
                className={clsx(
                  styles['contact-form__status'],
                  styles[`contact-form__status--${status}`]
                )}
              >
                {status === 'success' &&
                  'Tu mensaje se envió satisfactoriamente'}
                {status === 'error' && 'Ha ocurrido un error'}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
