'use client';

import { OrderStatus } from '@prisma/client';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useOrderStatus } from '@/hooks/useOrderStatus';

interface Props {
	id: string;
	orderStatus: OrderStatus;
}

const LABEL_MAP: Record<keyof typeof OrderStatus, string> = {
	awaiting_shipment: 'Awaiting Shipment',
	fulfilled: 'Fulfilled',
	shipped: 'Shipped',
};

export const StatusDropdown = ({ id, orderStatus }: Props) => {
	const { changeStatus } = useOrderStatus();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					className='w-52 flex justify-between items-center'
				>
					{LABEL_MAP[orderStatus]}
					<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='p-0'>
				{Object.keys(OrderStatus).map(status => (
					<DropdownMenuItem
						key={status}
						className={cn(
							'flex text-sm gap-1 items-center p-2.5 cursor-default hover:bg-zinc-100',
							{
								'bg-zinc-100': orderStatus === status,
							}
						)}
						onClick={() =>
							changeStatus({ id, newStatus: status as OrderStatus })
						}
					>
						<Check
							className={cn(
								'mr-2 h-4 w-4 text-primary',
								orderStatus === status ? 'opacity-100' : 'opacity-0'
							)}
						/>
						{LABEL_MAP[status as OrderStatus]}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
