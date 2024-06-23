'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Button } from '../ui/button';
import Link from 'next/link';
import { Card, CardHeader } from '../ui/card';
import Image from 'next/image';
import { Badge } from '../ui/badge';

function Projects() {
	return (
		<div className='relative'>
			<div className='container mb-16'>
				<div className='max-w-[400px] mx-auto xl:mx-0 flex flex-col text-center xl:text-left  xl:h-[400px] justify-center items-center xl:items-start'>
					<h2 className='section-title xl:justify-start mb-4'>
						Latest Project
					</h2>
					<p className='mb-8 subtitle'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</p>
					<Link href={'/myproject'} className='mb-12'>
						<Button>All projects</Button>
					</Link>
				</div>

				<div className='xl:absolute xl:max-w-[1000px] right-0 top-0'>
					<Swiper
						pagination={{
							clickable: true,
						}}
						className='min-h-[490px]'
						modules={[Pagination]}
            slidesPerView={1}
						breakpoints={{
							640: { slidesPerView: 2 },
						}}
						spaceBetween={30}
					>
						<SwiperSlide>
							<Card className='h-auto'>
								<CardHeader className='p-0'>
									<div className='h-[300px] relative flex justify-center items-center bg-tertiary'>
										<Image
											src={'/work/1.png'}
											alt='#'
											height={247}
											width={250}
										/>

                    <Badge className={'absolute top-[10px] left-[10px]'}>Hello</Badge>
									</div>
								</CardHeader>
								<div className='h-full py-6 px-8'>
									<h3 className='font-bold'>Evolve Website</h3>
									<p className='subtitle !mb-0'>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit.Cumues, quis
									</p>
								</div>
							</Card>
						</SwiperSlide>
						<SwiperSlide>
							<Card className='h-auto'>
								<CardHeader className='p-0'>
									<div className='h-[300px] flex justify-center items-center bg-tertiary'>
										<Image
											src={'/work/2.png'}
											alt='#'
											height={247}
											width={250}
										/>
									</div>
								</CardHeader>
								<div className='h-full py-6 px-8'>
									<h3 className='font-bold'>Evolve Website</h3>
									<p className='subtitle !mb-0'>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit.Cumues, quis
									</p>
								</div>
							</Card>
						</SwiperSlide>
						<SwiperSlide>
							<Card className='h-auto'>
								<CardHeader className='p-0'>
									<div className='h-[300px] flex justify-center items-center bg-tertiary'>
										<Image
											src={'/work/3.png'}
											alt='#'
											height={247}
											width={250}
										/>
									</div>
								</CardHeader>
								<div className='h-full py-6 px-8'>
									<h3 className='font-bold'>Evolve Website</h3>
									<p className='subtitle !mb-0'>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit.Cumues, quis
									</p>
								</div>
							</Card>
						</SwiperSlide>
						<SwiperSlide>
							<Card className='h-auto'>
								<CardHeader className='p-0'>
									<div className='h-[300px] flex justify-center items-center bg-tertiary'>
										<Image
											src={'/work/4.png'}
											alt='#'
											height={247}
											width={250}
										/>
									</div>
								</CardHeader>
								<div className='h-full py-6 px-8'>
									<h3 className='font-bold'>Evolve Website</h3>
									<p className='subtitle !mb-0'>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit.Cumues, quis
									</p>
								</div>
							</Card>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default Projects;
