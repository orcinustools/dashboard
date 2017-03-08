const initialState = {
	services: [],
	fetching: false,
	fetched: false,
	error: null
}

export default function reducer (state = initialState, action) {
	switch (action.type) {
		
		case "FETCH_SERVICES_PENDING":{
			return { ...state, fetching: true }
		}

		case "FETCH_SERVICES_FULFILLED": {
			return { 
				...state, 
				fetching: false, 
				services: action.payload.data,
			}
		}

		case "FETCH_SERVICES_REJECTED": {
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