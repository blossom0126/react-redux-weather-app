import axios from 'axios';

const API_KEY = '71019c97455e432901d8c2413b8eeaa4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us&units=metric`;
	const request = axios.get(url); // will return a promise


	return {
		type: FETCH_WEATHER,
		payload: request 
	};
}

