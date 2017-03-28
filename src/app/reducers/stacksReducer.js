const initialState = {
	stacksList: { stacks: [], fetching: false, fetched: false, error: null },
	activeStack: { stack: {}, fetching: false, fetched: false, error: null },
	newStack: { stack: null, fetching: false, fetched: false, error: null }
}

export default function reducer (state = initialState, action) {
	let error;
	switch (action.type) {

		// Collection of stacks
		case "FETCH_STACKS_PENDING": // start fetching stacks, fetching : true
			return { ...state, stacksList: {stacks: [], fetching: true, error: null} }
		case "FETCH_STACKS_FULFILLED": 
			return { ...state, stacksList: {stacks: action.payload.data, fetched: true, error: null} }
		case "FETCH_STACKS_REJECTED":
			error = action.payload || {message: action.payload.message};
			return { ...state, stacksList: {stacks: [], fetching: false, error: error} }

		// Single service
		case "FETCH_STACK_PENDING":
			return { ...state, activeStack: {stack: {}, fetching: true, error: null}}
		case "FETCH_STACK_FULFILLED":
			return { ...state, activeStack: {stack: action.payload.data, fetched: true, error: null}}
		case "FETCH_STACK_REJECTED":
			error = action.payload || {message: action.payload.message};
			return { ...state, activeStack: {stack: {}, fetching: false, error: error}}

	}

	return state;
}