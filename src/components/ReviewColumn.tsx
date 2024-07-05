'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { Phone } from './Phone';

interface Props {
	reviews: string[];
	className?: string;
	reviewClassName?: (reviewIndex: number) => string;
	msPerPixel?: number;
}

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
	imgSrc: string;
}

function Review({ imgSrc, className, ...props }: ReviewProps) {
	const POSSIBLE_ANIMATION_DELAYS = [
		'0s',
		'0.1s',
		'0.2s',
		'0.3s',
		'0.4s',
		'0.5s',
	];

	const animationDelay =
		POSSIBLE_ANIMATION_DELAYS[
			Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
		];

	return (
		<div
			className={cn(
				'animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5',
				className
			)}
			style={{ animationDelay }}
			{...props}
		>
			<Phone imgSrc={imgSrc} />
		</div>
	);
}

export const ReviewColumn = ({
	reviews,
	className,
	reviewClassName,
	msPerPixel = 0,
}: Props) => {
	const columRef = useRef<HTMLDivElement | null>(null);
	const [columnHeight, setColumnHeight] = useState(0);
	const duration = `${columnHeight * msPerPixel}ms`;

	useEffect(() => {
		if (!columRef.current) return;

		const resizeObserver = new window.ResizeObserver(() => {
			setColumnHeight(columRef.current?.offsetHeight ?? 0);
		});

		resizeObserver.observe(columRef.current);

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return (
		<div
			ref={columRef}
			className={cn('animate-marquee space-y-8 py-4', className)}
			style={
				{
					'--marquee-duration': duration,
				} as React.CSSProperties
			}
		>
			{reviews.concat(reviews).map((imgSrc, reviewIndex) => (
				<Review
					key={reviewIndex}
					className={reviewClassName?.(reviewIndex % reviews.length)}
					imgSrc={imgSrc}
				/>
			))}
		</div>
	);
};
