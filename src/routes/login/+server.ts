import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

const client_id = "c3e3f0a2435b485f87d962bf812228f1"
const client_secret = "54f1386b974744c38668c4c1c0a3fda0"
const redirect_uri = "http://localhost:8888/callback"
const token_endpoint = `https://accounts.spotify.com/api/token`;

const generateRandomString = (length: number) => {
	let randomString = '';
	const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < length; i++) {
		randomString += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
	}
	return randomString;
};

const state = generateRandomString(16);

const scope =
	'user-top-read user-read-email user-read-private';

export const GET: RequestHandler = ({ cookies }) => {
	cookies.set('spotify_auth_state', state);
	throw redirect(
		307,
		`https://accounts.spotify.com/authorize?${new URLSearchParams({
			response_type: 'code',
			client_id: client_id,
			scope,
			redirect_uri: `${redirect_uri}`,
			state,
		})}`
	);
};