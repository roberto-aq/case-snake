import { getAuthStatus } from '@/actions/auth/auth.action';
import { useQuery } from '@tanstack/react-query';

export const useAuthStatus = () => {
	const { data } = useQuery({
		queryKey: ['auth-callback'],
		queryFn: async () => await getAuthStatus(),
		retry: true,
		retryDelay: 500,
	});

	return { data };
};
