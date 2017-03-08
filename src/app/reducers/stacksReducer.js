const initialState = {
	stacks: [],
	fetching: false,
	fetched: false,
	error: null
}

export default function reducer (state = initialState, action) {
	switch (action.type) {
		
		case "FETCH_STACKS_PENDING":{
			return { ...state, fetching: true }
		}

		case "FETCH_STACKS_FULFILLED": {
			return { 
				...state, 
				fetching: false, 
				stacks: action.payload.data,
			}
		}

		case "FETCH_STACKS_REJECTED": {
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