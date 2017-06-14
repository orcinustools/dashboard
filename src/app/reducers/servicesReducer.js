import { omit } from 'lodash'

const initialState = {
	servicesList: { services: [], fetching: false, fetched: false, error: null },
	activeService: { service: {}, fetching: false, fetched: false, error: null },
	newService: { opt: {} }
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

		case "FETCH_TASK_BY_SERVICE_NAME_FULFILLED":
			return { ...state, activeService: { ...state.activeService, service: {...state.activeService.service, tasks: action.payload.data}}}

		case "DELETE_SERVICE_PENDING":
			return { ...state, servicesList: { ...state.servicesList, fetched: false, fetching: true} }
		case "DELETE_SERVICE_FULFILLED":
			return { ...state, servicesList: { ...state.servicesList, fetching: false, fetched: true} }
		case "DELETE_SERVICE_REJECTED":
			error = action.payload || { message: action.payload.message}
			return { ...state, activeService: {service: {}, fetching: false, error: error}}
		case "SET_DELETE_SERVICE":
			const id = action.payload
			return { 
				...state,
				servicesList: {
					...state.servicesList,
					services: state.servicesList.services.filter((service) => service.ID !== id)
				} 
			}

		// Update service
		case "REPLICAS_INCREMENT":
			return {
				...state,
				servicesList: {
					...state.servicesList,
					services: state.servicesList.services.map((service) => 
						service.ID === action.serviceId ?
						{
							...service,
							updateConfig: {
								update: {
									service: {
										replicas: service.updateConfig ? service.updateConfig.update.service.replicas + 1 : service.Spec.Mode.Replicated.Replicas + 1
									}
								},
								spec: {
									...service,
									PreviousSpec: service.Spec,
								}
							}
						}:
						service
					)
				}
			}
		case "REPLICAS_DECREMENT":
			return {
				...state,
				servicesList: {
					...state.servicesList,
					services: state.servicesList.services.map((service) => 
						service.ID === action.serviceId ?
						{
							...service,
							updateConfig: {
								update: {
									service: {
										replicas: service.updateConfig ? service.updateConfig.update.service.replicas - 1 : service.Spec.Mode.Replicated.Replicas - 1
									}
								},
								spec: {
									...service,
									PreviousSpec: service.Spec,
								}
							}
						}:
						service
					)
				}
			}

		case "SCALING_SERVICE_PENDING":
			return { ...state, servicesList: { ...state.servicesList, fetched: false, fetching: true} }
		case "SCALING_SERVICE_FULFILLED":
			return { ...state, servicesList: { ...state.servicesList, fetching: false, fetched: true} }
		case "SCALING_SERVICE_REJECTED":
		error = action.payload || { message: action.payload.message}
		return { ...state, activeService: {service: {}, fetching: false, error: error}}

		case "SET_NEW_SERVICE":
			return {
				...state,
				newService: {
					opt: {
						...state.newService.opt,
						services: action.data
					}
				}
			}

		case "UPDATE_CUSTOM_DOMAIN":
			return {
				...state,
				newService: {
					...state.newService,
					opt: {
						...state.newService.opt,
						domain: action.payload		
					}
				}
			}

		case "SET_STACK_NAME":
			return {
				...state,
				newService: {
					opt: {
						...state.newService.opt,
						stack: action.data
					}
				}
			}

		case "REMOVE_ITEM_FROM_BOARD":
			/**
			 * remove item from object in es6
			 * const { [action.name]: deleted, ...service } = state.newService.opt.services
			 */
			return {
				...state,
				newService: {
					opt: {
						...state.newService.opt,
						services: omit(state.newService.opt.services, action.name)
					}
				}
			}

		// Create Service
		case "CREATE_SERVICE_PENDING":
			return { ...state, newService: { ...state.newService, fetching: true} }

		case "CREATE_SERVICE_FULFILLED":
			return {
				...state,
				newService: {}
			}

	}

	return state;
}