import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
const client_id = "c3e3f0a2435b485f87d962bf812228f1"
const client_secret = "54f1386b974744c38668c4c1c0a3fda0"
const redirect_uri = "http://localhost:8888/callback"
const token_endpoint = `https://accounts.spotify.com/api/token`;

export const GET: RequestHandler = async ({ url, cookies, fetch }) => {
	const code = url.searchParams.get('code') || null;
	const state = url.searchParams.get('state') || null;


	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${Buffer.from(
				`${client_id}:${client_secret}`
			).toString('base64')}`
		},
		body: new URLSearchParams({
			code: code,
			redirect_uri: redirect_uri,
			grant_type: 'authorization_code',
			client_id:client_id
		})
	});

	const responseJSON = await response.json();

	if (responseJSON.error) {
		throw error(400, responseJSON.error_description);
	}

	cookies.set('refresh_token', responseJSON.refresh_token, { path: '/' });
	cookies.set('access_token', responseJSON.access_token, { path: '/' });

	throw redirect(303, '/');
};