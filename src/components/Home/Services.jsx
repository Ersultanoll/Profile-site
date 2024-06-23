import { NotebookIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

function Services() {
	return (
		<div className='container'>
			<div className='py-32'>
				<h2 className='section-title mb-16'>My Services</h2>
				<div className='grid lg:grid-cols-3 sm:grid-cols-2  gap-8 text-center gap-y-16'>
					<Card className='flex justify-center relative items-center'>
						<CardHeader className='absolute text-primary  -top-[55px] bg-white'>
							<NotebookIcon size={60} />
						</CardHeader>
						<CardContent>
							<CardTitle>Web Design</CardTitle>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Eveniet corporis repudiandae eius aperiam pariatur
							doloribus
						</CardContent>
					</Card>
					<Card className='flex justify-center relative items-center'>
						<CardHeader className='absolute text-primary  -top-[55px] bg-white'>
							<NotebookIcon size={60} />
						</CardHeader>
						<CardContent>
							<CardTitle>Web Design</CardTitle>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Eveniet corporis repudiandae eius aperiam pariatur
							doloribus
						</CardContent>
					</Card>
					<Card className='flex justify-center relative items-center'>
						<CardHeader className='absolute text-primary  -top-[55px] bg-white'>
							<NotebookIcon size={60} />
						</CardHeader>
						<CardContent>
							<CardTitle>Web Design</CardTitle>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Eveniet corporis repudiandae eius aperiam pariatur
							doloribus
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default Services;
