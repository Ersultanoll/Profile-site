'use client';

import CountUp from 'react-countup';

function Badge({
	classStyle,
	Icon,
	startCount,
	endCount,
	badgeText,
	endCountText,
}) {
	return (
		<div className={`badge ${classStyle}`}>
			<div className='text-primary'>{Icon}</div>
			<div className='flex gap-2 items-center'>
				<div className='text-4xl text-primary font-bold'>
					<CountUp
						startCount={startCount}
						end={endCount}
						delay={1}
						duration={5}
					/>
					{endCountText}
				</div>
				<div className='leading-none font-semibold'>{badgeText}</div>
			</div>
		</div>
	);
}

export default Badge;
