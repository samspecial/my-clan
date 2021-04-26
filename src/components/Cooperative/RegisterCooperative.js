import React, { useState } from 'react';
import { useForm } from '../useForm';
import { useDispatch } from 'react-redux';
import { createCooperative } from '../../actions/cooperativeAction'
import { Form, Button } from '../loginStyle';
import AuthService from '../../services/auth_services'

const RegisterCooperative = () => {
  const dispatch = useDispatch()
  const [values, handleChange] = useForm({
    coopName: '',
    email: '',
    agrementPath: '',
    slot: '',
    userId: ''
  })
  const handleSubmit = (event) => {
    event.preventDefault()
    const { coopName, email, agrementPath, slot, userId } = values;
    const cooperativeDetails = { coopName, email, agrementPath, slot, userId }
    if (cooperativeDetails) {
      dispatch(createCooperative(cooperativeDetails));
      history.push('/dashboard/cooperative/transaction')
    } else {
      console.log('This is wrong')
    }
  }
  return (
    <div>
      <Form onSubmit={handleSubmit} encType='multipart/form-data'>
        <label htmlFor='coopName'>
          <input id='coopName'
            type='text'
            name='coopName'
            value={values.coopName}
            onChange={handleChange} required
            placeholder='First Name' />
        </label>
        <label htmlFor='ownerEmail'>
          <input id='ownerEmail'
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange} required
            placeholder='Email Address' />
        </label>
        <label htmlFor='agrementDoc'>
          <input id='agrementDoc'
            type='file'
            name='agrementDoc'
            value={values.agrementPath}
            onChange={handleChange}
            placeholder='Agrement Document' />
        </label>
        <label htmlFor='slot'>
          <input id='slot'
            type='number'
            name='slot'
            value={values.slot}
            onChange={handleChange} required
            placeholder='Slot' />
        </label>
        <label htmlFor='userId'>
          <input id='userId'
            type='text'
            name='userId'
            value={values.userId}
            onChange={handleChange} required
            placeholder='User ID' />
        </label>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default RegisterCooperative;