import About from '@/components/Home/About';
import Hero from '@/components/Home/Hero';
import Prepare from '@/components/Home/Prepare';
import Projects from '@/components/Home/Projects';
import Reviews from '@/components/Home/Reviews';
import Services from '@/components/Home/Services';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Services/>
			<Projects/>
			<Reviews/>
			<Prepare/>
		</>
	);
}
