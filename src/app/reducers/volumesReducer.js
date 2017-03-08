const initialState = {
	volumes: [],
	fetching: false,
	fetched: false,
	error: null
}

export default function reducer (state = initialState, action) {
	switch (action.type) {
		
		case "FETCH_VOLUMES_PENDING":{
			return { ...state, fetching: true }
		}

		case "FETCH_VOLUMES_FULFILLED": {
			return { 
				...state, 
				fetching: false, 
				volumes: action.payload.data,
			}
		}

		case "FETCH_VOLUMES_REJECTED": {
			return { 
				...state, 
				fetched: false, 
				fetching: false, 
				error: action.payload 
			}
		}
	}

	return state;
}