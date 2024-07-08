import axios from 'axios';

import { FetchGalleryPhotosResponse } from '../types';

const ACCESS_KEY: string = 'q72nAJPDJmd0hslaAYvxmPS4yn0SAT7HrdZetaHoRVI';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] = `Client-ID ${ACCESS_KEY}`;
axios.defaults.headers.common['Accept-Version'] = 'v1';
axios.defaults.params = {
	per_page: 8,
	orientation: 'landscape',
};

const fetchGalleryPhotos = async (
	query: string,
	page: number
): Promise<FetchGalleryPhotosResponse> => {
	const response = await axios.get('/search/photos', {
		params: {
			query,
			page,
		},
	});

	return response.data;
};

export default fetchGalleryPhotos;
