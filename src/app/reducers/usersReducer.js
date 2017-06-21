const initialState = {user: null, status:null, error:null, loading: false}

export default function(state = initialState, action) {
	let error;

	switch(action.type) {

		case "SIGNUP_USER_PENDING":// sign in user,  set loading = true and status = signin
			return { ...state, user: null, status:'signin', error:null, loading: true}
		case "SIGNUP_USER_FULFILLED":// sign in user,  set loading = true and status = signin
			return { ...state, user: action.payload.data, status:'signin', error:null, loading: false}
		case "SIGNUP_USER_REJECTED":
			error = action.payload.data || { message: action.payload.message }
			return { ...state, user: null, status: 'signin', error: error, loading: false}
		case "SIGNUP_USER_SUCCESS"://return authenticated user,  make loading = false and status = authenticated
			return { ...state, user: action.payload.user, status:'authenticated', error:null, loading: false}; //<-- authenticated	
		case "SIGNUP_USER_FAILURE":// return error and make loading = false
			error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors      
	    return { ...state, user: null, status:'signup', error:error, loading: false};

		case "SIGNIN_USER_PENDING":// sign in user,  set loading = true and status = signin
			return { ...state, user: null, status:'signin', error:null, loading: true};
		case "SIGNIN_USER_FULFILLED":// sign in user,  set loading = true and status = signin
			return { ...state, user: action.payload.data, status:'signin', error:null, loading: false}; 
		case "SIGNIN_USER_REJECTED":
			error = action.payload.data || { message: action.payload.message }
			return { ...state, user: null, status: 'signin', error: error, loading: false}
		case "SIGNIN_USER_SUCCESS"://return authenticated user,  make loading = false and status = authenticated
			return { ...state, user: action.payload.user, status:'authenticated', error:null, loading: false}; //<-- authenticated
		case "SIGNIN_USER_FAILURE":// return error and make loading = false
			return { ...state, user: null, status:'signin', error:error, loading: false};

		// case "SIGNOUT_USER":
  //     return {...state, user:null, status:'logout', error:null, loading: false};

    case "ME_FROM_TOKEN_PENDING":
    case "ME_FROM_TOKEN_REJECTED":
    case "ME_FROM_TOKEN_FULFILLED":
    	return {
    		...state,
    		user: action.payload
    	}



    default:
    return state;
	}
}