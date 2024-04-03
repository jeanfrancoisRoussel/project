import React from 'react'
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from '@nextui-org/react'

import UserDropdown from './userDropdown'

const NavbarComponent = () => (
  <Navbar>
    <NavbarBrand>
      <p className='font-bold text-inherit'>MAURITIUS PROJECT</p>
    </NavbarBrand>
    <NavbarContent className='gap-4 sm:flex' justify='center'>
      <NavbarItem>
        <Link color='foreground' href='/'>
          Car
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href='/' aria-current='page'>
          Boat
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color='foreground' href='/'>
          Food
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color='foreground' href='/'>
          Visit
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify='end'>
      <NavbarItem>
        <UserDropdown />
      </NavbarItem>
    </NavbarContent>
  </Navbar>
)

export default NavbarComponent
