const initialState = {
	imageList: [],
	board: [],
	options: [],
	fetching: false,
	fetched: false,
	error: null
}

export default function reducer (state = initialState, action) {
	switch (action.type) {
		
		case "FETCH_CATALOG_PENDING":{
			return { ...state, fetching: true }
		}

		case "FETCH_CATALOG_FULFILLED": {
			return { 
				...state, 
				fetching: false,
        fetched: true,
				imageList: action.payload.data,
			}
		}

		case "FETCH_CATALOG_REJECTED": {
			return { 
				...state, 
				fetched: false, 
				fetching: false, 
				error: action.payload 
			}
		}

		case "ADD_ITEM_TO_BOARD":
			return {
				...state
			}
		case "PUSH_ITEM_TO_BOARD":
    case "SET_ITEM_TO_BOARD":
      return {
        ...state,
        board: action.data
      }
		case "REMOVE_ITEM_FROM_BOARD":
			return {
				...state,
				board: name ? state.board.filter((item) => Object.keys(item.service)[0] !== action.name) : []
			}

		case "SET_OPTIONS_SELECT":
			const options = action.data.filter((stack) => stack.Name !== 'ingress')
				.reduce((options, stack) => {
					console.log(stack.Name.split('-')[1])
	        options.push({
	          value: stack.Name.split('-')[1],
	          label: stack.Name.split('-')[1]
	        })
	        return options
      	}, [])

			return {
				...state,
				options: options
			}
		case "CREATE_SERVICE_FULFILLED":
		 return {
		 		...state,
			 	board:[],
			 	options: []
		 }

		case "DELETE_STACK_FULFILLED":
			return {
				...state,
				options: []
			}
	}

	return state;
}
