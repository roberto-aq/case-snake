import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
	imgSrc: string;
	dark?: boolean;
}

export const Phone = ({
	imgSrc,
	dark = false,
	className,
	...props
}: Props) => {
	return (
		<div
			className={cn(
				'relative pointer-events-none z-50 overflow-hidden',
				className
			)}
			{...props}
		>
			<Image
				src={
					dark
						? '/phone-template-dark-edges.png'
						: '/phone-template-white-edges.png'
				}
				alt='phone'
				width={500}
				height={500}
				className='pointer-events-none z-50 select-none'
			/>

			<div className='absolute -z-10 inset-0'>
				<Image
					src={imgSrc}
					alt='overlaying phone image'
					fill
					className='object-cover min-w-full min-h-full'
				/>
			</div>
		</div>
	);
};
