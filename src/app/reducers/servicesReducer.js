const initialState = {
	servicesList: { services: [], fetching: false, error: null },
	activeService: { service: null, fetching: false, error: null },
	newService: { service: null, fetching: false, error: null }
}

export default function reducer (state = initialState, action) {
	let error;
	switch (action.type) {
		
		case "FETCH_SERVICES_PENDING": // start fetching service, fetching : true
			return { ...state, servicesList: {services: [], fetching: true, error: null} }
		case "FETCH_SERVICES_FULFILLED": 
			return { ...state, servicesList: {services: action.payload.data, fetching: false, error: null} }
		case "FETCH_SERVICES_REJECTED":
			error = action.payload || {message: action.payload.message};
			return { ...state, servicesList: {services: [], fetching: false, error: error} }

	}

	return state;
}