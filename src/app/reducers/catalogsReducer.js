const board = [
  {
    "name" : "wordpress",
    "logo" : "wordpress.svg",
    "description" : "Elit aliquip tempor nulla officia elit laboris nulla irure dolor deserunt amet Lorem. Quis amet quis deserunt eu nostrud Lorem sint exercitation culpa. Laboris commodo excepteur incididunt mollit do eiusmod magna quis veniam adipisicing sunt laborum aute. Deserunt magna adipisicing in ipsum ea labore. Cillum sit aliqua non mollit duis exercitation. Lorem velit ad enim aliquip adipisicing et dolor eiusmod do culpa sint. Tempor laborum consectetur ad reprehenderit veniam elit id excepteur commodo quis deserunt.",
    "image": "ninja.ijakarta.id/wordpress:latest",
    "auth": true,
    "ports": [
      "8080:80"
    ],
    "environment": [
      "WORDPRESS_DB_HOST=mysql:3306",
      "WORDPRESS_DB_PASSWORD=wordpress"
    ]
  },
  {
    "name" : "mysql",
    "logo" : "mysql.svg",
    "description" : "Elit aliquip tempor nulla officia elit laboris nulla irure dolor deserunt amet Lorem. Quis amet quis deserunt eu nostrud Lorem sint exercitation culpa. Laboris commodo excepteur incididunt mollit do eiusmod magna quis veniam adipisicing sunt laborum aute. Deserunt magna adipisicing in ipsum ea labore. Cillum sit aliqua non mollit duis exercitation. Lorem velit ad enim aliquip adipisicing et dolor eiusmod do culpa sint. Tempor laborum consectetur ad reprehenderit veniam elit id excepteur commodo quis deserunt.",
    "image": "ninja.ijakarta.id/mysql:latest",
    "auth": true,
    "ports": [
      "3306:36"
    ]
  },
  {
    "name" : "redis",
    "logo" : "redis.svg",
    "description" : "Elit aliquip tempor nulla officia elit laboris nulla irure dolor deserunt amet Lorem. Quis amet quis deserunt eu nostrud Lorem sint exercitation culpa. Laboris commodo excepteur incididunt mollit do eiusmod magna quis veniam adipisicing sunt laborum aute. Deserunt magna adipisicing in ipsum ea labore. Cillum sit aliqua non mollit duis exercitation. Lorem velit ad enim aliquip adipisicing et dolor eiusmod do culpa sint. Tempor laborum consectetur ad reprehenderit veniam elit id excepteur commodo quis deserunt.",
    "image": "ninja.ijakarta.id/mysql:latest",
    "auth": true,
    "ports": [
      "3306:36"
    ]
  },
  {
    "name" : "golang",
    "logo" : "gopher.svg",
    "description" : "Elit aliquip tempor nulla officia elit laboris nulla irure dolor deserunt amet Lorem. Quis amet quis deserunt eu nostrud Lorem sint exercitation culpa. Laboris commodo excepteur incididunt mollit do eiusmod magna quis veniam adipisicing sunt laborum aute. Deserunt magna adipisicing in ipsum ea labore. Cillum sit aliqua non mollit duis exercitation. Lorem velit ad enim aliquip adipisicing et dolor eiusmod do culpa sint. Tempor laborum consectetur ad reprehenderit veniam elit id excepteur commodo quis deserunt.",
    "image": "ninja.ijakarta.id/mysql:latest",
    "auth": true,
    "ports": [
      "3306:36"
    ]
  },
  {
    "name" : "Centos",
    "logo" : "centos-icon.svg",
    "description" : "Elit aliquip tempor nulla officia elit laboris nulla irure dolor deserunt amet Lorem. Quis amet quis deserunt eu nostrud Lorem sint exercitation culpa. Laboris commodo excepteur incididunt mollit do eiusmod magna quis veniam adipisicing sunt laborum aute. Deserunt magna adipisicing in ipsum ea labore. Cillum sit aliqua non mollit duis exercitation. Lorem velit ad enim aliquip adipisicing et dolor eiusmod do culpa sint. Tempor laborum consectetur ad reprehenderit veniam elit id excepteur commodo quis deserunt.",
    "image": "ninja.ijakarta.id/mysql:latest",
    "auth": true,
    "ports": [
      "3306:36"
    ]
  }
]

const initialState = {
	imageList: [],
	board: [],
	fetching: false,
	fetched: false,
	error: null
}

export default function reducer (state = initialState, action) {
	switch (action.type) {
		
		case "FETCH_IMAGES_PENDING":{
			return { ...state, fetching: true }
		}

		case "FETCH_IMAGES_FULFILLED": {
			return { 
				...state, 
				fetching: false, 
				imageList: action.payload.data,
			}
		}

		case "FETCH_IMAGES_REJECTED": {
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
				board: state.board.filter((item, index) => index !== action.index)
			}

	}

	return state;
}