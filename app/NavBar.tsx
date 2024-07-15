import Link from 'next/link'
import React from 'react'
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
    const links = [
        { label: "Dashboard", href: "/" },
        { label: "Issues", href: "/issues" },
      ];
    
  return (
    <nav className='flex space-x-8 border-b mb-8 px-5 h-14 items-center'>
        <Link href='/'><AiFillBug /></Link>
        <ul className='flex x-8 mb-10 space-x-10'>
            {links.map(link => 
                <Link 
                key={link.href}
                className='text-zinc-900 hover:text-gray-400  transition-colors'
                href={link.href}>{link.label}</Link>
            )}
        </ul>
    </nav>
  )
}

export default NavBar
