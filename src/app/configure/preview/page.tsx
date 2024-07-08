import { notFound } from 'next/navigation';
import { DesignPreview } from './_components/DesignPreview';
import prisma from '@/lib/prisma';

interface Props {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
}

export default async function PreviewPage({ searchParams }: Props) {
	const { id } = searchParams;

	if (!id || typeof id !== 'string') {
		return notFound();
	}

	const configuration = await prisma.configuration.findUnique({
		where: { id },
	});

	if (!configuration) {
		return notFound();
	}

	return <DesignPreview configuration={configuration} />;
}
