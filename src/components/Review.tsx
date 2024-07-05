import { Check, Star } from 'lucide-react';
import Image from 'next/image';

interface Props {
	clientName: string;
	review: React.ReactNode;
	imageSrc: string;
}

export const Review = ({ clientName, review, imageSrc }: Props) => {
	return (
		<div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
			<div className='flex gap-0.5 mb-2'>
				<Star className='h-4 w-4 text-green-600 fill-green-600' />
				<Star className='h-4 w-4 text-green-600 fill-green-600' />
				<Star className='h-4 w-4 text-green-600 fill-green-600' />
				<Star className='h-4 w-4 text-green-600 fill-green-600' />
				<Star className='h-4 w-4 text-green-600 fill-green-600' />
			</div>

			<div className='text-lg leading-8'>{review}</div>

			<div className='flex gap-4 mt-2'>
				<Image
					src={imageSrc}
					width={48}
					height={48}
					className='rounded-full object-cover'
					alt='User 1'
				/>

				<div className='flex flex-col'>
					<p className='font-semibold'>{clientName}</p>
					<div className='flex gap-1.5 items-center text-zinc-600'>
						<Check className='h-4 w-4 stroke-[3px] text-green-600' />
						<p className='text-sm'>Verified Purchase</p>
					</div>
				</div>
			</div>
		</div>
	);
};
