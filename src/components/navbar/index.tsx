import React from 'react'
import MaxWidthWrapper from '@/components/globals/MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Navbar = () => {
    const user = null
    const isAdmin = null

  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
            <Link href='/' className='flex z-40 font-bold'>
                GlowUp<span className='text-primary'>Tresse</span>
            </Link>

            <div className='h-full flex items-center space-x-4'>
                {user ? (
                    <>
                        <Link 
                            href={'#'}
                            className={buttonVariants({
                                size: 'sm',
                                variant: 'ghost'
                            })}
                        >
                            Sign Out
                        </Link>
                        {isAdmin ? (
                            <Link
                                href={'#'}
                                className={buttonVariants({
                                    size: 'sm',
                                    variant: 'ghost'
                                })}
                            >
                                Dashboard ✨
                            </Link>
                        ): null}
                        <Link
                            href='#'
                            className={buttonVariants({
                                size: 'sm',
                                className: 'hidden sm:flex items-center gap-1'
                            })}>
                            Make appointment
                            <ArrowRight className="ml-1.5 h-5 w-5"/>
                        </Link>
                    </>
                ): (
                    <>
                        <Link
                            href='#'
                            className={buttonVariants({
                                size: 'sm',
                                variant: 'ghost'
                            })}
                        >
                            Sign Up
                        </Link>

                        <Link
                            href={'/api/auth/login'}
                            className={buttonVariants({
                                size: 'sm',
                                variant: 'ghost'
                            })}
                        >
                            Login
                        </Link>

                        <div className='h-8 w-px bg-zinc-200 hidden sm:block' />

                        <Link
                            href='#'
                            className={buttonVariants({
                                size: 'sm',
                                className: 'hidden sm:flex items-center gap-1'
                            })}>
                            Make appointment
                            <ArrowRight className="ml-1.5 h-5 w-5"/>
                        </Link>
                    </>
                )}
            </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar