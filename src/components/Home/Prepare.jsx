import Link from 'next/link';
import { Button } from '../ui/button';

function Prepare() {
	return (
		<div className='mb-16'>
			<div className='container text-center'>
				<h2 className='font-bold text-3xl mb-8'>
					Prepared to turn your ideas into <br />
					reality? I'm here to help
				</h2>
				<Link href={'/contact'}>
					<Button>Contact me</Button>
				</Link>
			</div>
		</div>
	);
}

export default Prepare;
