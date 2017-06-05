const initialState = {
	containersList: { containers: [], fetching: false, fetched: false, error: null },
	activeContainer: { container: {}, fetching: false, fetched: false, error: null },
	newContainer: { container: {}, fetching: false, fetched: false, error: null }
}

export default function reducer (state = initialState, action) {
	let error;
	switch (action.type) {
		
		// list of containers
		case "FETCH_CONTAINERS_PENDING":
			return { ...state, containersList: { containers: [], fetching: true, error: null } }
		case "FETCH_CONTAINERS_FULFILLED": 
			return { ...state, containersList: { containers: action.payload.data, fetched: true, fetching: false, error: null } }
		case "FETCH_CONTAINERS_REJECTED":
			error = action.payload || {message: action.payload.message};
			return { ...state, containersList: { containers: [], fetching: false, error: error } }

		// single container
		case "FETCH_CONTAINER_PENDING":
			return { ...state, activeContainer: { container: {}, fetching: true, error: null } }
		case "FETCH_CONTAINER_FULFILLED": 
			return { ...state, activeContainer: { container: action.payload.data, fetching: false, fetched: true, error: null } }
		case "FETCH_CONTAINER_REJECTED":
			error = action.payload || {message: action.payload.message};
			return { ...state, activeContainer: { container: {}, fetching: false, error: error } }

		case "SET_PAUSE_CONTAINER":
			return { 
				...state, 
				containersList: {
					...state.containersList,
					containers: state.containersList.containers.map( container => container.Id === action.payload.id ?
						{...container, State: action.payload.status} :
						container
					)
				}
			}
			
		case "SET_UNPAUSE_CONTAINER":
			return { 
				...state, 
				containersList: {
					...state.containersList,
					containers: state.containersList.containers.map( container => container.Id === action.payload.id ?
						{...container, State: action.payload.status} :
						container
					)
				}
			}

		case "CLEAR_CONTAINERS_LIST":
			return {
				...state,
				containersList: {
					containers: []
				}
			}

		case "DELETE_CONTAINER_PENDING":
			return { ...state, containersList: { ...state.containersList, fetched: false, fetching: true} }
		case "DELETE_CONTAINER_FULFILLED":
			return { ...state, containersList: { ...state.containersList, fetching: false, fetched: true} }
		case "DELETE_CONTAINER_REJECTED":
			error = action.payload || { message: action.payload.message}
			return { ...state, activeService: {service: {}, fetching: false, error: error}}
		case "SET_DELETE_COTNAINER":
			const id = action.id
			return { 
				...state,
				containersList: {
					...state.containersList,
					containers: state.containersList.containers.filter((container) => container.Id !== id)
				} 
			}
	}

	return state;
}