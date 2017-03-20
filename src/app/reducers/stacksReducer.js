const initialState = {
	stacksList: { stacks: [], fetching: false, fetched: false, error: null },
	activeStack: { stack: {}, fetching: false, fetched: false, error: null },
	newStack: { stack: null, fetching: false, fetched: false, error: null }
}

export default function reducer (state = initialState, action) {
	switch (action.type) {
		
		case "FETCH_STACKS_PENDING":{
			return { ...state, fetching: true }
		}

		case "FETCH_STACKS_FULFILLED": {
			return { 
				...state, 
				fethced: true,
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