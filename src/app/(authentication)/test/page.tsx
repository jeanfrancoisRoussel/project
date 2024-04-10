/* eslint-disable max-len */
'use client'

/* eslint-disable jsx-a11y/label-has-associated-control */
// components/RegisterForm.js

// components/RegisterForm.js

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { auth } from '@/app/firebase/config'

const RegisterForm = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        formData.email,
        formData.password
      )
      console.log(userCredential)
      // Redirect user to another page upon successful registration
      router.push('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-900'>
      <div className='w-full max-w-md rounded-lg bg-gray-800 p-8 shadow-lg'>
        <h2 className='mb-4 text-center text-3xl font-extrabold text-white'>
          Create an account
        </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email Address'
              className='w-full appearance-none rounded-md bg-gray-700 px-4 py-3 leading-tight text-white focus:bg-gray-600 focus:outline-none'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              className='w-full appearance-none rounded-md bg-gray-700 px-4 py-3 leading-tight text-white focus:bg-gray-600 focus:outline-none'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          <div>
            <button
              type='submit'
              className='w-full rounded-md bg-indigo-600 px-4 py-3 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
