'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Card } from '../ui/card';

function Reviews() {
	return (
		<div className='xl:pt-16 mb-36'>
			<div className='container'>
				<h2 className='section-title mb-8 '>Reviews</h2>

				<div className='max-w-[1000px]'>
					<Swiper
						className='h-[300px]'
						spaceBetween={30}
						breakpoints={{
							648: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
						}}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
					>
						<SwiperSlide>
							<Card className='h-auto'>
								<div className='h-[250px] py-6 px-8'>
									<div className='flex gap-2 items-center'>
										<div>
											<Image
												src={'/reviews/avatar-1.png'}
												width={50}
												height={50}
												alt='#'
											/>
										</div>
										<div className='flex flex-col'>
											<h2 className='font-bold leading-none'>
												Richard Tompson
											</h2>
											<span className='text-xs'>Chef</span>
										</div>
									</div>
									<div className='mt-8'>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Accusantium optio officiis est
										ratione porro ducimus
									</div>
								</div>
							</Card>
						</SwiperSlide>
						<SwiperSlide>
							<Card className='h-auto'>
								<div className='h-[250px] py-6 px-8'>
									<div className='flex gap-2 items-center'>
										<div>
											<Image
												src={'/reviews/avatar-1.png'}
												width={50}
												height={50}
												alt='#'
											/>
										</div>
										<div className='flex flex-col'>
											<h2 className='font-bold leading-none'>
												Richard Tompson
											</h2>
											<span className='text-xs'>Chef</span>
										</div>
									</div>
									<div className='mt-8'>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Accusantium optio officiis est
										ratione porro ducimus
									</div>
								</div>
							</Card>
						</SwiperSlide>
						<SwiperSlide>
							<Card className='h-auto'>
								<div className='h-[250px] py-6 px-8'>
									<div className='flex gap-2 items-center'>
										<div>
											<Image
												src={'/reviews/avatar-1.png'}
												width={50}
												height={50}
												alt='#'
											/>
										</div>
										<div className='flex flex-col'>
											<h2 className='font-bold leading-none'>
												Richard Tompson
											</h2>
											<span className='text-xs'>Chef</span>
										</div>
									</div>
									<div className='mt-8'>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Accusantium optio officiis est
										ratione porro ducimus
									</div>
								</div>
							</Card>
						</SwiperSlide>
						<SwiperSlide>
							<Card className='h-auto'>
								<div className='h-[250px] py-6 px-8'>
									<div className='flex gap-2 items-center'>
										<div>
											<Image
												src={'/reviews/avatar-1.png'}
												width={50}
												height={50}
												alt='#'
											/>
										</div>
										<div className='flex flex-col'>
											<h2 className='font-bold leading-none'>
												Richard Tompson
											</h2>
											<span className='text-xs'>Chef</span>
										</div>
									</div>
									<div className='mt-8'>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Accusantium optio officiis est
										ratione porro ducimus
									</div>
								</div>
							</Card>
						</SwiperSlide>
						<SwiperSlide>
							<Card className='h-auto'>
								<div className='h-[250px] py-6 px-8'>
									<div className='flex gap-2 items-center'>
										<div>
											<Image
												src={'/reviews/avatar-1.png'}
												width={50}
												height={50}
												alt='#'
											/>
										</div>
										<div className='flex flex-col'>
											<h2 className='font-bold leading-none'>
												Richard Tompson
											</h2>
											<span className='text-xs'>Chef</span>
										</div>
									</div>
									<div className='mt-8'>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Accusantium optio officiis est
										ratione porro ducimus
									</div>
								</div>
							</Card>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default Reviews;
