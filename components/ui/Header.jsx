'use client'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from './button'
import { useStoreUser } from '../../hooks/useStoreUser'
import { BarLoader } from 'react-spinners'
// import { Authenticated, Unauthenticated } from 'convex/react'
const Header = () => {
  const path = usePathname()
  const { isLoading } = useStoreUser()
  if (path.includes('/editor')) {
    return null
  }
  return (
    <div className='fixed top-6 left-1/2  transform -translate-x-1/2 z-50 text-nowrap'>
      <div className='backdrop-blur-md rounded-full bg-white/10 border border-white/20 px-8 py-1 flex justify-between items-center gap-8'>
        <Link href='/' className='mr-10 md:mr-20'>
          <Image
            className='min-w-20  object-cover'
            alt='Pixora Ai logo'
            src='/logo1.png'
            width={96}
            height={12}
          />
        </Link>
        {path && (
          <div className='hidden md:flex space-x-6'>
            <Link
              href='#features'
              className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'
            >
              Features
            </Link>
            <Link
              href='#pricing'
              className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'
            >
              Pricing
            </Link>
            <Link
              href='#contact'
              className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'
            >
              Contact
            </Link>
          </div>
        )}
        <div className='flex items-center gap-3 ml-10 md:ml-20'>
          <SignedOut>
            <SignInButton>
              <Button variant='glass'>Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <Button variant='primary'>Get Started</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-8 h-8',
                },
              }}
            />
          </SignedIn>
        </div>
        {isLoading && (
          <div className='fixed bottom-0 left-0 w-full z-40 flex justify-center'>
            <BarLoader width='94%' color='#06b6d4' />
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
