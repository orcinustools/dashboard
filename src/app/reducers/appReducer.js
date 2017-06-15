const initialState = {
	appInfo: { info:{}, fetching: false, fetched: false, error: null }
}

export default function reducer (state = initialState, action) {
	let error

	switch(action.type) {
    case "GET_INFO_PENDING":
    	return { ...state, appInfo: { ...state.appInfo, fetching: true } }
    case "GET_INFO_REJECTED":
    	error = action.payload.data
    case "GET_INFO_FULFILLED":
    	return {
    		...state,
				appInfo: {
					...state.appInfo,
					fetched: true,
					fetching: false,
					info: action.payload.data
				} 
    	}
	}
	return state
}