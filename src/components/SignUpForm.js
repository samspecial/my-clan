import React, { useState } from 'react';
import { useForm } from './useForm';
import { Button, Form } from './loginStyle';
import { useHistory } from 'react-router-dom';
import { authSignUp } from '../actions/authActions'

import '../App.css'
import '../loader.css'

const SignUpForm = () => {
  const [values, handleChange] = useForm({ email: "", password: "", firstName: "", lastName: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('')
  const history = useHistory()
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    setIsSubmitting(true)
    setMessage('')
    const { firstName, lastName, email, password } = values

    if (firstName && lastName && email && password) {
      authSignUp(firstName, lastName, email, password)
    } else {
      setLoading(false)
    }
  }

  return loading ? <div className='loader'></div> : (
    <Form onSubmit={(event) => handleSubmit(event)} method='POST'>
      <label htmlFor='firstName'>
        <input id='firstName'
          type='text'
          name='firstName'
          value={values.firstName}
          onChange={handleChange} required
          placeholder='First Name' />
      </label>
      <label htmlFor='lastName'>
        <input id='lastName'
          type='text'
          name='lastName'
          value={values.lastName}
          onChange={handleChange} required
          placeholder='Last Name' />
      </label>
      <label htmlFor='userEmail'>
        <input id='userEmail'
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange} required
          placeholder='Email Address' />
      </label>
      <label htmlFor='userPassword'>
        <input id='userPassword'
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange} required
          placeholder='Password' />
      </label>

      <Button type="submit">Sign up</Button>
    </Form>
  )
}
export default SignUpForm;