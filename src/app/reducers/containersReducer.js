const initialState = {
	containersList: { containers: [], fetching: false, error: null },
	activeContainer: { container: null, fetching: false, error: null },
	newContainer: { container: null, fetching: false, error: null }
}

export default function reducer (state = initialState, action) {
	let error;
	switch (action.type) {
		
		case "FETCH_CONTAINERS_PENDING":
			return { ...state, containersList: { containers: [], fetching: true, error: null } }
		case "FETCH_CONTAINERS_FULFILLED": 
			return { ...state, containersList: { containers: action.payload.data, fetching: false, error: null } }
		case "FETCH_CONTAINERS_REJECTED":
			error = action.payload || {message: action.payload.message};
			return { ...state, containersList: { containers: [], fetching: false, error: error } }

	}

	return state;
}