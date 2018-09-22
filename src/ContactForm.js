import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => value ? undefined : 'Required!';
const validPhone = value => value.replace(/\D/g, '').length === 10 ? undefined : 'Thats not a phone number!';

const renderField = ({ input, placeholder, label,  meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type='text' />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)

const ContactForm = ({ handleSubmit }) => (
  <form onSubmit = { handleSubmit }>
    <div>
      <Field
        name='name'
        component={renderField} label='Full Name' placeholder='First and Last (eg. "John Smith")'
        type='text'
        validate={[ required ]}
      />
    </div>
    <div>
      <Field
        name='email'
        component={renderField} label='Email Address' placeholder='john@smith.com'
        type='text'
        validate={[ required ]}
      />
    </div>
    <div>
      <Field
        name='phone'
          component={renderField} label='Phone number' placeholder='2028765309'
          type='text'
          validate={[ required, validPhone ]}
        />
    </div>
    <div>
      <button type='submit' onClick={ handleSubmit }>Submit</button>
    </div>
  </form>
)

export default reduxForm({
  form: 'contactform',
  fields: [
    'name',
    'email',
    'phone',
  ],
})(ContactForm);

