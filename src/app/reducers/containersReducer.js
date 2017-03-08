const initialState = {
	containers: [],
	fetching: false,
	fetched: false,
	error: null
}

export default function reducer (state = initialState, action) {
	switch (action.type) {
		
		case "FETCH_CONTAINERS_PENDING":{
			return { ...state, fetching: true }
		}

		case "FETCH_CONTAINERS_FULFILLED": {
			return { 
				...state, 
				fetching: false, 
				containers: action.payload.data,
			}
		}

		case "FETCH_CONTAINERS_REJECTED": {
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