import { url } from '../helpers/constants';

export function getPersons(cb) {
	fetch(url)
		.then(res => res.json())
		.then(dt => { cb(dt) });
}

export function removePersons(id) {
	fetch(url + id, { method: 'DELETE' });
}
