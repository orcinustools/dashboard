const initialState = {
	servicesList: { services: [], fetching: false, fetched: false, error: null },
	activeService: { service: {}, fetching: false, fetched: false, error: null },
	newService: { service: null, fetching: false, fetched: false, error: null }
}

export default function reducer (state = initialState, action) {
	let error;
	switch (action.type) {
		
		// Collection of service
		case "FETCH_SERVICES_PENDING": // start fetching service, fetching : true
			return { ...state, servicesList: {services: [], fetching: true, error: null} }
		case "FETCH_SERVICES_FULFILLED": 
			return { ...state, servicesList: {services: action.payload.data, fetched: true, error: null} }
		case "FETCH_SERVICES_REJECTED":
			error = action.payload || {message: action.payload.message};
			return { ...state, servicesList: {services: [], fetching: false, error: error} }

		// Single service
		case "FETCH_SERVICE_PENDING":
			return { ...state, activeService: {service: {}, fetching: true, error: null}}
		case "FETCH_SERVICE_FULFILLED":
			return { ...state, activeService: {service: action.payload.data, fetched: true, fetching: false, error: null}}
		case "FETCH_SERVICE_REJECTED":
			error = action.payload || {message: action.payload.message};
			return { ...state, activeService: {service: {}, fetching: false, error: error}}

	}

	return state;
}