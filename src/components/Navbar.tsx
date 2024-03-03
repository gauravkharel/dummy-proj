'use client'

import {LoginContext} from '@/context/LoginContext'
import {   LucideSmile } from 'lucide-react'
import Link from 'next/link'
import { useContext } from 'react'
import { Button } from './ui/Button'

interface NavbarProps {

}

const Navbar = () => {
  const {user, isLoggedIn, logout} = useContext(LoginContext)
  return (
      <div className="fixed top-0 inset-x-0 h-fit bg-white border-b border-zinc-300 z-[10] py-2">
        <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
          <Link href={'/'} ><LucideSmile /></Link>
          <Link href={'/product'}>Browse all products</Link>
          <Link href={'/product/category'}>Browse by categories</Link>
          {isLoggedIn ? (
            <div>Hi, {(user.email)}
                <Button className='ml-2' onClick={logout}>Logout</Button>
            </div>
          ) : (
            <Link href={'/login'}>Login here</Link>
          )
          }
        </div>
      </div>
  )
}

export default Navbar