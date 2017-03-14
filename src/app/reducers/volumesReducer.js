const initialState = {
	volumesList: { volumes: [], fetching: false, error: null },
	activeVolume: { volume: {}, fetching: false, error: null },
	newVolume: { volume: {}, fetching: false, error: null }
}

export default function reducer (state = initialState, action) {
	let error;
	switch (action.type) {
		
		case "FETCH_VOLUMES_PENDING":
			return { ...state, volumesList: { volumes: [], fetching: true, error: null } }
		case "FETCH_VOLUMES_FULFILLED": 
			return { ...state, volumesList: { volumes: action.payload.data, fetching: false, error: null } }
		case "FETCH_VOLUMES_REJECTED": 
			error = action.payload || {message: action.payload.message};
			return { ...state, volumesList: { volumes: [], fetching: false, error: error } }

		case "FETCH_VOLUME_PENDING":
			return { ...state, activeVolume: { volume: {}, fetching: true, error: null } }
		case "FETCH_VOLUME_FULFILLED":
			return { ...state, activeVolume: { volume: action.payload.data, fetching: false, error: null } }
		case "FETCH_VOLUME_REJECTED":
			error = action.payload || {message: action.payload.message};
			return { ...state, activeVolume: { volume: {}, fetching: false, error: error } }


	}

	return state;
}