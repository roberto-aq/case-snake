import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { DesignConfigurator } from './_components/DesignConfigurator';

interface Props {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
}

export default async function DesignPage({ searchParams }: Props) {
	const { id } = searchParams;

	if (!id || typeof id !== 'string') {
		return notFound();
	}

	const configuration = await prisma.configuration.findUnique({
		where: { id },
	});

	if (!configuration) return notFound();

	const { width, height, imageUrl } = configuration;

	return (
		<DesignConfigurator
			imageUrl={imageUrl}
			imageDimensions={{ width, height }}
			configId={configuration.id}
		/>
	);
}
