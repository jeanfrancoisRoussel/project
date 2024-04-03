'use client'

import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User
} from '@nextui-org/react'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'

import { auth } from '@/app/firebase/config'

const UserDropdown = () => {
  const [user] = useAuthState(auth)
  const router = useRouter()
  
  return (
    <div className='flex items-center gap-4'>
      <Dropdown placement='bottom-start'>
        <DropdownTrigger>
          <User
            as='button'
            avatarProps={user ? {
              isBordered: true,
              src: 'https://media.licdn.com/dms/image/D4D35AQFXJ_JTK5BnxQ/profile-framedphoto-shrink_100_100/0/1711549487055?e=1712325600&v=beta&t=2uVck83SjtZ9WhjUKyRqCbMuHhqnK5L9VjObsvbPWZE'
            } : {
              isBordered: true,
              src: 'https://gravatar.com/avatar/00000000000000000000000000000000?d=https%3A%2F%2Fexample.com%2Fimages%2Favatar.jpg'
            }}
            className='transition-transform'
            description={user ? user?.email : "not logged"}
            name='Member'
          />
        </DropdownTrigger>
        <DropdownMenu aria-label='User Actions' variant='flat'>
          <DropdownItem key='profile' className='h-14 gap-2'>
            <p className='font-bold'>Signed in as</p>
            <p className='font-bold'>{user ? user?.email : "not logged"}</p>
          </DropdownItem>
          <DropdownItem key='settings'>My Settings</DropdownItem>
          <DropdownItem key='help_and_feedback'>Help & Feedback</DropdownItem>
          <DropdownItem
            key='logout'
            color='danger'
            onClick={() => {
              signOut(auth)
              sessionStorage.removeItem('user')
              if(user) {
                router.push("/")
              }
              router.push("/login")
            }}
          >
            {user ? "Logout" : "Login"}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default UserDropdown
