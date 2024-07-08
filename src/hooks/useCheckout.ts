import { createCheckoutSession } from '@/actions/preview/checkout.action';
import { toast } from '@/components/ui/use-toast';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useCheckout = () => {
	const router = useRouter();

	const { mutate: createPaymentSession } = useMutation({
		mutationKey: ['get-checkout-session'],
		mutationFn: createCheckoutSession,
		onError: error => {
			toast({
				title: 'Something went wrong!!!!!',
				description:
					'There was an error on our end. Please try again - Algo salió mal creando la orden',
				variant: 'destructive',
			});
		},
		onSuccess: ({ url }) => {
			if (url) router.push(url);
			else throw new Error('Unable to retrieve payment URL.');
		},
	});

	return {
		createPaymentSession,
	};
};
