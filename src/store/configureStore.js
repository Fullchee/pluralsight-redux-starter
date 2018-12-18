import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

// the middleware we're applying
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

// used at entrypoint of function
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant)
    );
}