// reducers take in a state and action
// return a new state

export default function courseReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_COURSE': 
            return [...state, 
                Object.assign({}, action.course)];
        default:
        return state;
    }
}