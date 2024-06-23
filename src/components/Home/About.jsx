import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { Calendar, GraduationCap, HouseIcon, MailIcon, PhoneIcon, UserIcon } from 'lucide-react';
import { FaSuitcase } from 'react-icons/fa';

function About() {
	return (
		<section className='py-12 container'>
			<h2 className='section-title'>About me</h2>
			<div className='mt-10 flex justify-between'>
				<div className='hidden xl:block w-[505px] h-[505px] bg-shape-about-light bg-no-repeat'>
					<Image
						src={'/about/developer.png'}
						width={700}
						height={700}
						alt='#'
					/>
				</div>
				<div className='max-w-[600px] mx-auto xl:mx-0 w-full xl:text-left text-center'>
					<Tabs defaultValue='personal'>
						<TabsList className='grid xl:grid-cols-3'>
							<TabsTrigger className='' value='personal'>
								Personal Info
							</TabsTrigger>
							<TabsTrigger className='' value='qualifications'>
								Qualifications
							</TabsTrigger>
							<TabsTrigger className='' value='skills'>
								Skills
							</TabsTrigger>
						</TabsList>
						<div className='mt-12'>
							<TabsContent value='personal'>
								<h2 className='font-bold text-2xl mb-2'>
									Unmatched Service Quality for Over 10 Years
								</h2>
								<p className='subtitle'>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Expedita, modi aspernatur? Obcaecati fuga
									provident dolorem ex harum animi itaque vel
								</p>
								<div className='grid mb-12 max-xl:justify-center gap-y-4 md:grid-cols-2'>
									<div className='flex gap-3 items-center justify-center xl:justify-start'>
										<UserIcon className='text-primary' />
										Ryan Davis
									</div>
									<div className='flex gap-3 items-center justify-center xl:justify-start'>
										<PhoneIcon className='text-primary' />
										+012 345 6789
									</div>
									<div className='flex gap-3 items-center justify-center xl:justify-start'>
										<MailIcon className='text-primary' />
										youremail@email.com
									</div>
									<div className='flex gap-3 items-center justify-center xl:justify-start'>
										<Calendar className='text-primary' />
										Born on 10 Mar, 1998
									</div>
									<div className='flex gap-3 items-center justify-center xl:justify-start'>
										<GraduationCap className='text-primary' />
										Master on Computer Science
									</div>
									<div className='flex gap-3 items-center justify-center xl:justify-start'>
										<HouseIcon className='text-primary' />
										321 Blue Avence,NY,USA
									</div>
								</div>
								<div className='flex gap-3 flex-col'>
									<h4 className='text-primary'>Language Skill</h4>
									<div className='border-border border'></div>
									<div>English,French,Spanish,Italian</div>
								</div>
							</TabsContent>
							<TabsContent value='qualifications'>

              <h2 className='font-bold text-3xl mb-10'>My Awesome Journey</h2>
								<div className='grid md:grid-cols-2 gap-y-4'>
									<div className='flex flex-col gap-y-4'>
										<h2 className='text-primary flex gap-2 items-center'>
											<FaSuitcase size={26} />
											<span className='text-2xl -mb-[2px]'>
												Experience
											</span>
										</h2>

										<div className='flex gap-4 group'>
											<div className='h-[94px] relative border-neutral-300 border-[1px]'>
												<div className='absolute top-0 rounded-full -left-[8px] transition-transform duration-500 group-hover:translate-y-[84px] h-[16px] w-[16px] bg-primary'></div>
											</div>
											<div className='flex flex-col gap-4'>
												<div>
													<h3 className='font-bold text-xl mb-2'>
														ABC Inc.
													</h3>
													<div className=''>Software Engineer</div>
												</div>
												<div className='text-primary'>
													2018-2020
												</div>
											</div>
										</div>
										<div className='flex gap-4 group'>
											<div className='h-[94px] relative border-neutral-300 border-[1px]'>
												<div className='absolute top-0 rounded-full -left-[8px] transition-transform duration-500 group-hover:translate-y-[84px] h-[16px] w-[16px] bg-primary'></div>
											</div>
											<div className='flex flex-col gap-4'>
												<div>
													<h3 className='font-bold text-xl mb-2'>
														ABC Inc.
													</h3>
													<div className=''>Software Engineer</div>
												</div>
												<div className='text-primary'>
													2018-2020
												</div>
											</div>
										</div>
										<div className='flex gap-4 group'>
											<div className='h-[94px] relative border-neutral-300 border-[1px]'>
												<div className='absolute top-0 rounded-full -left-[8px] transition-transform duration-500 group-hover:translate-y-[84px] h-[16px] w-[16px] bg-primary'></div>
											</div>
											<div className='flex flex-col gap-4'>
												<div>
													<h3 className='font-bold text-xl mb-2'>
														ABC Inc.
													</h3>
													<div className=''>Software Engineer</div>
												</div>
												<div className='text-primary'>
													2018-2020
												</div>
											</div>
										</div>
									</div>
									<div className='flex flex-col gap-y-4'>
										<h2 className='text-primary flex gap-2 items-center'>
											<FaSuitcase size={26} />
											<span className='text-2xl -mb-[2px]'>
												Experience
											</span>
										</h2>

										<div className='flex gap-4 group'>
											<div className='h-[94px] relative border-neutral-300 border-[1px]'>
												<div className='absolute top-0 rounded-full -left-[8px] transition-transform duration-500 group-hover:translate-y-[84px] h-[16px] w-[16px] bg-primary'></div>
											</div>
											<div className='flex flex-col gap-4'>
												<div>
													<h3 className='font-bold text-xl mb-2'>
														ABC Inc.
													</h3>
													<div className=''>Software Engineer</div>
												</div>
												<div className='text-primary'>
													2018-2020
												</div>
											</div>
										</div>
										<div className='flex gap-4 group'>
											<div className='h-[94px] relative border-neutral-300 border-[1px]'>
												<div className='absolute top-0 rounded-full -left-[8px] transition-transform duration-500 group-hover:translate-y-[84px] h-[16px] w-[16px] bg-primary'></div>
											</div>
											<div className='flex flex-col gap-4'>
												<div>
													<h3 className='font-bold text-xl mb-2'>
														ABC Inc.
													</h3>
													<div className=''>Software Engineer</div>
												</div>
												<div className='text-primary'>
													2018-2020
												</div>
											</div>
										</div>
										<div className='flex gap-4 group'>
											<div className='h-[94px] relative border-neutral-300 border-[1px]'>
												<div className='absolute top-0 rounded-full -left-[8px] transition-transform duration-500 group-hover:translate-y-[84px] h-[16px] w-[16px] bg-primary'></div>
											</div>
											<div className='flex flex-col gap-4'>
												<div>
													<h3 className='font-bold text-xl mb-2'>
														ABC Inc.
													</h3>
													<div className=''>Software Engineer</div>
												</div>
												<div className='text-primary'>
													2018-2020
												</div>
											</div>
										</div>
									</div>
								</div>
							</TabsContent>
						</div>
					</Tabs>
				</div>
			</div>
		</section>
	);
}

export default About;
