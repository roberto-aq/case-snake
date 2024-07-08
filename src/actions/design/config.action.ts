'use server';

import prisma from '@/lib/prisma';
import {
	CaseColor,
	CaseFinish,
	CaseMaterial,
	PhoneModel,
} from '@prisma/client';

export type SaveConfigArgs = {
	color: CaseColor;
	finish: CaseFinish;
	material: CaseMaterial;
	model: PhoneModel;
	configId: string;
};

export async function saveConfig({
	configId,
	color,
	material,
	finish,
	model,
}: SaveConfigArgs) {
	await prisma.configuration.update({
		where: { id: configId },
		data: {
			color,
			finish,
			material,
			model,
		},
	});
}
