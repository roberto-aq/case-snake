import {
	SaveConfigArgs,
	saveConfig as _saveConfig,
} from '@/actions/design/config.action';
import { toast } from '@/components/ui/use-toast';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useSaveConfig = ({
	saveConfiguration,
	configId,
}: {
	saveConfiguration: () => Promise<void>;
	configId: string;
}) => {
	const router = useRouter();

	const { mutate: saveConfig, isPending } = useMutation({
		mutationKey: ['save-config'],
		mutationFn: async (args: SaveConfigArgs) => {
			await Promise.all([saveConfiguration(), _saveConfig(args)]);
		},
		onError: error => {
			toast({
				title: 'Something went wrong!!!!!',
				description:
					'There was an error on our end. Please try again',
				variant: 'destructive',
			});
		},
		onSuccess: () => {
			router.push(`/configure/preview?id=${configId}`);
		},
	});

	return {
		saveConfig,
		isPending,
	};
};
