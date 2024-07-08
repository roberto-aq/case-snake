import { productPrices } from '@/config/products';

export const colors = [
	{ label: 'Black', value: 'black', tw: 'zinc-900' },
	{ label: 'Blue', value: 'blue', tw: 'blue-900' },
	{ label: 'Rose', value: 'rose', tw: 'rose-950' },
] as const;

export const models = {
	name: 'models',
	options: [
		{
			label: 'iPhone X',
			value: 'iphonex',
		},
		{
			label: 'iPhone 11',
			value: 'iphone11',
		},
		{
			label: 'iPhone 12',
			value: 'iphone12',
		},
		{
			label: 'iPhone 13',
			value: 'iphone12',
		},
		{
			label: 'iPhone 14',
			value: 'iphone12',
		},
		{
			label: 'iPhone 15',
			value: 'iphone12',
		},
	],
} as const;

export const materials = {
	name: 'material',
	options: [
		{
			label: 'Silicone',
			value: 'silicone',
			description: undefined,
			price: productPrices.material.silicone,
		},
		{
			label: 'Soft Polycarbonate',
			value: 'polycarbonate',
			description: 'Scratch-resistant coating',
			price: productPrices.material.polycarbonate,
		},
	],
} as const;

export const finishes = {
	name: 'finish',
	options: [
		{
			label: 'Smooth Finish',
			value: 'smooth',
			description: undefined,
			price: productPrices.finish.smooth,
		},
		{
			label: 'Textured Finish',
			value: 'textured',
			description: 'Soft grippy texture',
			price: productPrices.finish.textured,
		},
	],
} as const;
