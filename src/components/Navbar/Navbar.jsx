'use client'

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import MobileNavbar from './MobileNavbar';

const link = [
	{
		path: '/',
		name: 'Home',
	},
	{
		path: '/myproject',
		name: 'My Project',
	},
	{
		path: '/contact',
		name: 'Contact',
	},
];

function Navbar() {

  const [navScroll, setNavScroll] = useState(false);

  useEffect(()=>{
    const pageScroll = ()=>{
      if(window.scrollY > 50){
        setNavScroll(true)
      }else{
        setNavScroll(false)
      }
    }

    window.addEventListener('scroll',pageScroll);
    return () => window.removeEventListener('scroll', pageScroll);
  },[])

  const path = usePathname();

	return (
		<nav className={`${navScroll ? 'py-6 bg-white shadow-lg' : ''} transition-all sticky top-0 left-0 z-30`}>
			<div className='container'>
				<div className='flex justify-between items-center'>
					<div>
						<Image alt='#' src={'./logo.svg'} width={48} height={48} />
					</div>
					<div className='sm:flex gap-6 hidden'>
						{link.map((item, index) => (
							<Link
								key={index}
								className='hover:text-primary relative text-lg transition-all'
								href={item.path}
							>
								{item.name}

								{path === item.path ? (
									<motion.span
										transition={{
											type: 'tween',
										}}
                    initial={{
                    y:'100%'
                    }}

                    animate={{
                    y:'0%'}}
                    
										layoutId='underline'
										className='absolute top-[100%] w-full bg-primary h-[2px] left-0'
									></motion.span>
								) : (
									''
								)}
							</Link>
						))}
					</div>
					<div className='sm:hidden'>
					<MobileNavbar/>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
