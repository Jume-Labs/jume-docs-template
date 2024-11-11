import type { Component } from 'svelte';

export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

export type Data = {
	data: {
		meta: Post;
		content: Component;
	};
};
