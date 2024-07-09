import { changeOrderStatus } from '@/actions/order-status/order-status.action';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useOrderStatus = () => {
	const router = useRouter();

	const { mutate: changeStatus } = useMutation({
		mutationKey: ['change-order-status'],
		mutationFn: changeOrderStatus,
		onSuccess: () => router.refresh(),
	});

	return {
		changeStatus,
	};
};
