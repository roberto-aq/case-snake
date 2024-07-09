import { getPaymentStatus } from '@/actions/thank-you/thank-you.action';
import { useQuery } from '@tanstack/react-query';

export const useThankYou = ({ orderId }: { orderId: string }) => {
	const { data } = useQuery({
		queryKey: ['get-payment-status'],
		queryFn: async () => await getPaymentStatus({ orderId }),
		retry: true,
		retryDelay: 500,
	});

	return { data };
};
