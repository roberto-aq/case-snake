'use server';

import { basePrice, productPrices } from '@/config/products';
import prisma from '@/lib/prisma';
import { stripe } from '@/lib/stripe';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { Order } from '@prisma/client';

export const createCheckoutSession = async ({
	configId,
}: {
	configId: string;
}) => {
	const configuration = await prisma.configuration.findUnique({
		where: { id: configId },
	});

	if (!configuration) throw new Error('No such configuration found');

	const { getUser } = getKindeServerSession();
	const user = await getUser();

	if (!user) throw new Error('You need to be logged in');

	const { finish, material } = configuration;

	let price = basePrice;
	if (finish === 'textured') price += productPrices.finish.textured;
	if (material === 'polycarbonate')
		price += productPrices.material.polycarbonate;

	let order: Order | undefined = undefined;

	const existingOrder = await prisma.order.findFirst({
		where: { userId: user.id, configurationId: configuration.id },
	});

	if (existingOrder) {
		order = existingOrder;
	} else {
		order = await prisma.order.create({
			data: {
				amount: price / 100,
				userId: user.id,
				configurationId: configuration.id,
			},
		});
	}

	const product = await stripe.products.create({
		name: 'Custom iPhone Case',
		images: [configuration.imageUrl],
		default_price_data: {
			currency: 'USD',
			unit_amount: price,
		},
	});

	const stripeSession = await stripe.checkout.sessions.create({
		success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order.id}`,
		cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/configure/preview?id=${configuration.id}`,
		payment_method_types: ['card', 'paypal'],
		mode: 'payment',
		shipping_address_collection: {
			allowed_countries: ['DE', 'US', 'EC'],
		},
		metadata: {
			userId: user.id,
			orderId: order.id,
		},
		line_items: [
			{ price: product.default_price as string, quantity: 1 },
		],
	});

	return { url: stripeSession.url };
};
