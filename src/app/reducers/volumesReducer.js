const initialState = {
	volumesList: { volumes: [], fetching: false, error: null },
	activeVolume: { volume: null, fetching: false, error: null },
	newVolume: { volume: null, fetching: false, error: null }
}

export default function reducer (state = initialState, action) {
	switch (action.type) {
		
		case "FETCH_VOLUMES_PENDING":
			return { ...state, volumesList: { volumes: [], fetching: true, error: null } }
		case "FETCH_VOLUMES_FULFILLED": 
			return { ...state, volumesList: { volumes: action.payload.data, fetching: false, error: null } }
		case "FETCH_VOLUMES_REJECTED": 
			error = action.payload || {message: action.payload.message};
			return { ...state, volumesList: { volumes: [], fetching: false, error: error } }

	}

	return state;
}