'use client';

import Image from 'next/image';
import { MaxWidthWrapper } from './MaxWidthWrapper';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { cn, splitArray } from '@/lib/utils';
import { phones } from '@/constants/phones';
import { ReviewColumn } from './ReviewColumn';

function ReviewGrid() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(containerRef, {
		once: true,
		amount: 0.4,
	});
	const colums = splitArray(phones, 3);
	const column1 = colums[0];
	const column2 = colums[1];
	const column3 = splitArray(colums[2], 2);

	return (
		<div
			ref={containerRef}
			className='relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3'
		>
			{isInView ? (
				<>
					<ReviewColumn
						reviews={[...column1, ...column3.flat(), ...column2]}
						reviewClassName={reviewIndex =>
							cn({
								'md:hidden':
									reviewIndex >= column1.length + column3[0].length,
								'lg:hidden': reviewIndex >= column1.length,
							})
						}
						msPerPixel={10}
					/>
					<ReviewColumn
						reviews={[...column2, ...column3[1]]}
						className='hidden md:block'
						reviewClassName={reviewIndex =>
							reviewIndex >= column2.length ? 'lg:hidden' : ''
						}
						msPerPixel={15}
					/>
					<ReviewColumn
						reviews={[...column3.flat()]}
						className='hidden md:block'
						msPerPixel={10}
					/>
				</>
			) : null}
			<div className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100'/>
			<div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100'/>
		</div>
	);
}

export const Reviews = () => {
	return (
		<MaxWidthWrapper className='relative max-w-5xl'>
			<Image
				aria-hidden='true'
				src='/what-people-are-buying.png'
				className='absolute select-none hidden xl:block -left-32 top-1/3'
				alt='What people are buying image'
				width={150}
				height={150}
			/>

			<ReviewGrid />
		</MaxWidthWrapper>
	);
};