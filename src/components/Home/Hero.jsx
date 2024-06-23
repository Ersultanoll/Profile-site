import Link from 'next/link';
import { Button } from '../ui/button';
import { Send } from 'lucide-react';
import Social from '../Social';
import Image from 'next/image';
import Badge from './Badge';
import { FaSuitcase } from "react-icons/fa";

function Hero() {
	return (
		<div className='bg-hero bg-bottom bg-no-repeat min-h-[84vh]'>
			<div className='container'>
				<div className='xl:py-24 py-12 flex justify-between'>
					<div className='max-w-[600px] text-center xl:text-left max-xl:mx-auto w-full'>
						<h4 className='text-lg uppercase font-bold text-primary'>
							Web developer
						</h4>
						<h1 className='h1'>Hello, my name is Ryan Davis</h1>
						<p className='subtitle max-w-[490px] max-xl:mx-auto'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Ipsam veritatis incidunt adipisci! Earum, natus? Sequi ipsa
							facere, id laboriosam ut pariatur officiis exercitationem
							optio sit minus aliquam delectus fugiat et?
						</p>
						<div className='flex mx-auto xl:mx-0 w-fit flex-col md:flex-row gap-3'>
							<Link href={'/contact'}>
								<Button className='gap-x-2 items-center'>
									Contact me <Send size={18} />
								</Button>
							</Link>
							<Link href={'/contact'}>
								<Button
									variant='secondary'
									className='gap-x-2 items-center'
								>
									Contact me <Send size={18} />
								</Button>
							</Link>
						</div>
						<div className='max-xl:flex justify-center mt-12'>
							<Social />
						</div>
					</div>
					<div className='relative hidden xl:flex'>
						<div className='absolute top-0 right-0'>
							<div className='w-[500px] h-[500px] bg-hero-shape-light bg-no-repeat'>
								<div className='w-[510px] bg-hero-shape  bg-no-repeat relative h-[482px]'>
									<Image
										src={'/hero/developer.png'}
										alt='#'
										width={800}
										height={800}
									/>
									<Badge
										classStyle={
											'absolute top-0 top-[24%] -left-[5rem]'
										}
										endCount={4}
										Icon={<FaSuitcase size={30} />}
										badgeText={'Years of Experience'}
									/>
									<Badge
										classStyle={
											'absolute top-0 top-[80%] -left-[1rem]'
										}
										endCount={5}
										Icon={<FaSuitcase size={30} />}
										badgeText={'Finished Projects'}
									/>
									<Badge
										classStyle={'absolute top-0 top-[55%] -right-8'}
										endCount={9}
										endCountText={'k'}
										Icon={<FaSuitcase size={30} />}
										badgeText={'Happy Clients'}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
