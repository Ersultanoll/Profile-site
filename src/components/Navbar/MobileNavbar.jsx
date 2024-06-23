'use client';

import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import Social from '../social';

function MobileNavbar() {
	return (
		<Sheet>
			<SheetTrigger>
				<MenuIcon size={33} />
			</SheetTrigger>
			<SheetContent>
				<div className='h-full'>
					<div className='py-8 h-full flex flex-col justify-between items-center'>
						<div>
							<Image src={'logo.svg'} width={48} height={48} alt='#' />
						</div>
						<div className='flex flex-col gap-3'>
							<Link href={'/'}>Home</Link>
							<Link href={'/myproject'}>My Project</Link>
							<Link href={'/contact'}>Contact</Link>
						</div>
            <Social/>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}

export default MobileNavbar;
