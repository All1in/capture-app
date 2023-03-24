import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const linkList = [
    {href: '/', element: 'Home'},
    {href: '/#gallery', element: 'Gallery'},
    {href: '/work', element: 'Work'},
    {href: '/contact', element: 'Contact'}
]

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const opWithNav = () => setNav(!nav)

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#ffffff')
                setTextColor('#000000')
            } else {
                setColor('transparent')
                setTextColor('#ffffff')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, []);

    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
        >
           <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
               <Link href='/'>
                   <h1
                       style={{ color: `${textColor}` }}
                       className='font-bold text-4xl'
                   >
                       Photo app
                   </h1>
               </Link>
               <ul
                   style={{ color: `${textColor}` }}
                   className='hidden sm:flex'
               >
                   {linkList.map((link) => (
                       <li
                           style={{ color: `${textColor}` }}
                           className='p-4'
                       >
                           <Link href={link.href}> {link.element} </Link>
                       </li>
                   ))}
               </ul>

            <div
                onClick={opWithNav}
                className='block sm:hidden z-10'
            >
                {nav ? <AiOutlineClose style={{ color: `${textColor}` }} size={20} /> : <AiOutlineMenu style={{ color: `${textColor}` }} size={20} />}
            </div>
            {/*Mobile version*/}
            <div
                className={
                    nav
                        ?
                        'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                        :
                        'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                     }
            >
                <Link href='/'>
                    <h1>Photo app</h1>
                </Link>
                <ul>
                    {linkList.map((link) => (
                        <li onClick={opWithNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href={link.href}> {link.element} </Link>
                        </li>
                    ))}
                </ul>
            </div>
           </div>
        </div>
    );
};

export default Navbar;
