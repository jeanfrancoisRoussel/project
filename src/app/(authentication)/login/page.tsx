/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */

'use client'

import { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'

import { auth } from '@/app/firebase/config'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
  const router = useRouter()

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password)
      console.log({ res })
      sessionStorage.setItem('user', 'true')
      setEmail('')
      setPassword('')
      router.push('/')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-900'>
      <div className='w-96 rounded-lg bg-gray-800 p-10 shadow-xl'>
        <h1 className='mb-5 text-2xl text-black'>Sign In</h1>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          className='mb-4 w-full rounded bg-gray-700 p-3 text-black placeholder-gray-500 outline-none'
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          className='mb-4 w-full rounded bg-gray-700 p-3 text-black placeholder-gray-500 outline-none'
        />
        <button
          onClick={handleSignIn}
          className='w-full rounded bg-indigo-600 p-3 text-black hover:bg-indigo-500'
        >
          Sign In
        </button>
      </div>
    </div>
  )
}

export default SignIn
