import { Facebook, Github, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

const socials = [
	<Youtube />,
	<Linkedin />,
	<Github />,
	<Facebook />,
	<Instagram />,
];

function Social({classStyle=''}) {
	return (
		<div className='flex items-center gap-3'>
			{socials.map((item, index) => (
				<Link className={`hover:text-primary ${classStyle}`} href={'/'} key={index}>
					{item}
				</Link>
			))}
		</div>
	);
}

export default Social;
