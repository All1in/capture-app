import React from 'react';
import Link from "next/link";

const linkList = [
    {href: '/', element: 'Home'},
    {href: '/#gallery', element: 'Gallery'},
    {href: '/portfolio', element: 'Home'},
    {href: '/contact', element: 'Contact'}
]

const Navbar = () => {
    return (
        <div>
           <div>
               <Link href='/'>
                   <h1>Photo app</h1>
               </Link>
               <ul>
                   {linkList.map((link) => (
                       <li>
                           <Link href={link.href}> {link.element} </Link>
                       </li>
                   ))}
               </ul>
           </div>
        </div>
    );
};

export default Navbar;
