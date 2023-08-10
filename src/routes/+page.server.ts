
export function load({ cookies }) {
	const accessToken = cookies.get('access_token');

	return {
		accessToken
	};
}