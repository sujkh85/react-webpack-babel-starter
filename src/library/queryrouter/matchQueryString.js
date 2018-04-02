import StartsWith from '../StartsWith';

export function matchQueryString(query, queryName, {path, exact}) {
	if (!query[queryName]) {
		if (!path) {
			return true;
		}
	}

	if (query[queryName] && path) {
		if (exact) {
			if (query[queryName].toLowerCase() === path.toLowerCase()) {
				return true;
			}
		} else {
			return StartsWith(query[queryName].toLowerCase(), path.toLowerCase())
		}
	}
	return false;
}