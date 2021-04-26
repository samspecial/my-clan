import React, { useState } from 'react';
import { useForm } from './useForm';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { useHistory } from 'react-router-dom'
import { Button, Form, IconLink } from './loginStyle';
import AuthService from '../services/auth_services'
import '../App.css'
import '../loader.css'

const LoginForm = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    setIsSubmitting(true)
    setMessage('')
    const { email, password } = values
    if (email && password) {
      AuthService.login(email, password).then(
        () => {
          history.push("/dashboard");
          window.location.reload();
        },
        (error) => {
          const resMessage = (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false)
    }
  }

  return loading ? <div className='loader'></div> : (
    <Form onSubmit={(event) => handleSubmit(event)} method='POST'>
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
      <Button type="submit">Login</Button>
      <p className="login-alt">OR</p>
      <span id="icon-container"><IconLink id="google" href="https://nolink.com"><FaGoogle /></IconLink><IconLink id="facebook" href="https://loginwithfacebook.com"><FaFacebookF /></IconLink><IconLink id="twitter" href="https://loginwithtwitter.com"><FaTwitter /></IconLink></span>
    </Form >
    // #0000EE
  )
}
export default LoginForm;